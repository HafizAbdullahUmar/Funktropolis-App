import React from "react";
import ArtistBackground from "../assests/AssestsPsuedo/CollectionsAssests/ArtistBackground.png";
import SettingsIcon from "../assests/AssestsPsuedo/CollectionsAssests/SettingsIcon.png";
import ShareIcon from "../assests/AssestsPsuedo/CollectionsAssests/ShareIcon.png";
import ProfileImg from "../assests/AssestsPsuedo/CollectionsAssests/ProfileImg.png";
import Check from "../assests/AssestsPsuedo/CollectionsAssests/Check.png";
import Filter from "./Filter";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TodaysNFTs from "./TodaysNFTs";
import { Link } from "react-router-dom";
function Artist() {
  return (
    <>
      <div className="container artist" id="artist">
        <div className="artist-div">
          <img
            src={ArtistBackground}
            alt="ArtistBackground"
            className="artist-background img-fluid"
          />
          <div className="content-div d-flex justify-content-end align-items-center pe-4">
            <img
              src={ShareIcon}
              alt="ShareIcon"
              className="mx-3 content-icons"
            />{" "}
            <Link to="/profile-settings">
              {" "}
              <img
                src={SettingsIcon}
                alt="SettingsIcon"
                className="mx-3 content-icons"
              />
            </Link>
            <div className="artist-profile-div">
              <div className="artist-profile-div-inner">
                <img src={ProfileImg} alt="ProfileImg" className="prof-img" />
                <img src={Check} alt="Check" className="check" />
              </div>
            </div>
          </div>
        </div>
        <div className="artist-details-div text-center my-5">
          <p className="artist-h-1">Artist Name</p>
          <div className="artist-id">0x2856917592FnkDR939430xmi3mF4</div>
        </div>
        <div className="container mt-5" id="card-tab-div">
          <Tabs
            defaultActiveKey="profile"
            id="card-tab"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="On Sale">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-11 col-lg-11 col-md-11 col-sm-11"}
                />
                <div className="nft-div col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <TodaysNFTs
                    repeats={2}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Owned">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-11 col-lg-11 col-md-11 col-sm-11"}
                />
                <div className="nft-div col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <TodaysNFTs
                    repeats={2}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Created">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-11 col-lg-11 col-md-11 col-sm-11"}
                />
                <div className="nft-div col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <TodaysNFTs
                    repeats={2}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
              </div>
            </Tab>
            <Tab eventKey="listing" title="Collection">
              <div className="row">
                <Filter
                  cl={"container mt-4 col-xl-11 col-lg-11 col-md-11 col-sm-11"}
                />
                <div className="nft-div col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <TodaysNFTs
                    repeats={2}
                    text={"52450 Items"}
                    cl={"container mt-5 "}
                  />
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Artist;
