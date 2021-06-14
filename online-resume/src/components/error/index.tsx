import styles from "./styles.module.scss";
export const Error = () => {
  return (
    <>
      <div className={styles.outer_container}>
        <h3 className={styles.header}>Awww... its just 404 Error!</h3>
        <h1 className={styles.body}>
          What you are looking for may have been misplaced in Long term memory.
        </h1>
      </div>
    </>
  );
};
