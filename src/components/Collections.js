import React from "react";
import CollectionImg from "../assests/AssestsPsuedo/CollectionsAssests/CollectionImg.png";
import RLCImg1 from "../assests/TopSellerAssests/RLCImg1.png";
import Seller from "./Seller";
import BagIcon from "../assests/AssestsPsuedo/CollectionsAssests/BagIcon.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Activity from "./Activity";
import NFTsCarousel from "./NFTsCarousel";
import Filter from "./Filter";

function Collections() {
  const makeRepeated = (arr, repeats) =>
    [].concat(...Array.from({ length: repeats }, () => arr));
  let arr = makeRepeated([RLCImg1], 2);
  let nArr = makeRepeated(2, 10);
  return (
    <>
      <div className="container mt-5" id="collections">
        <div className="row">
          <div className="container col-lg-4 col-md-12 col-sm-12">
            <img
              src={CollectionImg}
              alt="CollectionImg"
              className="img-fluid"
            />
          </div>
          <div className="container col-lg-6 col-md-12 col-sm-12">
            <h2>The Pretty Fantasy</h2>
            <p>
              Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
              ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed
              ipsum vitae malesuada. Habitant sollicitudin faucibus cursus
              lectus pulvinar
            </p>
            <div className="created-by row gap-4">
              {arr.map((x) => {
                return (
                  <Seller
                    img={x}
                    t1={"Created By"}
                    t2={"Name here"}
                    cl={"container seller row col-6 ms-1"}
                    cl1={"col-3"}
                    cl2={"col-9"}
                  />
                );
              })}
            </div>
            <p className="collectoin-h-1">Current Bid</p>
            <p>
              <span className="collectoin-h-2">25.8</span>
              <span className="collectoin-h-3">($2156.68)</span>
            </p>
            <div className="container">
              <div className="row gap-4">
                <div className="">
                  {" "}
                  <div className="">
                    <button className="funktropolis-btn mb-4">
                      <img src={BagIcon} alt="Bag Icon" className="bag-icon" />{" "}
                      Place a Bid
                    </button>
                  </div>
                  <div className="">
                    <button className="funktropolis-btn-white">
                      <img src={BagIcon} alt="Bag Icon" className="bag-icon" />
                      Buy now
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="time-container ">
                    <span>40</span>:<span>12</span>:<span>10</span>:
                    <span>54</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5" id="text-tab-div">
          {
            <Tabs defaultActiveKey="profile" id="text-tab" className="mb-3">
              <Tab eventKey="home" title="History">
                Home Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sed, atque. Adipisci ex facilis quia nobis! Illum tenetur
                nesciunt hic ex. Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sint iure fugit odio atque voluptate
                voluptatum. Explicabo sunt delectus ab fugit consequuntur aut
                repellendus quos deleniti molestias, adipisci dolore similique
                dicta autem minima voluptatum laboriosam accusamus error
                sapiente corrupti quidem sit iure quasi dolor sequi? Veniam
                similique labore beatae, nobis repudiandae sed dolore. Modi sit,
                dignissimos soluta magni assumenda similique odit non esse
                officiis voluptates asperiores dolore quam unde ratione eum
                debitis labore ullam sint quibusdam aperiam deleniti! Reiciendis
                quis, dolorem, atque adipisci animi facilis, quasi iusto
                suscipit id eius natus recusandae magni aut dolore? Fuga
                consequuntur aspernatur commodi alias esse?
              </Tab>
              <Tab eventKey="profile" title="Details">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                atque. Adipisci ex facilis quia nobis! Illum tenetur nesciunt
                hic ex. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sint iure fugit odio atque voluptate voluptatum. Explicabo
                sunt delectus ab fugit consequuntur aut repellendus quos
                deleniti molestias, adipisci dolore similique dicta autem minima
                voluptatum laboriosam accusamus error sapiente corrupti quidem
                sit iure quasi dolor sequi? Veniam similique labore beatae,
                nobis repudiandae sed dolore. Modi sit, dignissimos soluta magni
                assumenda similique odit non esse officiis voluptates asperiores
                dolore quam unde ratione eum debitis labore ullam sint quibusdam
                aperiam deleniti! Reiciendis quis, dolorem, atque adipisci animi
                facilis, quasi iusto suscipit id eius natus recusandae magni aut
                dolore? Fuga consequuntur aspernatur commodi alias esse?
              </Tab>
              <Tab eventKey="contact" title="About">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
                atque. Adipisci ex facilis quia nobis! Illum tenetur nesciunt
                hic ex. Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sint iure fugit odio atque voluptate voluptatum. Explicabo
                sunt delectus ab fugit consequuntur aut repellendus quos
                deleniti molestias, adipisci dolore similique dicta autem minima
                voluptatum laboriosam accusamus error sapiente corrupti quidem
                sit iure quasi dolor sequi? Veniam similique labore beatae,
                nobis repudiandae sed dolore. Modi sit, dignissimos soluta magni
                assumenda similique odit non esse officiis voluptates asperiores
                dolore quam unde ratione eum debitis labore ullam sint quibusdam
                aperiam deleniti! Reiciendis quis, dolorem, atque adipisci animi
                facilis, quasi iusto suscipit id eius natus recusandae magni aut
                dolore? Fuga consequuntur aspernatur commodi alias esse?
              </Tab>
            </Tabs>
          }
        </div>
        <div className="container mt-5" id="card-tab-div">
          {
            <Tabs
              defaultActiveKey="profile"
              id="card-tab"
              className="mb-3"
              justify
            >
              <Tab eventKey="home" title="Bid History">
                <div className="row">
                  <Filter
                    cl={"container mt-4 col-xl-3 col-lg-3 col-md-11 col-sm-12"}
                  />
                  <div className="activity-div col-xl-9 col-lg-9 col-md-12 col-sm-12">
                    {nArr.map((x) => {
                      return <Activity />;
                    })}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="Sales">
                <div className="row">
                  <Filter
                    cl={"container mt-4 col-xl-3 col-lg-3 col-md-12 col-sm-12"}
                  />
                  <div className="activity-div col-xl-9 col-lg-9 col-md-12 col-sm-12">
                    {nArr.map((x) => {
                      return <Activity />;
                    })}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Transfers">
                <div className="row">
                  <Filter
                    cl={"container mt-4 col-xl-3 col-lg-3 col-md-12 col-sm-12"}
                  />
                  <div className="activity-div col-xl-9 col-lg-9 col-md-12 col-sm-12">
                    {nArr.map((x) => {
                      return <Activity />;
                    })}
                  </div>
                </div>
              </Tab>
              <Tab eventKey="listing" title="Listing">
                <div className="row">
                  <Filter
                    cl={"container mt-4 col-xl-3 col-lg-3 col-md-12 col-sm-12"}
                  />
                  <div className="activity-div col-xl-9 col-lg-9 col-md-12 col-sm-12">
                    {nArr.map((x) => {
                      return <Activity />;
                    })}
                  </div>
                </div>
              </Tab>
            </Tabs>
          }
        </div>
        <div className=" mt-3 ">
          <h2 className="collection-h-1 ms-4 mb-4">
            More From This Collection
          </h2>
          <NFTsCarousel pag={true} />
        </div>
      </div>
    </>
  );
}

export default Collections;
