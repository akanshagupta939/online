import React from "react";
import styles from "./styles.module.scss";

const ContactUs = () => {
  return (
    <>
      <div className={styles.outer_container}>
        <a
          className={styles.header}
          href="https://www.linkedin.com/in/akansha-gupta-26125914a/"
          target="_blank"
        >
          LinkedIn
        </a>
        <h3 className={styles.body}>Email: akanshagupta939@gmail.com</h3>
      </div>
    </>
  );
};

export default ContactUs;
