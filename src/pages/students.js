import React from "react";
import { useState, useEffect } from "react";
import classes from "../component/students/student.module.css";
import Studentlist from "../component/students/Studentlist";
//https://source.unsplash.com/200x300/?person,face&sig=2

const Students = () => {
  const [isloading, setLoading] = useState(true);
  const [usingtheData, setusingtheData] = useState([]);
  useEffect(() => {
    async function ascyFunc() {
      const response = await fetch(
        "https://my-react-project-72e6a-default-rtdb.firebaseio.com/studentid.json"
      );
      const resdata = await response.json();
      const studentIds = [];
      for (const key in resdata) {
        const studentid = {
          id: key,
          ...resdata[key],
        };
        studentIds.push(studentid);
      }
      setusingtheData(studentIds);
      setLoading(false);
    }
    ascyFunc();
  }, []);

  if (isloading) {
    return (
      <main>
        <p>is Loading</p>
      </main>
    );
  }
  return (
    <>
      <h1 className={classes.studentTitle}>Students</h1>
      {<Studentlist students={usingtheData} />}
    </>
    
  );
};

export default Students;
