import React from "react"
import Backdrop from "../Backdrop/Backdrop";
import Navitems from "../NavItems/NavItems"
import "./SideDraw.css";

const SideDraw = (props) => {

  let sideClass = ["SideDraw"];
  if (props.sideShow) {
    sideClass = ["SideDraw", "Open"];
  }    
  return (
    <>
        <Backdrop show={props.sideShow} close={props.close} />
       <div className={sideClass.join(" ")} onClick={props.close}>
        <nav >
            <Navitems />
        </nav>
       </div>
    </>
  )
}

export default SideDraw