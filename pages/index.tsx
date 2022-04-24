import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import Editor from "../components/editor";
import NavBar from "../components/navbar";
import Preview from "../components/preview";
import MainLayout from "../layouts/main";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Flex flexDir="column" minHeight="100vh" width="100vw">
        <NavBar />
        <Flex
          height="100%"
          flexDir="row"
          alignItems={"stretch"}
          justifyItems={"stretch"}
          flexGrow={1}
        >
          <Editor />
          <Preview />
        </Flex>
      </Flex>
    </MainLayout>
  );
};

export default Home;
