import { Link } from "react-router-dom";
import "./css/header.css";

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
  borderRadius: "10px",
};

const btn = {
  color: "White",
};
function Header() {
  return (
    <>
      <div class="nav">
        <div style={mystyle}>TarvelGram</div>
        <div>
          <Link to="./" className="link">
            <button className="btn" style={btn}>
              Home
            </button>
          </Link>
          &nbsp;
          <Link to="./Faculties" className="link">
            <button className="btn" style={btn}>
              Buses
            </button>
          </Link>
          &nbsp;
          <Link to="./faculty/15" className="link">
            <button className="btn" style={btn}>
              {" "}
              Details of Buses
            </button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
