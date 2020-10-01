import Head from "next/head";
import React from "react";
import { Container } from "../general/Container";
import { GlobalStyle } from "./globalStyles";

interface ILayoutProps {
  title: string;
}

const Layout: React.FC<ILayoutProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Container>{children}</Container>
    </React.Fragment>
  );
};

export default Layout;
