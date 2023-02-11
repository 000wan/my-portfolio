import React, { useState } from "react";
import "../css/Card.css";

interface CardProps {
  className: string;
  logoSrc: string;
  logoWhiteSrc: string;
  FrontItem: React.ElementType;
  BFrontItem: React.ElementType;
  backColor: string;
  backText: string;
}

const Card = (props: CardProps) => {
  const [front, setFront] = useState<boolean>(false);

  return (
    <div
      className={"card " + (front ? "card-front " : "card-back ") + props.className}
      style={{ background: front ? "white" : props.backColor }}
    >
      <button
        className="card-flip"
        onClick={(e) => setFront(!front)}
        style={{ color: front ? "black" : "white" }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "30px" }}>
          360
        </span>
      </button>
      {front ? (
        <div className="card-front-item">
          <img src={props.logoSrc} height="60px" className="card-img" />
          <props.FrontItem />
          <hr />
          <props.BFrontItem />
        </div>
      ) : (
        <div className="card-back-item">
          <img src={props.logoWhiteSrc} width="250px" />
          <p style={{ color: "white" }}>{props.backText}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
