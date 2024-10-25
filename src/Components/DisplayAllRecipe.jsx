import "./DisplayAllRecipe.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const DisplayAllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const throttleTimeout = useRef(null); // Use useRef to store throttle timeout

  const api_url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  // API to fetch data
  const fetchRecipes = async (query = "") => {
    try {
      setLoading(true); // Show loading before fetching data
      const res = await fetch(`${api_url}${query}`);
      const data = await res.json();
      console.log(data);
      setRecipes(data.meals || []); // Set an empty array if no meals are found
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  // Fetch all recipes initially when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Handle throttling of search input
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    if (throttleTimeout.current) {
      clearTimeout(throttleTimeout.current); // Clear the previous timeout if still active
    }

    // Set a new timeout to delay the API call until user stops typing
    throttleTimeout.current = setTimeout(() => {
      fetchRecipes(value);
    }, 500); // 500ms delay
  };

  return (
    <>
      <div className="all-recipes">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <h1>All Recipes</h1>

      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <div className="recipe-container">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Link
                to={`/recipe/${recipe.idMeal}`}
                key={recipe.idMeal}
                className="card-banner"
              >
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <p>{recipe.strMeal}</p>
              </Link>
            ))
          ) : (
            <p>No recipes found</p> // Display message if no recipes match the search
          )}
        </div>
      )}
    </>
  );
};

export default DisplayAllRecipe;
