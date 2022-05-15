import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export default function Contents({ language }) {
  console.log(language);
  const style = {
    display: { display: "flex", width: "100vw", margin: "30px 30px 30px 0px" },
    ul: {
      background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      width: "30vw",
      margin: "30px",
      listStyleType: "none",
      lineHeight: "3.5",
      //   border: "1px solid",
      boxShadow: "2px 2px",
      borderRadius: "10px",
      display: "block",
      fontSize: "30px",
      fontWeight: "500",
    },
    Link: { textDecoration: "none", color: "black" },
    // hover: { textDecoration: "none", color: "black", fontSize: "30px" },
  };
  return (
    <div style={style.display}>
      <ul style={style.ul}>
        {language.map((e, i) => (
          <li>
            <Link key={i} to={`${e}`} style={style.Link}>
              {e}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}
