import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Editor from "../components/editor";
import NavBar from "../components/navbar";
import Preview from "../components/preview";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" minHeight="100vh" width="100vw">
      <NavBar />
      <Flex height="100%" flexDir="row">
        <Editor />
        <Preview />
      </Flex>
    </Flex>
  );
};

export default Home;
