import React from 'react';
import styles from './FullScreenLoader.module.scss';
import {ProgressSpinner} from 'primereact/progressspinner';

type Props = {
  title?: string;
};

const FullscreenLoader: React.FC<Props> = ({title}): JSX.Element => {
  return (
    <div className={styles.container}>
      <ProgressSpinner />
      <span className={styles.loadingText}>Cargando...</span>
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default FullscreenLoader;
