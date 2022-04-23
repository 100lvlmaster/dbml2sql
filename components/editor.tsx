import { useToast } from "@chakra-ui/react";
import { Controlled as CodeMirror } from "react-codemirror2";
import { convertOption } from "../lib/converter";
import { useEditor } from "../store/editor";

const Editor = () => {
  const toast = useToast();
  const [importAs, exportAs, editorText, setEditorText, setPreviewText] =
    useEditor((state) => [
      state.importAs,
      state.exportAs,
      state.editorText,
      state.setEditorText,
      state.setPreviewText,
    ]);

  ///
  ///
  ///
  const handleOnChange = (e: string) => {
    let result;
    try {
      result = convertOption(importAs, exportAs, e);
    } catch (err) {
      console.log(err);
      toast({
        title: (err as any).name as string,
        description: (err as any).message as string,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-end",
      });
    }
    if (result) {
      setPreviewText(result);
    }
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
