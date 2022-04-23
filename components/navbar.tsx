import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { options } from "../lib/options";
import { ConvertOption } from "../lib/types";
import { useEditor } from "../store/editor";

const NavBar = () => {
  const [importAs, exportAs, setImportFrom, setExportFrom] = useEditor(
    (state) => [
      state.importAs,
      state.exportAs,
      state.setImportFrom,
      state.setExportFrom,
    ]
  );
  const onExportChange = (e: ConvertOption) => {
    setExportFrom(e);
  };
  const onImportChange = (e: ConvertOption) => {
    setImportFrom(e);
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
        <Text color="white">Import type</Text>
        <Menu>
          <MenuButton zIndex={999} as={Button} rightIcon={<ChevronDownIcon />}>
            {importAs.title}
          </MenuButton>
          <MenuList as={"div"} zIndex={999}>
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
      <Text color="white">Export type</Text>
      <Text>
        <Menu>
          <MenuButton zIndex={999} as={Button} rightIcon={<ChevronDownIcon />}>
            {exportAs.title}
          </MenuButton>
          <MenuList as={"div"} zIndex={999}>
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
      </Text>
    </Flex>
  );
};

export default NavBar;
