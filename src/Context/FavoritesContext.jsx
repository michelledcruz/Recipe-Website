import { createContext, useContext, useState } from "react";

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (recipe) => {
    setFavourites((prev) => [...prev, recipe]);
  };

  const removeFavourite = (idMeal) => {
    setFavourites((prev) => prev.filter((item) => item.idMeal !== idMeal));
  };

  const isFavourite = (idMeal) => {
    return favourites.some((item) => item.idMeal === idMeal);
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, isFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
