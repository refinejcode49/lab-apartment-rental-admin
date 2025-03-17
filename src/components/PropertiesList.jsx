import { useState } from "react";
import Property from "./Property";
import searchIcon from "../assets/search-icon.svg";
import houseIcon from "../assets/house-icon.svg";
import bedIcon from "../assets/bed-icon.svg";
import hostCheckIcon from "../assets/user-check-icon.svg";
import pawIcon from "../assets/paw-icon.svg";
import stopwatchIcon from "../assets/stopwatch-icon.svg";

export const PropertiesList = ({list, setList}) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch() {
    console.log("SearchTerm = ", searchTerm);
    setSearchTerm("");
  }

  function handleDelete(theApartId) {
    const filteredList = list.filter((apart) => apart.id !== theApartId);
    setList(filteredList);
  }

  return (
    <>
      <div className="filter-container">
        <div className="form-control">
          <input
            type="text"
            name="filter-search"
            id="filter-search"
            placeholder="Search a property"
            className="filter-input"
            value={searchTerm}
            onChange={handleChange}
          />
          <button className="filter-btn-search" onClick={handleSearch}>
            <img src={searchIcon} alt="searchh icon" className="filter-icon" />
          </button>
        </div>
        <button className="filter-btn">
          <img src={houseIcon} alt="property icon" className="filter-icon" />
        </button>
        <button className="filter-btn">
          <img src={bedIcon} alt="bed icon" className="filter-icon" />
        </button>
        <button className="filter-btn">
          <img
            src={hostCheckIcon}
            alt="user check icoon"
            className="filter-icon"
          />
        </button>
        <button className="filter-btn">
          <img
            src={pawIcon}
            alt="Pet's friendly icon"
            className="filter-icon"
          />
        </button>
        <button className="filter-btn">
          <img
            src={stopwatchIcon}
            alt="instant bookable icon"
            className="filter-icon"
          />
        </button>
        <button className="filter-btn">Clear</button>
      </div>
      <div className="card-list-container">
        {list.map((oneApart) => (
          <Property
            key={oneApart.id}
            oneApart={oneApart}
            delete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};
