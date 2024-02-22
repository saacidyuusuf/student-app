import React from "react";
import { createContext, useState } from "react";

const AppliedStudents = createContext({
  applied: [], //initial state
  totalApplied: 0,
  addStudent: (appliedStudent) => {},
  removestudent: (studentid) => {},
  isItemAppiled: (studentid) => {}
});

export const ApliedStudentProvider = (props) => {
  const [userapplied, setuserapplied] = useState([]);

  function addAppliedHandler(appliedStudent) {
    setuserapplied((prevapplieduser) => {
      return prevapplieduser.concat(appliedStudent);
    });
  }
  
  function removeappliedHandler(studentid) {
    setuserapplied((prevapplieduser) => {
      return prevapplieduser.filter((student) => 
      student.id !== studentid);
    });
  }
  function itemappliedhandler(studentid) {
    return userapplied.some((student) => 
    student.id === studentid);
  }
  const applied = {
    applied: userapplied,
    totalApplied: userapplied.length,
    addStudent: addAppliedHandler,
    removestudent: removeappliedHandler,
    isItemAppiled :itemappliedhandler
  };

  return (
    <AppliedStudents.Provider value={applied}>
      {props.children}
    </AppliedStudents.Provider>
  );
};

/**
 * applied objectiga waxy ka masuul ahane in context wax laga badalo
 * marwalba oo initial hda waxwalba waa eber marka
 *  mdama value ahan loo siiyay appliedstudentprovider
 * oo hdow loo adeegsan rabo in wrap looga dhigo compoenentyada
 * u bahan
 */
export default AppliedStudents;