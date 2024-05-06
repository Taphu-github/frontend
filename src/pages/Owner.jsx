import React from 'react';
import UserTable from '../components/UserTable';
import styles from '../components/Navbar.module.css';
const Owner = () => {
    return (
      <div className={styles.arrange}>
        <UserTable/>
      </div>
    );
  }
  
  export default Owner;