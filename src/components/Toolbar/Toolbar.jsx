import React from "react";
import NavItems from "../NavItems/NavItems";
import "./Toolbar.css";
import {AiOutlineBars} from "react-icons/ai"
import uhosticon from "../../Images/uhost-icon.png"

const Toolbar = (props) => {
  return (
    <>
      <header className="Toolbar">
        <div className="left-nav">
            <button className="button__toggle" 
                    onClick={props.toggle}>
                <AiOutlineBars style={{backgroundColor: "transparent", color: "black"}}
                               size={35} />
            </button>

            <a href="/">
                <img src={uhosticon} alt="brandImg" />
            </a>
        </div>

        <nav className="navbar-toolbar">
            <NavItems />
        </nav>
      </header>
    </>
  )
};

export default Toolbar;