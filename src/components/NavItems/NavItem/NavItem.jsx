import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

const NavItem = (props) => (
  <li className="NavItem">
    <NavLink to={props.link} exact={props.exact} activeclassname="active">
      {props.children}
    </NavLink>
  </li>
);

export default NavItem;
