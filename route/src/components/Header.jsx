import { Navbar, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";

function Header({ language }) {
  const [titles, setTitles] = useState();
  // console.log(titles);
  useEffect(() => {
    setTitles(Object.keys(language));
  }, [language]);
  const style = {
    Navbar: {
      color: "white",
      backgroundColor: "black",
      fontSize: "30px",
      fontWeight: "500",
    },
  };
  return (
    <Navbar expand="lg" style={style.Navbar}>
      <Container>
        <Navbar.Brand href="/" style={style.Navbar}>
          Home
        </Navbar.Brand>
        {titles &&
          titles.map((e, i) => (
            <Navbar.Brand key={i} href={`/${e}`} style={style.Navbar}>
              {e}
            </Navbar.Brand>
          ))}
        {/* <Navbar.Brand href="/Html">HTML</Navbar.Brand>
        <Navbar.Brand href="/Css">CSS</Navbar.Brand>
        <Navbar.Brand href="/Javascript">JAVASCRIPT</Navbar.Brand>
        <Navbar.Brand href="/React">REACT</Navbar.Brand> */}
      </Container>
    </Navbar>
  );
}

export default Header;
