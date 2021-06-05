import React from 'react';
import styles from '../../../styles/LocationDetail.module.scss';
import {getIndicators} from '../../utils/parser';
import {VaccinationDto} from '../../models/vaccination.model';
import {ProgressSpinner} from 'primereact/progressspinner';
import {Option} from '../../models/options.model';
import IndicatorCard from '../elements/IndicatorCard/IndicatorCard';
import LocationIndicators from '../modules/LocationIndicators';

type Props = {
  data: VaccinationDto;
  location?: Option;
};
const LocationDetailLayout: React.FC<Props> = ({data, location}): JSX.Element => {
  const indicators = getIndicators(data);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{location?.label}</h1>
      </div>
      <div className={'p-text-center'}>
        <p className={'p-mb-1 p-mt-2'}>Última actualización: {indicators.lastUpdate}</p>
      </div>
      <LocationIndicators indicators={indicators} />
    </div>
  );
};

export default LocationDetailLayout;
