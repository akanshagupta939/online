import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Navigation = () => {
  return (
    <>
      <nav className={styles.box1}>
        <ul className={styles.link}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
