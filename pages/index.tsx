import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Editor from "../components/editor";
import NavBar from "../components/navbar";
import Preview from "../components/preview";
import { ConvertOption } from "../lib/types";

const Home: NextPage = () => {
  const onHandleExport = (e: ConvertOption) => {};
  const onHandleImport = (e: ConvertOption) => {};
  return (
    <Flex flexDir="column" minHeight="100vh" width="100vw">
      <NavBar
        onSelectExport={(e) => onHandleExport(e)}
        onSelectImport={(e) => onHandleImport(e)}
      />
      <Flex height="100%" flexDir="row">
        <Editor />
        <Preview />
      </Flex>
    </Flex>
  );
};

export default Home;
