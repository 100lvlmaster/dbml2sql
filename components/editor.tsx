import { Controlled as CodeMirror } from "react-codemirror2";
import { useEditor } from "../store/editor";

const Editor = () => {
  const [importAs, exportAs, editorText, setEditorText, setPreviewText] =
    useEditor((state) => [
      state.importAs,
      state.exportAs,
      state.editorText,
      state.setEditorText,
      state.setPreviewText,
    ]);
  ///
  const handleOnChange = (e: string) => {
    setEditorText(e);
  };

  return (
    <CodeMirror
      value={editorText}
      options={{ lineWrapping: true, mode: importAs.value, lineNumbers: true }}
      onBeforeChange={(editor, data, value) => {
        handleOnChange(value);
      }}
      onChange={(editor, data, value) => {}}
    />
  );
};

export default Editor;
