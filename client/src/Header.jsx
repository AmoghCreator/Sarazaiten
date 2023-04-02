import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <div style={styles.logo}>S</div>
        <h1 style={styles.appName}>sarazaiten</h1>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#2C3333",
    height: "50px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
  },
  logo: {
    backgroundColor: "#CBE4DE",
    color: "#0E8388",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    fontWeight: "bold",
    marginRight: "16px",
    marginLeft: "10px",
  },
  appName: {
    color: "#CBE4DE",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0",
  },
};

export default Header;
