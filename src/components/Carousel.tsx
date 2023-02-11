import { useState } from "react";
import "../css/Carousel.css";

interface CarouselProps {
  Items: React.ElementType[];
}

const Carousel = ({ Items }: CarouselProps) => {
  const [index, setIndex] = useState<number>(0);
  const indInf = 0;
  const indSup = Items.length - 1;

  const incIndex = () => {
    if (index + 1 <= indSup) {
      setIndex(index + 1);
    }
  };
  const decIndex = () => {
    if (index - 1 >= indInf) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="carousel">
      <button
        className="carousel-button"
        style={{ left: "30px" }}
        onClick={(e) => decIndex()}
        disabled={index === indInf}
      >
        <span className="material-symbols-outlined">arrow_back_ios</span>
      </button>
      <button
        className="carousel-button"
        style={{ right: "30px" }}
        onClick={(e) => incIndex()}
        disabled={index === indSup}
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>
      <div
        className="carousel-container"
        style={{ width: indSup + 1 + "00vw", transform: "translateX(-" + index + "00vw)" }}
      >
        {Items.map((Item) => (
          <Item className="carousel-item" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
