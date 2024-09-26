import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Trending from "./Components/Trending";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Banner />
        <Trending />
      </div>
    </>
  );
}

export default App;
