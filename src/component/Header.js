import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
    </nav>
  );
}
export default Header;
