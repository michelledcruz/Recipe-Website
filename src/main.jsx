import { FavouritesProvider } from "./Context/FavoritesContext";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-o66rj1wfbpyiw7tw.us.auth0.com"
    clientId="FoYN1bXTp7EkP82Pka1bWYxFeBUgMEls"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <FavouritesProvider>
      <App />
    </FavouritesProvider>
  </Auth0Provider>
);
