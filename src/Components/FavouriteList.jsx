// FavoriteList.js
import { useNavigate, Link } from "react-router-dom";
import { useFavourites } from "../Context/FavoritesContext";
import "./AllRecipe.css"; // Reuse styles if needed

const FavoriteList = () => {
  const { favourites } = useFavourites();
  const navigate = useNavigate();

  const handleCardClick = (idMeal) => {
    navigate(`/recipe/${idMeal}`);
  };

  return (
    <div>
      <h1>Your Favorite Recipes</h1>
      {favourites.length === 0 ? (
        <p>No favorites added yet.</p>
      ) : (
        <div className="all-list">
          {favourites.map((recipe) => (
            <div key={recipe.idMeal} className="recipe-card">
              <div onClick={() => handleCardClick(recipe.idMeal)}>
                <div className="card-banner">
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                  <p>{recipe.strMeal}</p>
                </div>
              </div>
              <Link to={`/recipe/${recipe.idMeal}`}>
                <button>View Recipe</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteList;
