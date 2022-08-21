import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import "./model.scss";

const Model = () => {
  const params = useParams();
  const [query] = useSearchParams();
  console.log("params aqui", params);

  const modelName = query.get("name");
  const modelImage = query.get("photo");

  return (
    <section id="model">
      <h1>
        Modelo {modelName && modelName}{" "}
        {params.modelId && `Id: ( ${params.modelId} )`}
      </h1>
      <img
        src={require(`../../assets/images/${modelImage}`)}
        alt={modelName! && modelName}
      />
    </section>
  );
};

export default Model;
