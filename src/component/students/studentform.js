import React from 'react'
import {useRef} from 'react'
//import { useRef } from 'react'
import classes from './studentform.module.css'

const Studentform = (props) => {
  const studentNameInputRef = useRef()
  const studentIdInputRef = useRef()
  const studentImageInputRef = useRef()
  const studentPhoneInputRef = useRef()
  const studentFacultyInputRef = useRef()

  const onSubmithandler = (e) =>{
    e.preventDefault()

    const enteredName = studentNameInputRef.current.value
    const enteredId = studentIdInputRef.current.value
    const enteredimage = studentImageInputRef.current.value
    const enteredPhone = studentPhoneInputRef.current.value
    const enteredFaculty = studentFacultyInputRef.current.value

    const studentData = {
      name: enteredName,
      id: enteredId,
      image: enteredimage,
      phone: enteredPhone,
      faculty: enteredFaculty
    }
    props.onRegister(studentData)
  }

  return (
    <div class="containert">
      <div className={classes.forms}>
        <form onSubmit={onSubmithandler}>
          <div className={classes.name}>
            <label htmlFor="name">Enter your Name</label>
            <input type="text" placeholder="Name" ref={studentNameInputRef} required/>
          </div>
          <div className={classes.id}>
            <label htmlFor="id">Enter your Id</label>
            <input type="text" placeholder="Id" ref={studentIdInputRef} required/>
          </div>
          <div className={classes.image}>
            <label htmlFor="image">Enter your Image</label>
            <input type="url" placeholder="Image" ref={studentImageInputRef} required/>
          </div>
          <div className={classes.phone}>
            <label htmlFor="phone">Enter your Phone</label>
            <input type="tel" placeholder="Phone" ref={studentPhoneInputRef} required/>
          </div>
          <div className="faculty">
            <label htmlFor="faculty">Choose your faculty</label>
            <select name="" id="" ref={studentFacultyInputRef} required>
              <option value="cs" >
                computer science
              </option>
              <option value="cs">
                IT
              </option>
              <option value="software engineering">
                sofware engineering
              </option>
              <option value="accounting">
                accounting
              </option>
            </select>
          </div> 
          <button className={classes.btn} type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Studentform