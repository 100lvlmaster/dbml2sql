import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import { convertOption } from "../lib/converter";
import { options } from "../lib/options";
import { ConvertOption } from "../lib/types";
import { useEditor } from "../store/editor";

const NavBar = () => {
  const toast = useToast();
  const [
    importAs,
    exportAs,
    editorText,
    setImportFrom,
    setExportFrom,
    setPreviewText,
  ] = useEditor((state) => [
    state.importAs,
    state.exportAs,
    state.editorText,
    state.setImportFrom,
    state.setExportFrom,
    state.setPreviewText,
  ]);
  const onExportChange = (e: ConvertOption) => {
    setExportFrom(e);
    canConvert(editorText, importAs, e);
  };
  const onImportChange = (e: ConvertOption) => {
    setImportFrom(e);
    canConvert(editorText, e, exportAs);
  };

  const canConvert = (e: string, from: ConvertOption, to: ConvertOption) => {
    let result;
    try {
      result = convertOption(from, to, e);
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
  };
  return (
    <Flex
      flexDir="row"
      padding="10px"
      backgroundColor="teal"
      experimental_spaceX="10"
      alignItems="center"
    >
      <ButtonGroup isAttached>
        <Button>
          <Text>Import as:</Text>
        </Button>
        <Divider orientation="vertical" />
        <Menu>
          <MenuButton zIndex={999} as={Button} rightIcon={<ChevronDownIcon />}>
            {importAs.title}
          </MenuButton>

          <MenuList zIndex={999}>
            {options.map((e, i) => (
              <MenuItem
                onClick={() => onImportChange(e)}
                key={`${e.title}-${i}`}
                value={e.value}
              >
                <span>{e.title}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </ButtonGroup>
      <Spacer />
      <ButtonGroup isAttached>
        <Button>
          <Text>Export as:</Text>
        </Button>
        <Divider orientation="vertical" />
        <Menu>
          <MenuButton zIndex={999} as={Button} rightIcon={<ChevronDownIcon />}>
            {exportAs.title}
          </MenuButton>
          <MenuList zIndex={999}>
            {options.map((e, i) => (
              <MenuItem
                onClick={() => onExportChange(e)}
                key={`${e.title}-${i}`}
                value={e.value}
              >
                <span>{e.title}</span>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;
