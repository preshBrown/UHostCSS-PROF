import React, { useState } from "react";
import CustomButtons from "../../components/CustomButtons/CustomButtons";
import Modal from "../../components/Modal/Modal";
import Freedom from "./Freedom";
import StickAround from "./StickAround";
import YourPlan from "./YourPlan";
import "./Home.css"

const timmer = 400;

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(false);

  const removeModal = () => {
    setTimeout(() => {
      setShowModal(false);
    }, timmer);
  };

  const toggleModal = () => {
    setModal(true);
    setShowModal(true);
  };
  const cancel = () => { 
    setModal(false);
    removeModal();
  };

 
  return (
    <>
      {showModal && (
        <Modal show={modal} close={cancel}>
          <p className="paragraph">Advance To Package Page</p>
          <div className="button__container">
            <CustomButtons btnType="green">Proceed</CustomButtons>
            <CustomButtons btnType="black" clicked={cancel}>
              Cancel
            </CustomButtons>
          </div>
        </Modal>
      )}
      <Freedom />
      <YourPlan toggle={toggleModal} />
      <StickAround />
    </>
  );
};

export default Home;
