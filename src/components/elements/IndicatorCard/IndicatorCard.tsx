import React from 'react';
import styles from './IndicatorCard.module.scss';

type Props = {
  title: string;
  value: string;
};

const IndicatorCard: React.FC<Props> = ({title, value}): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.body}>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default IndicatorCard;
