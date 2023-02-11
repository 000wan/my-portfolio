import React, { useState } from "react";
import "../css/Card.css";

const Card = () => {
  const [front, setFront] = useState<boolean>(true);

  return (
    <div className={front ? "card card-front" : "card card-back"}>
      <button
        className="card-flip"
        onClick={(e) => setFront(!front)}
        style={front ? { color: "black" } : { color: "white" }}
      >
        <span className="material-symbols-outlined" style={{ fontSize: "30px" }}>
          360
        </span>
      </button>
      {front ? (
        <div className="card-front-item">
          <img src="/images/kaist_logo_trans.png" width="200px" className="card-img" />
          <div className="card-text">
            <p>KAIST, Undergraduate student (2022~)</p>
            <p>Double Major in</p>
            <ul>
              <li>Mathematical Science</li>
              <li>Computer Science</li>
            </ul>
          </div>
          <hr style={{ backgroundColor: "#01438f" }} />
          <p>
            291 Daehak-ro, Yuseong-gu, Daejeon, South Korea
            <br />
            Contact via: 0wankweon@kaist.ac.kr
          </p>
        </div>
      ) : (
        <div className="card-back-item">
          <img src="/images/kaist_logo_trans(white).png" width="250px" />
          <p style={{ color: "white" }}>Korea Advanced Institute of Science and Technology</p>
        </div>
      )}
    </div>
  );
};

export default Card;
