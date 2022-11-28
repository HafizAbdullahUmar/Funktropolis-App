import React from "react";
import HistoryIcon from "../assests/AssestsPsuedo/CollectionsAssests/HistoryIcon.png";
function Filter({ cl }) {
  return (
    <>
      <div className={cl} id="filter">
        <div className="filter-div d-flex justify-content-between p-3">
          <h2 className="d-inline">Filter</h2>
          <img src={HistoryIcon} alt="HistoryIcon" className="HistoryIcon" />
        </div>
        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Status
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                <label htmlFor="buyNow">
                  <input type="checkbox" id="buyNow" />
                  Buy Now
                  <span></span>
                </label>
                <label htmlFor="onAuctions">
                  <input type="checkbox" id="onAuctions" />
                  On Auctions
                  <span></span>
                </label>
                <label htmlFor="hasOffers">
                  <input type="checkbox" id="hasOffers" />
                  Has Offers
                  <span></span>
                </label>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                Categories
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                <label htmlFor="art">
                  <input type="checkbox" id="art" />
                  <span></span>
                  Art
                </label>
                <label htmlFor="music">
                  <input type="checkbox" id="music" />
                  <span></span>
                  Music
                </label>
                <label htmlFor="sports">
                  <input type="checkbox" id="sports" />
                  <span></span>
                  Sports
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
