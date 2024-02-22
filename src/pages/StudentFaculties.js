import React from "react";
import { useContext } from "react";
import AppliedStudents from "../store/Aplied-student";
import Studentlist from "../component/students/Studentlist";

const AppliedStudentsList = () => {
  const studentctx = useContext(AppliedStudents);

  let content;
  if (studentctx.totalApplied === 0) {
    content = <p>No applied Student Yet</p>;
  } else {
    content = <Studentlist students={studentctx.applied}/>
  }

  return (
    <>
    <section className="applied">
      <h1>Applied students</h1>
      {content}
    </section>
    </>
  );
};

export default AppliedStudentsList;
