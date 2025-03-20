import logo from "../assets/logo-rental-hack.svg";
import logout from "../assets/arrow-right-from-bracket-icon.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <Link to="/">
            <div className="logo-background">
              <img src={logo} alt="Iron Rental" className="logo" />
            </div>
          </Link>
        </div>
        <hr className="divider-navbar" />
        <div className="title-container">
          <h1 className="title">Rental Hack</h1>
        </div>
        <hr className="divider-navbar" />
        <div className="logout-container">
          <img src={logout} alt="Log out icon" className="icon" />
        </div>
      </nav>
    </>
  );
};
