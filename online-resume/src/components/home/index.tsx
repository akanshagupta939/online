import React from "react";
import styles from "./styles.module.scss";

interface ResumeDate {
  name: string;
  role: string;
  experience: string;
}

const resumeDate = {
  name: "Akansha",
  role: "Software Engineer",
  experience: "Java, Python and JavaScript",
};
export const Home = (resumeData: ResumeDate) => {
  return (
    <>
      <div className={styles.outer_container}>
        <h1 className={styles.header}> Hi I am {resumeDate.name}</h1>
        <h3 className={styles.body}>
          I am a {resumeDate.role}. I like dabbling in various part of front-end
          development and like to learn new technologies. My skills are{" "}
          {resumeDate.experience}.
        </h3>
      </div>
    </>
  );
};
