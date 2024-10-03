import "./Trending.css";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Trending = () => {
  const [meals, setMeals] = useState([]);

  const api_url =
    "https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(api_url);
        if (!res.ok) {
          throw new Error(`HTTP ERROR STATUS: ${res.status}`);
        }
        const data = await res.json();
        setMeals(data.meals); // Set the meals data
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleCardClick = (idMeal) => {
    navigate(`/recipe/${idMeal}`); // Programmatically navigate to the recipe details page
  };

  return (
    <div>
      <h2>Our current main dishes️</h2>
      <div className="trending-area fade-in">
        <Slider {...settings}>
          {meals.map((meal) => (
            <Link
              to={`/recipe/${meal.idMeal}`} // Navigate to the respective recipe page
              key={meal.idMeal}
              className="card-banner"
              onClick={() => handleCardClick(meal.idMeal)}
            >
              <img src={meal.strMealThumb} />
              <p>{meal.strMeal}</p>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trending;
