import React from 'react';
import styles from '../../../styles/LocationDetail.module.scss';
import {getIndicators} from '../../utils/parser';
import {VaccinationDto} from '../../models/vaccination.model';
import {Option} from '../../models/options.model';
import LocationIndicators from '../modules/LocationIndicators';
import {getDailyAppliedDoses} from '../../utils/chartsUtils';
import DailyAppliedDoses from '../modules/charts/DailyAppliedDoses';

type Props = {
  data: VaccinationDto;
  location?: Option;
};
const LocationDetailLayout: React.FC<Props> = ({data, location}): JSX.Element => {
  const indicators = getIndicators(data);
  const dailyAppliedDosesData = getDailyAppliedDoses(data);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{location?.label}</h1>
      </div>
      <div className={'p-text-center'}>
        <p className={'p-mb-1 p-mt-2'}>Última actualización: {indicators.lastUpdate}</p>
      </div>
      <div className={styles.bodyContainer}>
        <LocationIndicators indicators={indicators} />
        <DailyAppliedDoses data={dailyAppliedDosesData} />
      </div>
    </div>
  );
};

export default LocationDetailLayout;
