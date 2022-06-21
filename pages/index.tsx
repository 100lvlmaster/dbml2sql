import { Button, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import MainLayout from "../layouts/main";

const Home: NextPage = () => {
  const router = useRouter();
  const isExistingUser = () => {
    const val = localStorage.getItem("exists");
    if (val) {
      router.push("/app");
    }
  };

  useEffect(() => {
    isExistingUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainLayout>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        minHeight="100vh"
        width="100vw"
      >
        <Text>Welcome to DBML2SQL</Text>
        <Link href="/app" passHref>
          <Button margin={"20px"} onClick={undefined}>
            Get started
          </Button>
        </Link>
        {/* <NavBar />
        <Flex
          height="100%"
          flexDir="row"
          alignItems={"stretch"}
          justifyItems={"stretch"}
          flexGrow={1}
        >
          <Editor />
          <Preview />
        </Flex> */}
      </Flex>
    </MainLayout>
  );
};

export default Home;
