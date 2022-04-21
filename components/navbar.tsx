import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { options } from "../lib/options";

const NavBar = () => {
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
        <MenuButton zIndex={999} as={Button} rightIcon={<ChevronDownIcon />}>
          {"SQL"}
        </MenuButton>
        <MenuList zIndex={999}>
          {options.map((e, i) => (
            <MenuItem
              // onClick={() => handleImportChange(e)}
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
          <MenuButton zIndex={999} as={Button} rightIcon={<ChevronDownIcon />}>
            {"SQL"}
          </MenuButton>
          <MenuList zIndex={999}>
            {options.map((e, i) => (
              <MenuItem
                // onClick={() => onExportChange(e)}
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
