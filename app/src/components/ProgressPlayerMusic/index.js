import React from "react";
import "./ProgressPlayerMusic.css";

export const ProgressPlayerMusic = (props) => {
  return (
    <div className="progress-midia">
      <div className="tempo-da-musica">0:18</div>
      <div className="progress-bar">
        <div className="progress-bar__bar">
          <div className="circle"></div>
        </div>
      </div>
      <div className="tempo-restate-da-musica">1:18</div>
    </div>
  );
};
