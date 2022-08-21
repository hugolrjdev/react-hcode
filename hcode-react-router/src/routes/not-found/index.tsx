import React from "react";
import { Link } from "react-router-dom";
import "./not-found.scss";
function NotFound() {
  console.log(document.URL);
  return (
    <section className="not-found">
      <h2>
        Sorry!! <br /> this page {document.URL} <br />
        is not found , page (404);
      </h2>
      <Link to="/">return to the home page please!</Link>
    </section>
  );
}

export default NotFound;
