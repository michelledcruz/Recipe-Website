import "./Banner.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Banner = () => {
  // const [meal, setMeal] = useState([]);

  // const api_url = "https://www.themealdb.com/api/json/v1/1/random.php";

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(api_url);
  //       if (!res.ok) {
  //         throw new Error(`HTTP ERROR STATUS: ${res.status}`);
  //       }
  //       const data = await res.json();
  //       setMeal(data.meals); // Set the meals data
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="banner">
      <div className="title">
        <h1>
          Satisfy Your Cravings with Tasty, 15-Minute Recipes That Are Quick to
          Make and Full of Flavor
        </h1>
        <div className="card-outer">
          <div className="card-banner">
            <Link to="/recipe/53082">
              <img src="https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg" />
              <p>Strawberries Romanoff</p>
            </Link>
          </div>
          <div>
            <div className="card-inner">
              <div className="card-banner-two">
                <Link to="/recipe/52893">
                  <img src="./src/assets/BlackberryCrumble.jpg" />
                  <p>Apple & Blackberry Crumble</p>
                </Link>
              </div>
              <div className="card-banner-two">
                <Link to="/allrecipes">
                  <img className="arrow" src="./src/assets/Arrow.png" />
                  <p>Find Our More Recipies...</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <img src="./src/assets/banner-img.png" />
      </div>
    </div>
  );
};

export default Banner;
