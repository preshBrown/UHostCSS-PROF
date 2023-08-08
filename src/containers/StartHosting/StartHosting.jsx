import React, {useState} from 'react'
import {Link, Outlet, useNavigate} from "react-router-dom"
import CustomButtons from '../../components/CustomButtons/CustomButtons';
import "./StartHosting.css"

const StartHosting = (props) => {
  const [currentUser, setCurrentUser] = useState([]);
  const navigate = useNavigate();


    const backToPrev = () => {
        navigate("/");
    }
  return (
    <>
       <div className="Start__Hosting">
        <Link
         to='form-data'>
        <CustomButtons 
             btnType="green" >
            Advance
        </CustomButtons>
        </Link>

        <CustomButtons 
           btnType="red" clicked={backToPrev}>
            Back
        </CustomButtons>
      </div>
      <Outlet context={currentUser} />
    </>
    
  )
}

export default StartHosting;