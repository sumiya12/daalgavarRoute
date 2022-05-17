import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import BrowserRouter from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Form from "./components/Form";
import Main from "./components/Form";
import Error from "./components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Main" element={<Form />} />
        <Route path="/Error" element={<Error />} />
      </Routes>
      <ToastContainer autoClose={3000}></ToastContainer>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
