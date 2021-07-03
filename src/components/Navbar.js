import React from "react";

const Navbar = () => {
  return (
  <div className="navbar-container">
      <div className="container">
        <div className="logo">
          <img src="./images/netflix-logo.png" alt="Netflix" />
        </div>

        <div className="nav-links">
          <button className="sign-in">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
