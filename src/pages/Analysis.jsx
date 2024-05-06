import React from 'react';
import AnimalGraph from '../graphs/animalsgraph';
import styles from '../components/Analysis.module.css';
const Analysis = () => {
    return (
      <div className={styles.arrange} >
        <AnimalGraph />
      </div>
    );
  }
  
  export default Analysis;