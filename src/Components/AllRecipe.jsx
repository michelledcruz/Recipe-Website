import "./AllRecipe.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Dessert");

  // Function to fetch recipes based on category
  const fetchRecipes = async (category) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setRecipes(data.meals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
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
        {recipes &&
          recipes.map((recipe) => (
            <Link
              to={`/recipe/${recipe.idMeal}`}
              key={recipe.idMeal}
              onClick={() => handleCardClick(recipe.idMeal)}
            >
              <div className="card-banner" key={recipe.idMeal}>
                <img src={recipe.strMealThumb} />
                <p>{recipe.strMeal} </p>
              </div>{" "}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllRecipe;
