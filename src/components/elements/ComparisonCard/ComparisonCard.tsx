import React from 'react';
import styles from './ComparisonCard.module.scss';

type Props = {
  title: string;
  value1: string;
  value2: string;
};

const ComparisonCard: React.FC<Props> = ({title, value1, value2}): JSX.Element => {
  return (
    <div className={styles.container}>
      <p className={styles.indicatorName}>{title}</p>
      <div className={'p-grid'}>
        <div className={'p-col-6 p-text-center'}>
          <p className={styles.value}>{value1}</p>
        </div>
        <div className={'p-col-6 p-text-center'}>
          <p className={styles.value}>{value2}</p>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCard;
