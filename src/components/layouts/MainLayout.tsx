import React from 'react';
import styles from '../../../styles/Home.module.scss';
import LocationForm from '../modules/forms/LocationForm';
import {Button} from 'primereact/button';

const MainLayout = () => {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>¡Bienvenido!</p>
          <p className={styles.subtitle}> Aquí encontraras los datos de vacunación Covid-19 de tu provincia o municipio</p>
        </div>
        <div className={styles.form}>
          <LocationForm />
        </div>
        <div className={'p-d-flex p-flex-column p-ai-center p-mr-1 p-ml-1 p-text-center'}>
          <p>
            Para más información sobre como vacunarte y el estado del proceso de vacunación podes
            visitar el sitio oficial de Argentina
          </p>
          <a
            href={'https://www.argentina.gob.ar/coronavirus/vacuna'}
            rel="noopener noreferrer"
            target={'_blank'}
          >
            <Button
              className="p-button-outlined"
              icon="pi pi-external-link"
              iconPos={'right'}
              label="Visitar"
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
