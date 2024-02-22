import React from "react";
import classes from './Mainnav.module.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppliedStudents from "../../store/Aplied-student";

const Mainnav = () => {
  const studentctx = useContext(AppliedStudents)
  return (
    <div className={classes}>
      <nav>
        <ul>
          <li>
            <Link className={classes.name} to="/">Students</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/appliedstudents">
              AppleidStudents
              <span className={classes.tiro}>{studentctx.totalApplied}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Mainnav;
