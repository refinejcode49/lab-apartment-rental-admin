import logo from "../assets/logo-rental-hack.svg";
import logout from "../assets/arrow-right-from-bracket-icon.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Iron Rental" className="logo"  />
        </div>
        <hr className="divider-navbar"/>
        <div className="title-container">
          <h1 className="title">Rental Hack</h1>
        </div>
        <hr className="divider-navbar"/>
        <div className="logout-container">
          <img src={logout} alt="Log out icon" className="icon" />
        </div>
      </nav>
    </>
  );
};
