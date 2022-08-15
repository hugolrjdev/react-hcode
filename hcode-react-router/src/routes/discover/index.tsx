import React from "react";
import "./discover.scss";
import image1 from "../../assets/images/porsche-clock.webp";
import image2 from "../../assets/images/porsche-e-performace.webp";
import image3 from "../../assets/images/porsche-manofaktur.webp";
import image4 from "../../assets/images/porsche-roudes.webp";

function Discover() {
  return (
    <section id="discover">
      <h2>Discover</h2>

      <div className="discover">
        <div className="discover__item">
          <img src={image1} alt="Clock" />
          <h3 className="discover__description">
            Porche Exclusive Manufaktur.
          </h3>
        </div>
        <div className="discover__item">
          <img src={image2} alt="Clock" />
          <h3 className="discover__description">Porche Finder.</h3>
        </div>
        <div className="discover__item">
          <img src={image3} alt="Clock" />
          <h3 className="discover__description">Porche E-Performace.</h3>
        </div>
        <div className="discover__item">
          <img src={image4} alt="Clock" />
          <h3 className="discover__description">Porche LifeStyle.</h3>
        </div>
      </div>
    </section>
  );
}

export default Discover;
