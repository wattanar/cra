import React from "react";
import { Container } from "react-bootstrap";
import MainNav from "../components/MainNav";

function MainLayout({ children }) {
  return (
    <React.Fragment>
      <MainNav />
      <Container className="my-4">{children}</Container>
    </React.Fragment>
  );
}

export default MainLayout;
