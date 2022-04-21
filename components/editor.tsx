import { Box } from "@chakra-ui/react";
import { Controlled as CodeMirror } from "react-codemirror2";

const Editor = () => {
  ///
  const handleOnChange = (e: string) => {
    console.log(e);
  };

  return (
    <Box height={"100%"} width={"50%"}>
      <CodeMirror
        value={""}
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
