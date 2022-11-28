import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import SlimNFTsCard from "./SlimNFTsCard";
import "../App.css";
import "slick-carousel/slick/slick-theme.css";
import SlimNFTs1 from "../assests/SlimNFTsCardAssests/SlimNFTs1.png";
import SlimNFTs2 from "../assests/SlimNFTsCardAssests/SlimNFTs2.png";
import SlimNFTs3 from "../assests/SlimNFTsCardAssests/SlimNFTs3.png";
import SlimNFTs4 from "../assests/SlimNFTsCardAssests/SlimNFTs4.png";
import ArrowLeft from "../assests/SlimNFTsCardAssests/ArrowLeft.png";
import ArrowRight from "../assests/SlimNFTsCardAssests/ArrowRight.png";

function NFTsCarousel({ pag }) {
  const PreviousArrow = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <img src={ArrowLeft} alt="ArrowLift" />
      </div>
    );
  };

  const NextArrow = ({ className, onClick }) => {
    return (
      <div className={className} onClick={onClick}>
        <img src={ArrowRight} alt="ArrowRight" />
      </div>
    );
  };

  let arr = [SlimNFTs1, SlimNFTs2, SlimNFTs3, SlimNFTs4];
  const settings = {
    slidesToShow: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="nfts-carousel-div mx-auto container">
      <Slider {...settings} dots={pag}>
        {arr.map((item) => (
          <SlimNFTsCard img={item} />
        ))}
      </Slider>
    </div>
  );
}

export default NFTsCarousel;
