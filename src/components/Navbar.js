import React from "react";
import "../cssFiles/Navbar.css";
import "../App.css";
import BackgroundNavLight1 from "../assests/NavbarAssests/BackgroundNavLight1.png";
import WalletIcon from "../assests/NavbarAssests/IconWallet.png";
import SearchIcon from "../assests/NavbarAssests/IconSearch.png";
import { Link } from "react-router-dom";
function Navbar({ Logo }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" id="nav">
        <div className="container-fluid">
          <img
            src={BackgroundNavLight1}
            alt=""
            className="BackgroundNavLight1 img-fluid"
          />
          <Link to="/" className="navbar-brand col-3 col-lg-2">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
          <form className="d-flex col-5 col-sm-6 col-md-6 col-lg-3 col-xl-4 search-div">
            <div className="wrap-div"></div>
            <img
              src={SearchIcon}
              alt="SearchIcon"
              className="mx-3 search-icon"
            />
            <input
              type="text"
              className="search-field ms-2"
              placeholder="Search item, collections, and artists"
            />
          </form>
          <button
            type="button"
            data-bs-target="#navbar-id"
            data-bs-toggle="collapse"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
          >
            Menu
          </button>
          <div className="collapse navbar-collapse" id="navbar-id">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Marketplace
                </a>
              </li>
              <li className="nav-item">
                <Link to="/nft-collections" className="nav-link">
                  Collections
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/create-nfts" className="nav-link">
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/profile">
                  <i className="fa-solid fa-circle-user img-fluid w-100"></i>
                </Link>
              </li>
              <li className="nav-item ms-3">
                <div className="">
                  <Link to="/connect-wallet" className="unstyled-link">
                    <button className="funktropolis-btn">
                      <img
                        src={WalletIcon}
                        alt="Wallet Icon"
                        className="wallet-icon"
                      />{" "}
                      Connect Wallet
                    </button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
