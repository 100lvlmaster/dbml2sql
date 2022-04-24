import { NextPage } from "next";
import Head from "next/head";

const MainLayout: NextPage = ({ children }) => {
  return (
    <>
      <Head>
        <title>DBML to SQL bidirectional transpiler</title>
      </Head>
      {children}
    </>
  );
};

export default MainLayout;
