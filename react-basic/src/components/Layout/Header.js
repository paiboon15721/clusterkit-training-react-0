import React from "react";
import Logo from "./Logo";

export default props => (
  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <Logo />
    <input
      className="form-control form-control-dark w-100"
      type="text"
      placeholder="Search"
      aria-label="Search"
    />
    <ul className="navbar-nav px-3">
      <li className="nav-item text-nowrap">
        <span className="nav-link" href="#">
          Sign out
        </span>
      </li>
    </ul>
  </nav>
);
