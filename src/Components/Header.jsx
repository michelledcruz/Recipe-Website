import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src="./src/assets/logo.svg"></img>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
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
        <input type="text" placeholder="Search Recipe ..." />
      </div>
    </header>
  );
};

export default Header;
