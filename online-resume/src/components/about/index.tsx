import React from "react";
import styles from "./styles.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.outer_container}>
        <h1 className={styles.header}> Hobbies and Interest</h1>
        <h3 className={styles.body}>
          I enjoy dancing and painting. I am an animal lover and currently
          learning how to swim. I believe one should never stop learning.
        </h3>
        <br></br>
        {/* <h1 className={styles.header}> Professional Summary</h1>
        <h1 className={styles.body}>
          Experienced software engineer with a passion for developing innovative
          programs that expedite the efficiency and effectiveness of
          organizational success. Well-versed in technology and writing code to
          create systems that are reliable and user-friendly.
        </h1> */}
        <br></br>
        <a
          className={styles.header}
          href="./../../assests/AkanshaGupta_Resume.pdf"
          download
        >
          Download Resume
        </a>
      </div>
    </>
  );
};

export default About;
