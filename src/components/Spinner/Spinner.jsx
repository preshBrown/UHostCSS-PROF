import React from 'react';
import "./Spinner.css";

const Spinner = () => (
    <div className='Spinner' style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
    <div className="ldsring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>
)

export default Spinner;