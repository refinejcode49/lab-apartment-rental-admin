import { useEffect, useState } from "react";
import Property from "./Property";
import searchIcon from "../assets/search-icon.svg";
import houseIcon from "../assets/house-icon.svg";
import bedIcon from "../assets/bed-icon.svg";
import hostCheckIcon from "../assets/user-check-icon.svg";
import pawIcon from "../assets/paw-icon.svg";
import stopwatchIcon from "../assets/stopwatch-icon.svg";
import closeIcon from "../assets/xmark-icon.svg";

export const PropertiesList = ({ list, setList, isOpen, setIsOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(list);
  }, [list]);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    // console.log("SearchTerm = ", searchTerm);
    // console.log("filteredList initial = ",filteredList);
    const newList = list.filter((apartment) => {
      if (
        apartment.name &&
        apartment.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return apartment;
      } else if (
        apartment.description &&
        apartment.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return apartment;
      }
    });
    isOpen && setIsOpen();
    setFilteredList(newList);
    setSearchTerm("");
  }

  function handleClearFilter() {
    setFilteredList(list);
  }

  function handleFilterRoomType(roomType) {
    if (roomType == "Private room") {
      const newList = list.filter(
        (apartment) => apartment.room_type == "Private room"
      );
      setFilteredList(newList);
    } else {
      const newList = list.filter(
        (apartment) => apartment.room_type == "Entire home/apt"
      );
      setFilteredList(newList);
    }
  }

  function handleFilterHostVerified() {
    const newList = list.filter(
      (apartment) => apartment.host_identity_verified == true
    );
    setFilteredList(newList);
  }

  function handleFilterPets() {
    const newList = list.filter(
      (apartment) =>
        apartment.amenities &&
        apartment.amenities.find((amenity) => amenity == "Pets allowed")
    );
    setFilteredList(newList);
  }

  function handleFilterInstantBookable() {
    const newList = list.filter((apartment) => apartment.instant_bookable);
    setFilteredList(newList);
  }

  function handleDelete(theApartId) {
    setList((prev) => prev.filter((apt) => apt.id !== theApartId));
  }
  // console.log("PropertiesList => ", filteredList);
  return (
    <>
      <div className="filter-container">
        <form className="form-control" onSubmit={handleSearch}>
          <input
            type="text"
            name="filter-search"
            id="filter-search"
            placeholder="Search a property"
            className="filter-input"
            value={searchTerm}
            onChange={handleChange}
            autocomplete="off"
          />
          <button className="filter-btn-search" type="submit">
            <img src={searchIcon} alt="searchh icon" className="filter-icon" />
          </button>
        </form>
        <button
          className="filter-btn"
          onClick={() => handleFilterRoomType("Entire home/apt")}
        >
          <img src={houseIcon} alt="property icon" className="filter-icon" />
        </button>
        <button
          className="filter-btn"
          onClick={() => handleFilterRoomType("Private room")}
        >
          <img src={bedIcon} alt="bed icon" className="filter-icon" />
        </button>
        <button className="filter-btn" onClick={handleFilterHostVerified}>
          <img
            src={hostCheckIcon}
            alt="user check icoon"
            className="filter-icon"
          />
        </button>
        <button className="filter-btn" onClick={handleFilterPets}>
          <img
            src={pawIcon}
            alt="Pet's friendly icon"
            className="filter-icon"
          />
        </button>
        <button className="filter-btn" onClick={handleFilterInstantBookable}>
          <img
            src={stopwatchIcon}
            alt="instant bookable icon"
            className="filter-icon"
          />
        </button>
        <button className="filter-btn" onClick={handleClearFilter}>
          Clear
        </button>
      </div>
      {isOpen && (
        <div className="search-modal">
          <button className="btn-close-modal" onClick={() => setIsOpen()}>
            <img src={closeIcon} alt="Close icon" className="menu-icon" />
          </button>
          <div className="form-control">
            <input
              type="text"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search a property"
              className="input-modal"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
          <button className="btn-modal" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}

      <div className="card-list-container">
        {filteredList.map((oneApart) => (
          <Property
            key={oneApart.id}
            oneApart={oneApart}
            deleteApart={handleDelete}
          />
        ))}
      </div>
    </>
  );
};
