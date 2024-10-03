import "./DisplayAllRecipe.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const DisplayAllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false); // To handle loading state

  // API to fetch data
  const fetchRecipes = async (query = "") => {
    try {
      setLoading(true); // Show loading before fetching data
      const api_url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      const res = await fetch(api_url);
      const data = await res.json();
      setRecipes(data.meals || []); // Set an empty array if no meals are found
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setLoading(false);
    }
  };

  // Fetch all recipes initially when the component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Fetch recipes when the search input changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      // If the search term is empty, fetch all recipes
      fetchRecipes();
    } else {
      // If the search term is provided, fetch filtered results
      fetchRecipes(searchTerm);
    }
  }, [searchTerm]);

  // Handle the search input change
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
