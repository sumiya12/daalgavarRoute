import HtmlCon1 from "./HtmlCon1";
import HtmlCon2 from "./HtmlCon2";
import { Link, Outlet } from "react-router-dom";
function Html() {
  const style = {
    display: { display: "flex", width: "100vw", margin: "30px 30px 30px 0px" },
    ul: {
      width: "30vw",
      margin: "30px",
      listStyleType: "none",
      lineHeight: "2.5",
      border: "1px solid",
    },
    Link: { textDecoration: "none", color: "black" },
    // hover: { textDecoration: "none", color: "black", fontSize: "30px" },
  };
  return (
    <div style={style.display}>
      <ul style={style.ul}>
        <li>
          <Link style={style.Link} to="HtmlCon1">
            Section1
          </Link>
        </li>
        <li>
          <Link style={style.Link} to="HtmlCon2">
            Section2
          </Link>
        </li>
        <li>
          <Link style={style.Link} to="HtmlCon3">
            Section3
          </Link>
        </li>
        <li>
          <Link style={style.Link} to="HtmlCon4">
            Section4
          </Link>
        </li>
        {/* <li>this is html element</li>
        <li>this is html tag</li>
        <li>this is html attrubute</li> */}
      </ul>
      <Outlet />
    </div>
  );
}

export default Html;
