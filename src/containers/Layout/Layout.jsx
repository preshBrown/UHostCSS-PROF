import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideDraw from "../../components/SideDraw/SideDraw";
import Toolbar from "../../components/Toolbar/Toolbar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const timmer = 500;
const start = 100
const Layout = (props) => {
  const [sideDraw, setSideDraw] = useState(false);
  const [showSideDraw, setShowSideDraw] = useState(false);

  const removeSideDraw = () => {
    setTimeout(() => {
        setShowSideDraw(false);
      }, timmer);
  };

  const sideToggle = () => {
    setShowSideDraw(true);
    setTimeout ( () => {
        setSideDraw(!sideDraw);
    }, start)
  };

  const closeSide = () => {
    setSideDraw(false);
    removeSideDraw();
  };



  return (
    <>
      <Toolbar toggle={sideToggle} />
      {showSideDraw && <SideDraw sideShow={sideDraw} close={closeSide} />}
      <main className="main">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
