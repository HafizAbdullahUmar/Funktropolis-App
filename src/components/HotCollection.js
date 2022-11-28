import React from "react";
import NFTsCard from "./NFTsCard";
import NFTsImg1 from "../assests/HotCollectionAssests/NFTsImg1.png";
import NFTsImg2 from "../assests/HotCollectionAssests/NFTsImg2.png";
import NFTsImg3 from "../assests/HotCollectionAssests/NFTsImg3.png";
import ProfileImg1 from "../assests/HotCollectionAssests/ProfileImg1.png";
import ProfileImg2 from "../assests/HotCollectionAssests/ProfileImg2.png";
import BackgroundHotCollectionLight1 from "../assests/HotCollectionAssests/BackgroundHotCollectionLight1.png";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function HotCollection() {
  let arr = [
    [NFTsImg1, ProfileImg1],
    [NFTsImg2, ProfileImg2],
    [NFTsImg3, ProfileImg1],
  ];
  let newArr = [...arr, ...arr, ...arr];
  return (
    <>
      <div
        className="container text-center position-relative"
        id="hot-collection"
      >
        <img
          src={BackgroundHotCollectionLight1}
          alt="BackgroundHotCollectionLight1"
          className="BackgroundHotCollectionLight1 img-fluid"
        />
        <h3 className="ms-5">Hot Collection</h3>
        <div className="container-fluid text-start">
          <Swiper
            loop={false}
            grabCursor={true}
            centeredSlides={false}
            centerInsufficientSlides={true}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
              1400: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper overflow-hidden"
          >
            <div className="slide-content">
              {newArr.map((x) => {
                return (
                  <SwiperSlide>
                    <NFTsCard img={x[0]} pf={x[1]} />
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className="container mx-auto justify-content-center d-flex">
          <button className="funktropolis-btn mx-auto">See More...</button>
        </div>
      </div>
    </>
  );
}

export default HotCollection;
