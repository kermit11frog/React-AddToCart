import { FaShoppingBasket, FaSearch } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar row-1">
      <div className="container align-items jc-sb gp-10">
        <div className="navbar__logo align-items gp-5">
          <FaShoppingBasket className="navbar__logo-icon"/>
          <h1 className="navbar__logo-title">Groco</h1>
        </div>
        <form className="searchBox align-items" action="/" method="GET">
          <input type="text" name="search" placeholder="search here ..." className="searchBox__input"/>
          <button className="searchBox__button">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
