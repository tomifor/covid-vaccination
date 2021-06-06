import React from 'react';
import styles from '../../../styles/LocationDetail.module.scss';
import IndicatorCard from '../elements/IndicatorCard/IndicatorCard';
import {VaccinationIndicators} from '../../models/vaccination.model';

type Props = {
  indicators: VaccinationIndicators;
};

const LocationIndicators = ({indicators}: Props): JSX.Element => {
  return (
    <div className={'p-grid ' + styles.indicators}>
      <div className={'p-col-12 p-sm-6 p-md-3 p-lg-3'}>
        <IndicatorCard title={'Dosis aplicadas'} value={indicators.totalAppliedDoses} />
      </div>
      <div className={'p-col-12 p-sm-6 p-md-3 p-lg-3'}>
        <IndicatorCard title={'Dosis 1 aplicadas'} value={indicators.totalAppliedFirstDoses} />
      </div>
      <div className={'p-col-12 p-sm-6 p-md-3 p-lg-3'}>
        <IndicatorCard title={'Dosis 2 aplicadas'} value={indicators.totalAppliedSecondDoses} />
      </div>
      <div className={'p-col-12 p-sm-6 p-md-3 p-lg-3'}>
        <IndicatorCard
          title={'Personas con al menos una dosis'}
          value={indicators.populationPercentageVaccinatedFirstDose + '%'}
        />
      </div>
      <div className={'p-col-12 p-sm-6 p-md-3 p-lg-3'}>
        <IndicatorCard
          title={'Personas con ciclo completo'}
          value={indicators.populationPercentageVaccinatedSecondDose + '%'}
        />
      </div>
      <div className={'p-col-12 p-sm-6 p-md-3 p-lg-3'}>
        <IndicatorCard
          title={'Dosis administradas cada 100 personas'}
          value={indicators.dosesAdministeredPer100}
        />
      </div>
      {indicators.appliedDosesPercentage && (
        <div className={'p-col-12 p-sm-6 p-md-3 p-lg-3'}>
          <IndicatorCard
            title={'% dosis aplicadas sobre recibidas'}
            value={indicators.appliedDosesPercentage}
          />
        </div>
      )}
      <div className={'p-col-12 p-sm-6 p-md-3 p-lg-3'}>
        <IndicatorCard
          title={'Promedio dosis aplicadas últimos 7 días (por día)'}
          value={indicators.avgAppliedDoses7Days}
        />
      </div>
    </div>
  );
};

export default LocationIndicators;
