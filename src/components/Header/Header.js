import "./Header.css";
import React from "react";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import NavigationMobile from "../NavigationMobile/NavigationMobile";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Header(props) {

  const currentUser = React.useContext(CurrentUserContext)

  return (
    <header
      className={`header header_${
        props.location.pathname === "/saved-news" ? "black" : ""
      }`}
    >
      <Link
        className={`header__logo header__logo_${
          props.location.pathname === "/saved-news" ? "black" : "white"
        }`}
        to="/"
      >
        NewsExplorer
      </Link>
      {props.mobile ? (
        <NavigationMobile
          mobileMenuOpen={props.mobileMenuOpen}
          onSigninClick={props.onSigninClick}
          buttonDisabled={props.buttonDisabled}
          location={props.location}
          loggedIn={props.loggedIn}
          onSignOut={props.onSignOut}
          onClose={props.onClose}
          onAnyClick={props.onAnyClick}
          mobile={props.mobile}
          userName = {currentUser &&currentUser.name}
        />
      ) : (
        <Navigation
          mobile={props.mobile}
          onSigninClick={props.onSigninClick}
          location={props.location}
          loggedIn={props.loggedIn}
          onSignOut={props.onSignOut}
          onAnyClick={props.onAnyClick}
          mobileMenuOpen={props.mobileMenuOpen}
          userName = {currentUser &&currentUser.name}
        />
      )}
      {props.mobile && (
        <button
          className={`header__hamburger header__hamburger_${
            props.location.pathname === "/saved-news" ? "black" : "white"
          }`}
          onClick={props.onHamburgerClick}
        ></button>
      )}
    </header>
  );
}

export default Header;
