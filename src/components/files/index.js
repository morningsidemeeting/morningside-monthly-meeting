import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { format } from "date-fns";
import { parseISO } from "date-fns/esm";
import * as Styles from "./files.module.scss";
import BackgroundImage from "gatsby-background-image";
import Gapi, { loadAndInitGapi } from "../gapi";
import { FOLDER_IDS } from "../../shared/googleConfig";

const BackgroundHeader = ({ className, fileType, children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        pdf: file(relativePath: { eq: "pdf.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        gdoc: file(relativePath: { eq: "gdoc.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        doc: file(relativePath: { eq: "doc.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        folder: file(relativePath: { eq: "folder2.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      fragment childImgFields on ImageSharp {
        fluid(quality: 90, maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    `
  );

  const imageData = data[fileType]
    ? data[fileType].childImageSharp.fluid
    : null;

  const headerStyles = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "25px",
    backgroundPosition: "top left",
  };

  return imageData ? (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      style={headerStyles}
    >
      {children}
    </BackgroundImage>
  ) : (
    <header>{children}</header>
  );
};

async function fetchDrive(folderId, orderBy = "name", pageSize = 100) {
  // accept folder slugs as well as IDs:
  if (FOLDER_IDS[folderId]) {
    folderId = FOLDER_IDS[folderId];
  }
  return new Promise(async (resolve, reject) => {
    try {
      loadAndInitGapi().then((client) => {
        client.drive.files
          .list({
            q: `'${folderId}' in parents`,
            orderBy,
            pageSize,
            fields:
              "files(id, name, description, starred, mimeType, webViewLink, createdTime, modifiedTime)",
          })
          .then(function (response) {
            resolve(response.result.files);
          })
          .catch((error) => {
            resolve([]);
          });
      });
    } catch (error) {
      resolve([]);
    }
  });
}

export function removeFileExtension(name) {
  return name.substr(0, name.lastIndexOf(".")) || name;
}

const Files = ({
  folderIds = [],
  orderBy,
  withModifiedOn = false,
  formatFileName,
}) => {
  const [files, setFiles] = useState([]);
  const [hasFetchedFiles, setHasFetchedFiles] = useState(false);

  async function fetchDriveFiles() {
    if (hasFetchedFiles) {
      return;
    }

    let loadedFiles = [];
    await Promise.all(
      folderIds.map(async (folderId) => {
        const folderFiles = await fetchDrive(folderId, orderBy);
        loadedFiles = loadedFiles.concat(...folderFiles);
      })
    );

    setHasFetchedFiles(true);
    setFiles(formatFiles(loadedFiles));
  }

  function formatFiles(files) {
    return files.map((f) => {
      const { modifiedTime, name } = f;
      return Object.assign({}, f, {
        modifiedTime: format(parseISO(modifiedTime), "yyyy-MM-dd"),
        name:
          formatFileName && typeof formatFileName === "function"
            ? formatFileName(name)
            : name,
      });
    });
    // return files;
  }

  function renderFile({
    id,
    name,
    webViewLink,
    description,
    modifiedTime,
    mimeType,
  }) {
    const modifiedOn = format(parseISO(modifiedTime), "yyyy-MM-dd");
    let fileType;
    switch (mimeType) {
      case "application/pdf":
        fileType = "pdf";
        break;
      case "application/vnd.google-apps.document":
      case "application/vnd.google-apps.shortcut":
        fileType = "gdoc";
        break;
      case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      case "application/msword":
        fileType = "doc";
        break;
      case "application/vnd.google-apps.folder":
        fileType = "folder";
        break;
      default:
        fileType = "unknown";
        console.log("unknown file type: " + mimeType);
        break;
    }
    return (
      <li key={id} className={Styles[fileType]}>
        <BackgroundHeader fileType={fileType}>
          <a href={webViewLink}>{name}</a>
        </BackgroundHeader>
        {description ? <p>{description}</p> : null}
        {withModifiedOn === true ? (
          <span className={Styles.timestamp}>Modified on {modifiedOn}</span>
        ) : null}
      </li>
    );
  }

  function renderFiles() {
    if (hasFetchedFiles) {
      if (!files.length) {
        return <p>No files found.</p>;
      } else {
        return <ul className={Styles.files}>{files.map(renderFile)}</ul>;
      }
    } else {
      return <p>Loading files...</p>;
    }
  }

  useEffect(() => {
    fetchDriveFiles();
  });

  return (
    <React.Fragment>
      <Gapi />
      <section>{renderFiles()}</section>
    </React.Fragment>
  );
};
export default Files;
