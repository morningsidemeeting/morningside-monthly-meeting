/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require(`path`);
module.exports = {
  siteMetadata: {
    url: `https://morningsidemeeting.github.io/`,
    image: "/images/ny_riverside_church.jpg",
    title: `Morningside Monthly Meeting`,
    titleTemplate: "Morningside Monthly Meeting | %s",
    author: `My Name`,
    description: `A welcoming community dedicated to the Quaker testimonies of equality, integrity, simplicity, and peace.`,
    social: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/MorningsideQuakers`,
      },
      {
        name: `github`,
        url: `https://github.com/morningsidequakermeeting`,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-csv",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
};
