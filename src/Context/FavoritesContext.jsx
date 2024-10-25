import { createContext, useState, useContext } from "react";

const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (recipe) => {
    setFavourites((prevFavourites) => [...prevFavourites, recipe]);
  };

  const removeFavourite = (recipeId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((recipe) => recipe.id !== recipeId)
    );
  };

  const isFavourite = (recipeId) => {
    return favourites.some((recipe) => recipe.id === recipeId); // Adjusted to use `favourites`
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }} // Ensure consistent naming
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  return useContext(FavouritesContext);
};
