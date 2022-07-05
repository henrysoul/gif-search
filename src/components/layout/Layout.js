import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Layout(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">GifSearch</Navbar.Brand>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
}
