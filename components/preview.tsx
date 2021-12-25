import { Box } from "@chakra-ui/react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useEditor } from "../store/editor";

const Preview = () => {
  const value = useEditor((state) => state.previewText);
  return (
    <Box height={"100%"} width={"50%"}>
      <CodeMirror
        value={value}
        options={{
          viewportMargin: Infinity,
          mode: "json",
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => {}}
        onChange={(editor, data, value) => {}}
      />
    </Box>
  );
};

export default Preview;
