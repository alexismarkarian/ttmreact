import React from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="ttm-logo">
        <a href="/">Tothemoon</a>
      </div>
      <div className="ttm-nav">
        <button>
          <NavLink exact to="/contact" activeClassName="navActive">
            <span>Contact</span>
          </NavLink>
        </button>
        <nav ref={navRef}>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/agence-de-communication"
              activeClassName="navActive"
            >
              <span>Agence de communication</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/creation-site-internet"
              activeClassName="navActive"
            >
              <span>Site web</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/oeuvres" activeClassName="navActive">
              <span>Oeuvres</span>
            </NavLink>
          </li>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            Fermer
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          Menu
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Navigation;
