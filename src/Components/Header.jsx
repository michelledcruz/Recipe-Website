import "./Header.css";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

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
            <Link to="/favourites">Favorites</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <>
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </>
            ) : (
              <button onClick={() => loginWithRedirect()}>Log In</button>
            )}
          </li>
          <li>
            {isAuthenticated && (
              <>
                <p>Welcome {user.name}</p>
              </>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
