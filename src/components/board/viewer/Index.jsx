// import React from "react";
// import { Viewer } from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor-viewer.css";

// function ContentsViewer({ watchContent }) {
//   return <Viewer initialValue={watchContent || ""} />;
// }

// export default ContentsViewer;

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/react-editor";

const ContentViewer = ({ wacthContent }) => {
  return <Viewer initialValue={wacthContent} />;
};

export default ContentViewer;
