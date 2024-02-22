import React from "react";
import Studentitem from "./Studentitem";

const Studentlist = (props) => {
  return (
    <div>
      {props.students.map((item) => {
        return <Studentitem 
        name={item.name} 
        id={item.id} 
        image={item.image}
        faculty={item.faculty}
        phone={item.phone}/>;
      })}
    </div>
  );
};

export default Studentlist;
