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
        <br></br>
        <a className={styles.header} href="/Resume.pdf" download>
          Download Resume
        </a>
      </div>
    </>
  );
};

export default About;
