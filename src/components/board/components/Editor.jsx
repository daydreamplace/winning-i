import React, { useRef, useCallback } from "react";
import { Editor as ReactToastEditor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

const Editor = (props) => {
  const editorRef = useRef(null);

  const onChange = useCallback(() => {
    const instance = editorRef.current?.getInstance();
    if (!instance || !instance.getHTML) return;
    props.onChange?.(instance.getHTML());
  }, [props, editorRef]);

  return (
    <ReactToastEditor
      {...props}
      ref={editorRef}
      onChange={onChange}
      plugins={[colorSyntax]}
    />
  );
};

export default Editor;

Editor.defaultProps = {
  initialValue: "",
  previewStyle: "vertical",
  height: "600px",
  initialEditType: "markdown",
  useCommandShortcut: true,
  usageStatistics: false,
  hideModeSwitch: false,
};
