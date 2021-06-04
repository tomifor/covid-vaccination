import React from 'react';
import styles from '../../../styles/Home.module.scss';
import {getIndicators} from '../../utils/parser';
import {vaccinationDataExample} from '../../data/example';
import LocationForm from '../modules/forms/LocationForm';

const MainLayout = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Bienvenido! Aquí encontraras los datos de vacunación Covid-19 de tu provincia o
            municipio
          </p>
        </div>
        <div className={styles.form}>
          <LocationForm />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
