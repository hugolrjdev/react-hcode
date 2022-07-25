import React from "react";
import "./Volume.css";

export const Volume = () => {
  return (
    <div className="options-control__volume">
      <div className="options-control__volume-icon">
        <svg
          role="presentation"
          height="16"
          width="16"
          aria-label="Volume alto"
          id="volume-icon"
          viewBox="0 0 16 16"
          className="Svg-sc-1bi12j5-0 EQkJl"
        >
          <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
          <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
        </svg>
      </div>
      <div className="options-control__volume-progress">
        <div className="progress-bar">
          <div className="progress-bar__bar">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
