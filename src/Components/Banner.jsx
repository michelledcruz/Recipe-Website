import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="title">
        <h1>
          Satisfy Your Cravings with Tasty, 15-Minute Recipes That Are Quick to
          Make and Full of Flavor
        </h1>
        <div className="card-outer">
          <div className="card-banner">
            <img src="./src/assets/pasta.png" />
            <p>Eggplant pasta and slices of chorizo</p>
          </div>
          <div>
            <div className="card-inner">
              <div className="card-banner-two">
                <img src="./src/assets/desert.png" />
                <p>Apple and cinnamon crumble</p>
              </div>
              <div className="card-banner-two">
                <img className="arrow" src="./src/assets/Arrow.png" />
                <p>Find Our More Recipies...</p>
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
