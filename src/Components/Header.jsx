import "./Header.css";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/allrecipes">Recipes</Link>
          </li>
          <li>
            <Link to="#favorites">Favorites</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
