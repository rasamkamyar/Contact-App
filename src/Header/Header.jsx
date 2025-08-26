import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Contact App</h1>
      <p className={styles.subtitle}>Sample React Project for Beginners</p>
    </header>
  );
};

export default Header;
