import React from "react";
import { FaHeart } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CardProps {
  city: string;
  country: string;
  dates: string;
  price_per_night: number;
  rating: number;
  owner: string;
  images: string[];
}

const Card: React.FC<CardProps> = (props) => {
  const { images, ...otherProps } = props;

  return (
    <div className="max-w overflow-hidden cursor-pointer relative">
      <div className="text-white absolute top-5 right-5 z-50 text-xl">
        <FaHeart />
      </div>
      <Carousel
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={false}
        autoPlay={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="carousel-image rounded-xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Card;
