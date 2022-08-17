import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Model = () => {
  const params = useParams();
  const [query] = useSearchParams();
  console.log(params);

  const modelName = query.get("name");
  const modelImage = query.get("photo");

  return (
    <section id="model">
      <h1>
        Modelo {modelName && modelName}{" "}
        {params.modelId && `Id: ${params.modelId}`}
        {`imagem ${modelImage} aqui`}
      </h1>
      <img src={require(`../../assets/images/${modelImage}`)} />
    </section>
  );
};

export default Model;
