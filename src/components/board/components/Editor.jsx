import React, { useRef, useCallback } from "react";
import { Editor as ReactToastEditor } from "@toast-ui/react-editor";

const Editor = (props) => {
  const editorRef = useRef(null);

  const onChange = useCallback(() => {
    const instance = editorRef.current?.getInstance();
    if (!instance || !instance.getHTML) return;
    props.onChange?.(instance.getHTML());
  }, [props, editorRef]);

  return <ReactToastEditor {...props} ref={editorRef} onChange={onChange} />;
};

export default Editor;

Editor.defaultProps = {
  initialValue: "",
  previewStyle: "vertical",
  height: "600px",
  initialEditType: "wysiwyg",
  useCommandShortcut: true,
  usageStatistics: false,
  hideModeSwitch: true,
};
