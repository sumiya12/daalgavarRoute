import React from "react";
import { Outlet } from "react-router";

export default function Content({ language }) {
  const style = {
    display: { display: "flex", width: "70vw", margin: "30px 30px 30px 0px" },
    p: {
      width: "70%",
      margin: "30px 30px 30px 0px",
      fontSize: "20px",
      fontWeight: "500",
    },
    h1: { textAlign: "center" },
  };
  return (
    <div style={style.display}>
      <div>
        <h1 style={style.h1}>{language.title}</h1>
        {language.title === "HTML Forms" ? (
          <p style={style.p}>
            {" "}
            <form>
              {" "}
              <strong>This is form </strong>
              <br />
              <br /> First name: <input type="text" value="John" /> <br /> Last
              name: <input type="text" value="Doe" /> <br />
              <br /> <input type="submit" value="Submit"></input>{" "}
            </form>{" "}
          </p>
        ) : (
          <p style={style.p}>{language.body}</p>
        )}
      </div>

      <Outlet />
    </div>
  );
}
