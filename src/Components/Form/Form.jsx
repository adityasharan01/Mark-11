import React, { useState } from "react";
import styles from "./Form.module.css";
import Fade from "react-reveal/Fade";

const Form = () => {
  const [dob, setDob] = useState("");
  const [lucky, setLucky] = useState("");
  const [result, setResult] = useState("");

  const checkLucky = (e) => {
    e.preventDefault();

    let strArr = dob.replaceAll("-", "").split("");

    console.log(strArr);
    let sum = 0;
    for (let i = 0; i < strArr.length; i++) {
      sum += parseInt(strArr[i]);
    }
    if (sum % lucky === 0) {
      setResult(true);
      console.log("lucky");
    } else {
      setResult(false);
      console.log("Not lucky");
    }
  };

  return (
    <div>
      <Fade left>
        <form className={styles.container} onSubmit={checkLucky}>
          <h1>Enter Your Birth Date</h1>

          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <input
            type="number"
            value={lucky}
            placeholder="Enter Your Lucky Number"
            onChange={(e) => setLucky(e.target.value)}
            required
          />
          {lucky && (
            <p>Results are not in our hands so it might be unlucky but remember you are Special !!</p>
          )}
          <button>Check Now!</button>

          {result !== "" && result && (
            <div className={styles.container}>
              <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" alt="gif_PASS"/>
              <h2>Your Birthday is Lucky!!</h2>
            </div>
          )}
          {result === false && (
            <div className={styles.container}>
            <img src="https://media.giphy.com/media/R1smhJhlYdtSvvBdxM/giphy.gif" style={{height:"15rem"}}  alt="gif_FAIL" />
            <h2>Sorry!! Your Birthday isn't Lucky</h2>
            </div>
          )}
        </form>
      </Fade>
    </div>
  );
};

export default Form;
