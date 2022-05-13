import "./App.css";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Html from "./components/Html";
import Css from "./components/Css";
import HtmlCon1 from "./components/HtmlCon1";
import HtmlCon2 from "./components/HtmlCon2";
import HtmlCon3 from "./components/HtmlCon3";
import HtmlCon4 from "./components/HtmlCon4";
import Footer from "./components/Footer";

function App() {
  const style = {
    body: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
  };

  return (
    <div style={style.body}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Html" element={<Html />}>
          <Route path="HtmlCon1" element={<HtmlCon1 />} />
          <Route path="HtmlCon2" element={<HtmlCon2 />} />
          <Route path="HtmlCon3" element={<HtmlCon3 />} />
          <Route path="HtmlCon4" element={<HtmlCon4 />} />
        </Route>

        <Route path="/Css" element={<Css />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
