import { useState, useEffect } from "react";
import First from "../../assets/image/4.jpg";
import Second from "../../assets/image/2.jpg";
import Third from "../../assets/image/3.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Carousel2 = () => {
  const images = [First, Second, Third];
  const [currentImage, setCurrentImage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const handleTransitionEnd = () => {
      setTransitioning(false);
    };
    document
      .querySelector(".slider")
      .addEventListener("transitionend", handleTransitionEnd);
    const interval = setInterval(() => {
      if (!transitioning) {
        setTransitioning(true);
        setCurrentImage((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 2000);

    return () => {
      document
        .querySelector(".slider")
        .removeEventListener("transitionend", handleTransitionEnd);
      clearInterval(interval);
    };
  }, [transitioning, images.length]);

  const prevImage = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentImage((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  const nextImage = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentImage((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const translateValue = -currentImage * 100;

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <div
          className="slider"
          style={{
            width: `${images.length * 100}vw`,
            transform: `translate(${translateValue}vw)`,
            transition: transitioning ? "transform 0.5s" : "none",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                width: "100vw",
                float: "left",
                position: "relative",
              }}
            >
              <img style={{ width: "100%" }} src={image} alt="sakura" />
            </div>
          ))}
        </div>
      </div>
      <button
        style={{
          position: "absolute",
          left: 0,
          top: "50%",
          cursor: "pointer",
          border: 0,
          backgroundColor: "transparent",
          fontSize: "50px",
          color: "#fff",
        }}
        onClick={prevImage}
      >
        <FaArrowLeft />
      </button>
      <button
        style={{
          position: "absolute",
          right: 0,
          top: "50%",
          cursor: "pointer",
          border: 0,
          backgroundColor: "transparent",
          fontSize: "50px",
          color: "#fff",
        }}
        onClick={nextImage}
      >
        <FaArrowRight />
      </button>
    </>
  );
};

export default Carousel2;
