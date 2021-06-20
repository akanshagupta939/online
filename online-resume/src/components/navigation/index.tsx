import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Navigation = () => {
  const route = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" },
  ];
  return (
    <>
      <nav className={styles.navContainer}>
        <ul className={styles.link}>
          {route.map(({ to, name }) => (
            <li>
              <Link to={to}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
