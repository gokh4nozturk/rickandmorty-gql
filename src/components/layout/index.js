import React from "react";
import { Link } from "react-router-dom";
import { Navigation, Wrapper } from "./styled";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Navigation>
        <div className="home-link">
          <Link className="nav-links" to="/">
            Home
          </Link>
        </div>

        <div className="data-links">
          <Link className="nav-links" to="/">
            Characters
          </Link>
          <Link className="nav-links" to="/episodes">
            Episodes
          </Link>
          <Link className="nav-links" to="/locations">
            Locations
          </Link>
        </div>
        <div className="user-links">
          <Link className="nav-links" to="/register">
            Register
          </Link>
          <Link className="nav-links" to="/login">
            Login
          </Link>
          <Link className="nav-links" to="/profile">
            Profile
          </Link>
        </div>
      </Navigation>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;
