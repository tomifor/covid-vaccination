import React, {useState} from 'react';
import styles from '../../../styles/LocationDetail.module.scss';
import {getIndicators} from '../../utils/parser';
import {VaccinationDto} from '../../models/vaccination.model';
import {Option} from '../../models/options.model';
import LocationIndicators from '../modules/LocationIndicators';
import {getDailyAppliedDoses} from '../../utils/chartsUtils';
import DailyAppliedDoses from '../modules/charts/DailyAppliedDoses';
import Button from '../elements/Button/Button';

type Props = {
  data: VaccinationDto;
  location?: Option;
};
const LocationDetailLayout: React.FC<Props> = ({data, location}): JSX.Element => {
  const indicators = getIndicators(data);
  const dailyAppliedDosesData = getDailyAppliedDoses(data);
  const [comparisonModalForm, setComparisonModalForm] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{location?.label}</h1>
        <p className={styles.population}>Población total: {indicators.totalPopulation}</p>
      </div>

      <div className={styles.bodyContainer}>
        <div className={styles.lastUpdate + ' p-d-flex p-jc-between p-ai-center p-mt-2'}>
          <p className={'p-mb-1 p-mt-2'}>Última actualización: {indicators.lastUpdate}</p>
          <Button
            className={'p-button-outlined p-button-sm'}
            label={'Comparar'}
            onClick={() => setComparisonModalForm(true)}
          />
        </div>
        <LocationIndicators indicators={indicators} />
        <DailyAppliedDoses data={dailyAppliedDosesData} />
      </div>
    </div>
  );
};

export default LocationDetailLayout;
