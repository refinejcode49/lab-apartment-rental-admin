import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import dashboardIcon from "../assets/border-all-icon.svg";
import addIcon from "../assets/plus-icon.svg";
import searchIcon from "../assets/search-icon.svg";
import aboutIcon from "../assets/user-group-icon.svg";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isActiveHome, setIsActiveHome] = useState(false);
  const [isActiveAdd, setIsActiveAdd] = useState(false);
  const [isActiveAbout, setIsActiveAbout] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname == "/" ? setIsActiveHome(true) : setIsActiveHome(false);
    location.pathname == "/add-property"
      ? setIsActiveAdd(true)
      : setIsActiveAdd(false);
    location.pathname == "/about"
      ? setIsActiveAbout(true)
      : setIsActiveAbout(false);
  }, [location.pathname]);

  function handleModal() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  return (
    <aside className="sidebar">
      <p className="menu-title">Admin menu</p>
      <hr className="menu-divider" />
      <NavLink to="/">
        <button
          className={isActiveHome ? "btn-menu btn-menu-active" : "btn-menu"}
        >
          <img src={dashboardIcon} alt="Dashboard icon" className="menu-icon" />
          Dashboard
        </button>
      </NavLink>
      <NavLink to="/add-property">
        <button
          className={isActiveAdd ? "btn-menu btn-menu-active" : "btn-menu"}
        >
          <img src={addIcon} alt="Add a property icon" className="menu-icon" />
          Add a property
        </button>
      </NavLink>
      <div className="navlink-like">
        <button
          className={isOpen ? "btn-menu btn-menu-active" : "btn-menu"}
          onClick={handleModal}
        >
          <img src={searchIcon} alt="Search icon" className="menu-icon" />
          Search
        </button>
      </div>
      <NavLink to="/about">
        <button
          className={isActiveAbout ? "btn-menu btn-menu-active" : "btn-menu"}
        >
          <img src={aboutIcon} alt="About us icon" className="menu-icon" />
          About
        </button>
      </NavLink>
      <hr className="menu-divider" />
    </aside>
  );
};
