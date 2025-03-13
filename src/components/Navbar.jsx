import logo from "../assets/logo-dark-rental-hack.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Iron Rental" />
        <h1 className="title">Rental Hack</h1>
      </div>
        <p className="subtitle">
          We've hacked the market to bring you the best deals.
        </p>
    </nav>
  );
};
