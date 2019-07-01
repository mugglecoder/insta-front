import React, { useEffect } from "react";
import Uppy from "@uppy/core";
import { DragDrop } from "@uppy/react";
import XHRUpload from "@uppy/xhr-upload";
import { Dashboard } from "@uppy/react";
import { ProgressBar } from "@uppy/react";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/progress-bar/dist/style.css";

export default () => {
  const uppy = Uppy({
    id: "avatar123",
    meta: { type: "avatar" },
    restrictions: {
      maxFileSize: 1000000,
      maxNumberOfFiles: 30,
      minNumberOfFiles: 1,
      allowedFileTypes: ["image/*", "video/*"]
    }
  });
  console.log(uppy);
  uppy.on("complete", result => {
    const url = console.log(result, "result");
  });
  useEffect(() => {}, [uppy]);
  return (
    <div>
      <ProgressBar uppy={uppy} />
      <Dashboard
        uppy={uppy}
        locale={{
          strings: {
            dropHereOr: "파일을 드랍하거나 %{선택하기}",
            browse: "browse"
          }
        }}
      />
    </div>
  );
};
