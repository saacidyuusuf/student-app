import React from "react";
import classes from "./body.module.css";

const Body = (props) => {
  return (
    <>
      <div className={classes.containert}>
        <div className={classes.grid}>
        {props.children}
        </div>
        </div>
    </>
  );
};

export default Body;
