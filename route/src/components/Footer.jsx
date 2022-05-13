function Footer() {
  const style = {
    display: { display: "flex" },
    h1: {
      width: "100vw",
      // minHeight: "calc(100vh - 650px)",
      height: "15vh",
      marginTop: "auto",
      lineHeight: "2.5",
      border: "1px solid",
      background: "black",
      color: "white",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    Link: { textDecoration: "none", color: "black" },
    // hover: { textDecoration: "none", color: "black", fontSize: "30px" },
  };
  return (
    <footer style={style.h1}>
      <h1>This is footer</h1>
    </footer>
  );
}

export default Footer;

// "linear-gradient(to bottom, #333, #333 0%, #eee 75%, #333 75%)"
