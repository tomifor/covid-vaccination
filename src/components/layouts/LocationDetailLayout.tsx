import React from 'react';
import styles from '../../../styles/LocationDetail.module.scss';
import {getIndicators} from '../../utils/parser';
import {VaccinationDto} from '../../models/vaccination.model';
import {ProgressSpinner} from 'primereact/progressspinner';
import {Option} from '../../models/options.model';
import IndicatorCard from '../elements/IndicatorCard/IndicatorCard';

type Props = {
  data: VaccinationDto;
  location?: Option;
};
const LocationDetailLayout: React.FC<Props> = ({data, location}): JSX.Element => {
  const indicators = getIndicators(data);

  if (!data) {
    return (
      <div>
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{location?.label}</h1>
      </div>
      <div className={'p-grid ' + styles.indicators}>
        <div className={'p-col-12 p-md-3'}>
          <IndicatorCard title={'Dosis aplicadas'} value={indicators.totalAppliedDoses} />
        </div>
        <div className={'p-col-12 p-md-3'}>
          <IndicatorCard title={'Dosis 1 aplicadas'} value={indicators.totalAppliedFirstDoses} />
        </div>
        <div className={'p-col-12 p-md-3'}>
          <IndicatorCard title={'Dosis 2 aplicadas'} value={indicators.totalAppliedSecondDoses} />
        </div>
        <div className={'p-col-12 p-md-3'}>
          <IndicatorCard
            title={'Personas con al menos una dosis'}
            value={indicators.populationPercentageVaccinatedFirstDose + '%'}
          />
        </div>
        <div className={'p-col-12 p-md-3'}>
          <IndicatorCard
            title={'Personas con ciclo completo'}
            value={indicators.populationPercentageVaccinatedSecondDose + '%'}
          />
        </div>
        <div className={'p-col-12 p-md-3'}>
          <IndicatorCard
            title={'Dosis administradas cada 100 personas'}
            value={indicators.dosesAdministeredPer100}
          />
        </div>
        <div className={'p-col-12 p-md-3'}>
          <IndicatorCard title={'Población total'} value={indicators.totalPopulation} />
        </div>
      </div>
    </div>
  );
};

export default LocationDetailLayout;
