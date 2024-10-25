import "./AllRecipe.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Make sure to include useNavigate
import Shimmer from "./Shimmer";
import { useFavourites } from "../Context/FavoritesContext"; // Ensure this path is correct

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Dessert");
  const [loading, setLoading] = useState(true);
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to fetch recipes based on category
  const fetchRecipes = async (category) => {
    try {
      setLoading(true); // Set loading to true before fetching data
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setRecipes(data.meals || []); // Default to an empty array if no meals
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false); // Ensure loading is false on error
    }
  };

  // Function to fetch categories
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
    fetchCategories(); // Fetch categories when component mounts
    fetchRecipes(selectedCategory); // Fetch recipes based on the initial category
  }, [selectedCategory]);

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
  };

  const handleCardClick = (idMeal) => {
    navigate(`/recipe/${idMeal}`); // Programmatically navigate to the recipe details page
  };

  const handleFavoriteClick = (recipe) => {
    if (isFavourite(recipe.idMeal)) {
      removeFavourite(recipe.idMeal); // Remove from favorites if already favorited
    } else {
      addFavourite(recipe.idMeal); // Add to favorites if not favorited
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
          ? // Show shimmer while loading
            [...Array(6)].map((_, index) => <Shimmer key={index} />)
          : recipes.map((recipe) => (
              <div key={recipe.idMeal} className="recipe-card">
                <Link
                  to={`/recipe/${recipe.idMeal}`}
                  onClick={() => handleCardClick(recipe.idMeal)}
                >
                  <div className="card-banner">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <p>{recipe.strMeal}</p>
                  </div>
                </Link>
                <button onClick={() => handleFavoriteClick(recipe)}>
                  {isFavourite(recipe.idMeal)
                    ? "Remove from Favorites"
                    : "Add to Favorites"}
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllRecipe;
