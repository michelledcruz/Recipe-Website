import "./AllRecipe.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useFavourites } from "../Context/FavoritesContext";

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Dessert");
  const [loading, setLoading] = useState(true);
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();
  const navigate = useNavigate();

  const fetchRecipes = async (category) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      );
      const data2 = await res.json();
      const categoryList = data2.meals.map((meal) => meal.strCategory);
      setCategory(categoryList);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchRecipes(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  const handleFavoriteClick = (recipe) => {
    if (isFavourite(recipe.idMeal)) {
      removeFavourite(recipe.idMeal);
    } else {
      addFavourite(recipe);
    }
  };

  return (
    <div>
      <h1>Recipes By Category</h1>
      <div className="category-list">
        <ul>
          {category &&
            category.map((cat, index) => (
              <li key={index} onClick={() => handleCategoryClick(cat)}>
                {cat}
              </li>
            ))}
        </ul>
      </div>
      <div className="all-list">
        {loading
          ? [...Array(6)].map((_, index) => <Shimmer key={index} />)
          : recipes.map((recipe) => (
              <div key={recipe.idMeal} className="recipe-card">
                <div onClick={() => navigate(`/recipe/${recipe.idMeal}`)}>
                  <div className="card-banner">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <p>{recipe.strMeal}</p>
                  </div>
                </div>
                <button
                  className="favorite-btn"
                  onClick={() => handleFavoriteClick(recipe)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isFavourite(recipe.idMeal) ? "red" : "none"}
                    stroke="red"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="favorite-icon"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllRecipe;
