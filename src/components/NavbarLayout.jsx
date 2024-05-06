import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from './Navbar.module.css'; // Import styles from CSS Module


const NavbarLayout = ({ children }) => {
    return (
      <div className={styles.sidebar}>
        <Navbar />
  
        {children}
      </div>
    );
  };
export default NavbarLayout;