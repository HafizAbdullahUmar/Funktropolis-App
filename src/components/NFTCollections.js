import React from "react";
import PsuedoHeader from "./PsuedoHeader";
import Filter from "./Filter";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodaysNFTs from "./TodaysNFTs";

function NFTCollections() {
  return (
    <>
      <div className="container" id="nfts-collections">
        <PsuedoHeader heading={"Explore NFT Collections and Items"} />
        <div className="container mt-5" id="card-tab-div">
          <Tabs
            defaultActiveKey="profile"
            id="card-tab"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Bid History">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-3 col-lg-11 col-md-12 col-sm-12"}
                />
                <div className="nft-div col-xl-9 col-lg-12 col-md-12 col-sm-12">
                  <div className="nft-div-wrap"></div>
                  <div className="nft-div-wrap-2"></div>
                  <TodaysNFTs
                    repeats={4}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
                <button className="funktropolis-btn-white mx-auto d-block mt-4">
                  See more...
                </button>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Sales">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-3 col-lg-11 col-md-12 col-sm-12"}
                />
                <div className="nft-div col-xl-9 col-lg-12 col-md-12 col-sm-12">
                  <div className="nft-div-wrap"></div>
                  <div className="nft-div-wrap-2"></div>
                  <TodaysNFTs
                    repeats={4}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
                <button className="funktropolis-btn-white mx-auto d-block mt-4">
                  See more...
                </button>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Transfers">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-3 col-lg-11 col-md-12 col-sm-12"}
                />
                <div className="nft-div col-xl-9 col-lg-12 col-md-12 col-sm-12">
                  <div className="nft-div-wrap"></div>
                  <div className="nft-div-wrap-2"></div>
                  <TodaysNFTs
                    repeats={4}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
                <button className="funktropolis-btn-white mx-auto d-block mt-4">
                  See more...
                </button>
              </div>
            </Tab>
            <Tab eventKey="listing" title="Listing">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-3 col-lg-11 col-md-12 col-sm-12"}
                />
                <div className="nft-div col-xl-9 col-lg-12 col-md-12 col-sm-12">
                  <div className="nft-div-wrap"></div>
                  <div className="nft-div-wrap-2"></div>
                  <TodaysNFTs
                    repeats={4}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
                <button className="funktropolis-btn-white mx-auto d-block mt-4">
                  See more...
                </button>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default NFTCollections;
