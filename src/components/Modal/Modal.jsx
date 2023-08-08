import React from "react";
import "./Modal.css";
import Backdrop from  "../Backdrop/Backdrop";

const Modal = (props) => {

    const modalClass = ["Modal", props.show ? "Mopen" : "Mclose"];

  return (
    <>
    <Backdrop show={props.show} close={props.close} />
    <div className={modalClass.join(' ')}>
        {props.children}
    </div>
    </>
  )
}

export default Modal;