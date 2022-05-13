import { Row } from "react-bootstrap";

function Home() {
  const style = {
    display: { display: "flex" },
    li: { listStyleType: "none" },
    Link: { textDecoration: "none" },
    home: {
      alignItems: "center",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      marginTop: "auto",
    },
  };
  return (
    <main style={style.home}>
      <h1>This is programming Languages</h1>
    </main>
  );
}

export default Home;
