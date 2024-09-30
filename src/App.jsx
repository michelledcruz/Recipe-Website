import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetail from "./Components/RecipeDetail";

import "./App.css";

const Home = () => {
  return (
    <>
      <Banner />
      <Trending />
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
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
