import { Box } from "@chakra-ui/react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { convertOption } from "../lib/converter";
import { useEditor } from "../store/editor";
import { useConvertOptions } from "../store/options";

const Editor = () => {
  ///
  const [value, setValue, setPreviewText] = useEditor((state) => [
    state.editorText,
    state.setEditorText,
    state.setPreviewText,
  ]);
  ///
  const [importOption, exportOption] = useConvertOptions((state) => [
    state.import,
    state.export,
  ]);
  ///
  const handleOnChange = (e: string) => {
    setValue(e);
    const result = convertOption(e, { from: importOption, to: exportOption });
    if (result) {
      setPreviewText(result);
    }
  };

  return (
    <Box height={"100%"} width={"50%"}>
      <CodeMirror
        value={value}
        options={{
          mode: "dbml",
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {
          handleOnChange(value);
        }}
        onChange={(editor, data, value) => {}}
      />
    </Box>
  );
};

export default Editor;
