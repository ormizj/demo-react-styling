import React, { useState } from "react";
import styles from "./CourseInput.module.css";

import Button from "../../UI/Button/Button";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    // from the "styles" you need to reference specific classes (this case "main-style" & "form-control" classes)
    <form className={styles["main-style"]} onSubmit={formSubmitHandler}>
      <div
        className={`
          ${styles["form-control"]}
          ${!isValid && styles.invalid}
        `}
        invalid={!isValid}
      >
        {/* placing a dynamic class to an element */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

// example of using dynamic className
// <div className={`form-control ${!isValid && "invalid"}`}></div>

// example of using dynamic "style" instead of className
// <input type="text" onChange={goalInputChangeHandler}
//    style={{
//    borderColor: !isValid ? 'red' : 'black',
//    background: !isValid ? 'salmon' : 'transparent'
//    }}
// />

// using "styled" library

// import styled from "styled-components";

// the "invalid" attribute will be sent to "styled" as a "props"
// <FormControl invalid={!isValid}> </FormControl>;

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;

//     // using element attribute to set style
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;
