import { useEffect, useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, page = 1, limit = 10 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const responseData = await response.json();
        if (responseData) {
          setImages(responseData);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page, limit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images.length > 0 && (
        <img
          key={images[currentSlide].id}
          src={images[currentSlide].download_url}
          className="currentImg"
          alt="Slide"
        />
      )}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images.length > 0 &&
          images.map((_, index) => (
            <button
              key={index}
              className={
                currentSlide === index
                  ? "current-indicator"
                  : "inactive-indicator"
              }
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
      </span>
    </div>
  );
};

export default ImageSlider;
