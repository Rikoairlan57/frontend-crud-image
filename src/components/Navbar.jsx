/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const handleBurgerActive = () => {
    setBurgerActive(!burgerActive);
  };
  return (
    <nav
      className="navbar is-info"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/home" className="navbar-item is-size-3 has-text-weight-bold">
          Market
        </Link>

        <a
          role="button"
          onClick={handleBurgerActive}
          className={"navbar-burger " + (burgerActive ? "is-active" : "")}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={"navbar-menu " + (burgerActive ? "is-active" : "")}
      >
        <div className="navbar-end">
          <Link to="/home" className="navbar-item">
            Home
          </Link>
          <Link to="/" className="navbar-item">
            List Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
