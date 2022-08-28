import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="http://www2.yukawa.kyoto-u.ac.jp/~ppp.ws/PPP2022/" target="_blank" rel="noreferrer" id="navbar">
          PPP2022
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Poster by <a href="https://sochigusa.bitbucket.io/" target="_blank" rel="noreferrer" id="navbar">
              So Chigusa
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
