import React from "react";
import { useNavigate } from "react-router-dom";
import "./models.scss";

const Models = () => {
  const navigate = useNavigate();

  const handleClick = (evt: React.MouseEvent<HTMLElement>) => {
    const target = evt.target as HTMLElement;
    // console.log(`name:${target.dataset.photo}`);
    if (target.dataset.id) {
      navigate(
        `/models/${target.dataset.id}?photo=${target.dataset.photo}&name=${target.dataset.name}`
      ); //navigate informa a url que ele ira visitar via querie strigs
    }
    //redirecionar para models / o id
  };

  return (
    <section id="models-section">
      <h2> Rota Models </h2>
      <div className="models">
        <div
          className="models__item"
          data-id="1"
          data-name="718"
          data-photo="porsche-718.webp"
          onClick={handleClick}
        >
          <h3>718</h3>
        </div>
        <div
          className="models__item"
          data-id="2"
          data-name="911"
          data-photo="porsche-911.webp"
          onClick={handleClick}
        >
          <h3>911</h3>
        </div>
        <div
          className="models__item"
          data-id="3"
          data-name="Cayanne"
          data-photo="porsche-cayenne.webp"
          onClick={handleClick}
        >
          <h3>Cayanne</h3>
        </div>
        <div
          className="models__item"
          data-id="4"
          data-name="Panamera"
          data-photo="porsche-panarema.webp"
          onClick={handleClick}
        >
          <h3>Panamera</h3>
        </div>
        <div
          className="models__item"
          data-id="5"
          data-name="Taycan"
          data-photo="porsche-tycan.webp"
          onClick={handleClick}
        >
          <h3>Taycan</h3>
        </div>
        <div
          className="models__item"
          data-id="6"
          data-name="Macan"
          data-photo="porsche-macan.webp"
          onClick={handleClick}
        >
          <h3>Macan</h3>
        </div>
      </div>
    </section>
  );
};

export default Models;
