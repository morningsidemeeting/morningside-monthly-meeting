import React from "react";
import FilesPage from "../../components/files/filesPage";
import { removeFileExtension } from "../../components/files/";

export default function MemorialMinutesPage() {
  return (
    <FilesPage
      folderSlug="memorial"
      formatFileName={removeFileExtension}
      pageTitle="Memorial Minutes"
    >
      <section>
        <p>
          Local meetings often write a memorial for deceased Friends that
          celebrates the Friends life and activities and contributions among
          Friends. Upon approval by the meeting, these memorials may be entered
          into the meeting's minutes.
        </p>
      </section>
    </FilesPage>
  );
}
