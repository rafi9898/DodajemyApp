import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/Logo.svg";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { connect } from "react-redux";

const NavbarBox = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignOutLinks profile={profile} /> : <SignInLinks />;
  return (
    <Navbar className="topNavbar" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand>
        <Link to="/">
          <img className="main-logo" src={Logo} alt="Main Logo" />
          <h2 className="mobile-logo">Dodajemy.eu</h2>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        {links}
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavbarBox);
