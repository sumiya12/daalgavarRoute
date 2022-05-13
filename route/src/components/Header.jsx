import { Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/Html">HTML</Navbar.Brand>
        <Navbar.Brand href="/Css">CSS</Navbar.Brand>
        <Navbar.Brand href="/Javascript">JAVASCRIPT</Navbar.Brand>
        <Navbar.Brand href="/React">REACT</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
