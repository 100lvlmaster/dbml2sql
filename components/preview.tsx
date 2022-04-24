import { Controlled as CodeMirror } from "react-codemirror2";
import { useEditor } from "../store/editor";
require("codemirror/mode/sql/sql");

const Preview = () => {
  const [previewText, exportAs] = useEditor((state) => [
    state.previewText,
    state.exportAs,
  ]);
  return (
    <CodeMirror
      value={previewText}
      options={{
        lineWrapping: true,
        mode: "sql",
        lineNumbers: true,
        readOnly: true,
      }}
      onBeforeChange={(editor, data, value) => {}}
      onChange={(editor, data, value) => {}}
    />
  );
};

export default Preview;
