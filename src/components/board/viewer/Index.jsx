// import React from "react";
// import { Viewer } from "@toast-ui/react-editor";
// import "@toast-ui/editor/dist/toastui-editor-viewer.css";

// function ContentsViewer({ watchContent }) {
//   return <Viewer initialValue={watchContent || ""} />;
// }

// export default ContentsViewer;

import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

const ContentViewer = ({ wacthContent, ...props }) => {
  return <Viewer initialValue={wacthContent} />;
};

export default ContentViewer;
