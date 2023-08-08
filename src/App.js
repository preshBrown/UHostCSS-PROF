import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import HomePage from "./containers/Home/Home";
import Customer from "./containers/Customer/Customer";
import StartHosting from "./containers/StartHosting/StartHosting";
import Package from "./containers/Package/Package";
import FormData from "./containers/StartHosting/FormData"; 

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="package" element={<Package />} />
        <Route path="customer" element={<Customer />} />
        <Route path="start-host" element={<StartHosting />}>
          <Route path="form-data" element={<FormData />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
