import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Contents from "./components/Contents";
import Content from "./components/Content";

function App() {
  const [langs, setLangs] = useState({});
  const [titles, setTitles] = useState();
  useEffect(() => {
    fetch("data.json")
      .then((e) => e.json())
      .then((res) => {
        // console.log(res);
        setLangs(res);
      });
  }, []);
  useEffect(() => {
    setTitles(Object.keys(langs));
  }, [langs]);
  const style = {
    body: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
    },
  };

  return (
    <div style={style.body}>
      <Header language={langs} />
      <Routes>
        <Route path="/" element={<Home />} />
        {titles &&
          titles.map((title, i) => (
            <Route
              key={i}
              path={`${title}`}
              element={<Contents language={Object.keys(langs[`${title}`])} />}
            >
              {Object.keys(langs[`${title}`]).map((innerTitle, i) => {
                return (
                  <Route
                    path={`${innerTitle}`}
                    element={
                      <Content language={langs[`${title}`][`${innerTitle}`]} />
                    }
                  />
                );
              })}
            </Route>
          ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
