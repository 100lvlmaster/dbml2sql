import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { options } from "../lib/options";
import { ConvertOption } from "../lib/types";
import { useConvertOptions } from "../store/options";
interface Props {
  onSelectImport: (e: ConvertOption) => void;
  onSelectExport: (e: ConvertOption) => void;
}

const NavBar = ({ onSelectExport, onSelectImport }: Props) => {
  ///
  const [importOption, exportOption, setImportOption, setExportOption] =
    useConvertOptions((state) => [
      state.import,
      state.export,
      state.setImportFrom,
      state.setExportFrom,
    ]);
  ///
  const handleImportChange = (e: ConvertOption) => {
    setImportOption(e);
    onSelectImport(e);
  };
  ///
  const onExportChange = (e: ConvertOption) => {
    setExportOption(e);
    onSelectExport(e);
  };
  return (
    <Flex
      flexDir="row"
      padding="10px"
      backgroundColor="teal"
      experimental_spaceX="10"
      alignItems="center"
    >
      <Text color="white">Import type</Text>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {importOption.title}
        </MenuButton>
        <MenuList>
          {options.map((e, i) => (
            <MenuItem
              onClick={() => handleImportChange(e)}
              key={`${e}-${i}`}
              value={e.value}
            >
              {e.title}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Spacer />
      <Text color="white">Export type</Text>
      <Text>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {exportOption.title}
          </MenuButton>
          <MenuList>
            {options.map((e, i) => (
              <MenuItem
                onClick={() => onExportChange(e)}
                key={`${e}-${i}`}
                value={e.value}
              >
                {e.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Text>
    </Flex>
  );
};

export default NavBar;
