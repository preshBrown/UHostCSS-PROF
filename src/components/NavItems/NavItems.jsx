import React from "react";
import NavItem from "./NavItem/NavItem";
import "./NavItems.css";

const Navitems = (props) => {
  return (
    <ul className="NavItems">
      <NavItem link="/" exact="true">
        Home
      </NavItem>

      <NavItem link="package">Package</NavItem>

      <NavItem link="customer">Customers</NavItem>

      <NavItem link="start-host">Start Hosting</NavItem>
    </ul>
  );
};

export default Navitems;
