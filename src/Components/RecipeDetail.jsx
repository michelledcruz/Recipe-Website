import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./RecipeDetails.css";

const RecipeDetail = () => {
  const [details, setDetails] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const { idMeal } = useParams();

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      const data = await response.json();
      setDetails(data.meals[0]);

      // Extract ingredients and measures
      const ingredientsList = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = data.meals[0][`strIngredient${i}`];
        if (ingredient) {
          ingredientsList.push(`${ingredient}`);
        }
      }
      setIngredients(ingredientsList);
    };
    fetchMealDetails();
  }, [idMeal]);
  if (!details) return <div>Loading...</div>;

  return (
    <>
      <div className="recipe-area">
        <div className="text-area">
          <h3>{details.strArea}</h3>
          <h1>{details.strMeal}</h1>
          <div className="indgreient">
            <h3>Ingredients:</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="img-area">
          <img src={details.strMealThumb} alt={details.strMeal} />
        </div>
      </div>
      <div className="video-section">
        <a href={details.strYoutube} target="_blank" rel="noopener noreferrer">
          <img src="../src/assets/video.png" />
          <p>Watch Video </p>
        </a>
      </div>
      <div className="details">
        <h3>Steps to follow:</h3>
        <p>{details.strInstructions}</p>
      </div>
    </>
  );
};

export default RecipeDetail;
