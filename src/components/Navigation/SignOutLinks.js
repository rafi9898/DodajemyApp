import React from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignOutLinks = props => {
  return (
    <Nav>
      <Link className="nav-link" to="/dashboard">
        Moje wpisy
      </Link>
      <Link to="/new-post" className="nav-link">
        Dodaj wpis
      </Link>
      <NavDropdown
        className="profile-btn"
        title={props.profile.initials}
        id="collasible-nav-dropdown"
      >
        <NavDropdown.Item onClick={props.signOut}>Wyloguj</NavDropdown.Item>
      </NavDropdown>
      <p className="signout-btn" onClick={props.signOut}>
        Wyloguj
      </p>
    </Nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignOutLinks);
