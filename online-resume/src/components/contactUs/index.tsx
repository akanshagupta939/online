import React from "react";
import styles from "./styles.module.scss";

const ContactUs = () => {
  return (
    <>
      <div className={styles.outer_container}>
        <h3 className={styles.header}>Email: akanshagupta939@gmail.com</h3>
        <a
          className={styles.header}
          href="https://www.linkedin.com/in/akansha-gupta-26125914a/"
          target="_blank"
        >
          LinkedIn
        </a>
        <h1 className={styles.body}> Phone Number: +61 - 412624333 </h1>
      </div>
    </>
  );
};

export default ContactUs;
