import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignInLinks = () => {
  return (
    <Nav>
      <Link className="nav-link" to="/login">
        Zaloguj
      </Link>
      <Link className="nav-link" to="/signup">
        Zarejestruj
      </Link>
    </Nav>
  );
};

export default SignInLinks;
