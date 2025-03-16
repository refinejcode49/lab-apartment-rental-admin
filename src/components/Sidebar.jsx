import { useState } from "react";
import { NavLink } from "react-router-dom";
import dashboardIcon from "../assets/border-all-icon.svg";
import addIcon from "../assets/plus-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import aboutIcon from "../assets/user-group-icon.svg";
import closeIcon from "../assets/xmark-icon.svg";



export const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const [isOpen, setIsOpen] = useState(false);

  function handleChange(e){
    setSearchTerm(e.target.value);
  }

  function handleSearch(){
    console.log("SearchTerm = ", searchTerm);
  }

  function handleModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return (
    <>
      <aside className="sidebar-mobile">
        <NavLink to="/">
          <button className="btn-mobile">
            <img src={dashboardIcon} alt="Dashboard icon" className="icon-small"/>
            Dashboard
          </button>
        </NavLink>
        <NavLink to="/">
          <button className="btn-mobile">
            <img src={addIcon} alt="Add a property icon" className="icon-small"/>
            Add a property
          </button>
        </NavLink>
        <div className="navlink-like">
          <button className="btn-mobile" onClick={handleModal}>
            <img src={searchIcon} alt="Search icon" className="icon-small"/>
            Search
          </button>
        </div>
        <NavLink to="/about">
          <button className="btn-mobile">
            <img src={aboutIcon} alt="About us icon" className="icon-small"/>
            About
          </button>
        </NavLink>
      </aside>
      {
        isOpen &&
        <div className="search-modal">
          <button className="btn-close-modal" onClick={handleModal}>
            <img src={closeIcon} alt="Close icon" className="icon-small"/>
          </button>
          <div className="form-control">
            <input type="text" name="mobile-search" id="mobile-search" placeholder="Search a property" 
            className="input-modal" value={searchTerm} onChange={handleChange}/>
          </div>
          <button className="btn-modal" onClick={handleSearch}>Search</button>
        </div>
      }
      
    </>
  );
};
