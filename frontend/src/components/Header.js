import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        bg="primary"
        navbar="light"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand>ToDo Application</Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
