import React from "react";

export const ProgressPlayerMusic = () => {
  return (
    <div className="progress-midia">
      <div className="tempo-da-musica">0:18</div>
      <div className="progress-bar">
        <progress id="file" value="18" max="100">
          18%
        </progress>
      </div>
      <div className="tempo-restate-da-musica">1:18</div>
    </div>
  );
};
