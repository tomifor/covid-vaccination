import React from 'react';
import {VaccinationDto} from '../../models/vaccination.model';
import styles from '../../../styles/CompareLocations.module.scss';
import ComparisonCard from '../elements/ComparisonCard/ComparisonCard';

type Props = {
  location1: VaccinationDto;
  location2: VaccinationDto;
};

const CompareLocationsLayout: React.FC<Props> = ({location1, location2}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerRow + ' p-grid'}>
          <div className={styles.locationTitle1 + ' p-col-6 p-text-center'}>
            <h1 className={styles.title}>Buenos Aires</h1>
          </div>
          <div className={styles.locationTitle2 + ' p-col-6 p-text-center'}>
            <h1 className={styles.title}>CABA</h1>
          </div>
        </div>
      </div>
      <div className={styles.valuesContainer}>
        <ComparisonCard title={'Dosis aplicadas'} value1={'3131313'} value2={'3123123123'} />
        <ComparisonCard title={'Dosis 1 aplicadas'} value1={'3131313'} value2={'3123123123'} />
        <ComparisonCard title={'Dosis 2 aplicadas'} value1={'3131313'} value2={'3123123123'} />
        <ComparisonCard
          title={'Personas con al menos una dosis'}
          value1={'3131313'}
          value2={'31123123'}
        />
        <ComparisonCard
          title={'Personas con ciclo completo'}
          value1={'3131313'}
          value2={'31123123'}
        />
        <ComparisonCard
          title={'Dosis administradas cada 100 personas'}
          value1={'3131313'}
          value2={'31123123'}
        />
        <ComparisonCard
          title={'% dosis aplicadas sobre recibidas'}
          value1={'3131313'}
          value2={'31123123'}
        />
        <ComparisonCard
          title={'% Promedio dosis aplicadas últimos 7 días (por día)'}
          value1={'3131313'}
          value2={'31123123'}
        />
      </div>
    </div>
  );
};

export default CompareLocationsLayout;
