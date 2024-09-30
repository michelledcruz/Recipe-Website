import "./Header.css";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#recipes">Recipes</a>
          </li>
          <li>
            <a href="#favorites">Favorites</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <input type="text" placeholder="Search.." />
      </div>
    </header>
  );
};

export default Header;
