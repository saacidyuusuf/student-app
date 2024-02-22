import React from "react";
import classes from "./student.module.css";
import Body from "../ui/body";
import { useContext } from "react";
import AppliedStudents from "../../store/Aplied-student";

const Studentitem = (props) => {
  const appliedCtx = useContext(AppliedStudents);

  const itemisApplied = appliedCtx.isItemAppiled(props.id);

  function toggleappliedhandler() {
    if (itemisApplied) {
      appliedCtx.removestudent(props.id);
    } else {
      appliedCtx.addStudent({
        id: props.id,
        name: props.name,
        faculty: props.faculty,
        phone: props.phone,
        image: props.image,
      });
    }
  }
  return (
    <Body>
      <div className={classes.grid}>
        <div className={classes.infoHaye}>
          <div className={classes.infoImg}>
            <img width="100" src={props.image} alt={props.title} />
          </div>
          <div className={classes.infoQofka}>
            <h3>
              Name: <span>{props.name}</span>
            </h3>
            <h4>Id: {props.id}</h4>
            <h4>Faculty: {props.faculty}</h4>
            <h4>Phone: {props.phone}</h4>
            <button onClick={toggleappliedhandler} className={classes.faculty}>
              {itemisApplied ? "remove" : "apply"}
            </button>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default Studentitem;


 
