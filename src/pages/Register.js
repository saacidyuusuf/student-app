import { useNavigate } from "react-router-dom";
import React from "react";
import Studentform from "../component/students/studentform";
import classes from "../component/students/studentform.module.css";

const Register = () => {
  const navigate = useNavigate()
  const registerHandler =(studentData) =>{
    fetch('https://my-react-project-72e6a-default-rtdb.firebaseio.com/studentid.json',
    {
      method: 'POST',
      body : JSON.stringify(studentData),
      header:{'Content-Type': 'application/json'}
    }
    ).then(() =>{
      navigate('/')
    })
  }
  return (
    <>
      <h1 className={classes.formTitle}>
        Enter your info
        </h1>
      <div>
        <Studentform  onRegister={registerHandler}/>
      </div>
    </>
  );
};

export default Register;
