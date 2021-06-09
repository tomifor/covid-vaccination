import React from 'react';
import {VaccinationDto} from '../../models/vaccination.model';
import styles from '../../../styles/CompareLocations.module.scss';
import ComparisonCard from '../elements/ComparisonCard/ComparisonCard';
import {getIndicators} from '../../utils/parser';
import {useRouter} from 'next/router';
import {LocationOption} from '../../models/location.model';

type Props = {
  location1: LocationOption;
  location1Data: VaccinationDto;
  location2: LocationOption;
  location2Data: VaccinationDto;
};

const CompareLocationsLayout: React.FC<Props> = ({
  location1,
  location1Data,
  location2,
  location2Data,
}) => {
  const router = useRouter();
  const indicators1 = getIndicators(location1Data);
  const indicators2 = getIndicators(location2Data);

  const onRedirect = (location: LocationOption) => {
    router.push(
      `/province/${location.province.value}${
        location.municipality ? '/municipality/' + location.municipality.value : ''
      }`,
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerRow + ' p-grid'}>
          <div
            className={styles.locationTitle1 + ' p-col-6 p-text-center pointer'}
            onClick={() => onRedirect(location1)}
          >
            <h1 className={styles.title}>
              {location1.municipality ? location1.municipality.label : location1.province.label}
            </h1>
            <p className={styles.population}>Población: {indicators1.totalPopulation} hab.</p>
          </div>
          <div
            className={styles.locationTitle2 + ' p-col-6 p-text-center pointer'}
            onClick={() => onRedirect(location2)}
          >
            <h1 className={styles.title}>
              {location2.municipality ? location2.municipality.label : location2.province.label}
            </h1>
            <p className={styles.population}>Población: {indicators2.totalPopulation} hab.</p>
          </div>
        </div>
      </div>
      <div className={styles.valuesContainer}>
        <ComparisonCard
          title={'Personas con al menos una dosis'}
          value1={indicators1.populationPercentageVaccinatedFirstDose + '%'}
          value2={indicators2.populationPercentageVaccinatedFirstDose + '%'}
        />
        <ComparisonCard
          title={'Personas con ciclo completo'}
          value1={indicators1.populationPercentageVaccinatedSecondDose + '%'}
          value2={indicators2.populationPercentageVaccinatedSecondDose + '%'}
        />
        <ComparisonCard
          title={'Dosis administradas cada 100 personas'}
          value1={indicators1.dosesAdministeredPer100}
          value2={indicators2.dosesAdministeredPer100}
        />
        <ComparisonCard
          title={'% dosis aplicadas sobre recibidas'}
          value1={`${indicators1.appliedDosesPercentage ?? '-'} %`}
          value2={`${indicators2.appliedDosesPercentage ?? '-'} %`}
        />
        <ComparisonCard
          title={'Dosis aplicadas'}
          value1={indicators1.totalAppliedDoses}
          value2={indicators2.totalAppliedDoses}
        />
        <ComparisonCard
          title={'Dosis 1 aplicadas'}
          value1={indicators1.totalAppliedFirstDoses}
          value2={indicators2.totalAppliedFirstDoses}
        />
        <ComparisonCard
          title={'Dosis 2 aplicadas'}
          value1={indicators1.totalAppliedSecondDoses}
          value2={indicators2.totalAppliedSecondDoses}
        />
        <ComparisonCard
          title={'Promedio dosis aplicadas últimos 7 días (por día)'}
          value1={indicators1.avgAppliedDoses7Days}
          value2={indicators2.avgAppliedDoses7Days}
        />
      </div>
    </div>
  );
};

export default CompareLocationsLayout;
