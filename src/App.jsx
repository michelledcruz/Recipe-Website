import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";
import DisplayAllRecipe from "./Components/DisplayAllRecipe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetail from "./Components/RecipeDetail";
import AllRecipe from "./Components/AllRecipe";
import "./App.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Trending />
      <DisplayAllRecipe />
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:idMeal" element={<RecipeDetail />} />
            <Route path="/allrecipes" element={<AllRecipe />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
