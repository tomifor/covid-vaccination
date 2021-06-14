import React, {useState} from 'react';
import styles from '../../../styles/LocationDetail.module.scss';
import {getIndicators} from '../../utils/parser';
import {VaccinationDto} from '../../models/vaccination.model';
import {Option} from '../../models/options.model';
import LocationIndicators from '../modules/LocationIndicators';
import {getDailyAppliedDoses} from '../../utils/chartsUtils';
import DailyAppliedDoses from '../modules/charts/DailyAppliedDoses';
import Button from '../elements/Button/Button';
import LocationFormModal from '../modules/modals/LocationFormModal';
import {useRouter} from 'next/router';
import {Location} from '../../models/location.model';
import AccumulativeRatesChart from '../modules/charts/AccumulativeRatesChart';
import {Rates} from '../../models/rates.model';
import {Message} from 'primereact/message';

type Props = {
  data: VaccinationDto;
  dataArg: VaccinationDto;
  location?: Option;
  rates?: Rates[];
};
const LocationDetailLayout: React.FC<Props> = ({data, dataArg, location, rates}): JSX.Element => {
  const indicators = getIndicators(data);
  const indicatorsArg = dataArg ? getIndicators(dataArg) : undefined;
  const dailyAppliedDosesData = getDailyAppliedDoses(data);
  const [comparisonModalForm, setComparisonModalForm] = useState<boolean>(false);
  const router = useRouter();

  console.log(data);
  console.log(indicators);

  const redirectToCompare = (location: Location) => {
    setComparisonModalForm(false);
    const {provinceId, municipalityId} = router.query;

    router.push(
      `/compare?province1=${provinceId}${
        municipalityId ? '&municipality1=' + municipalityId : ''
      }&province2=${location.province}${
        location?.municipality ? '&municipality2=' + location.municipality : ''
      }`,
    );
  };

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
            className={'btn-compare p-button-outlined p-button-sm'}
            label={'Comparar'}
            onClick={() => setComparisonModalForm(true)}
          />
        </div>
        <LocationIndicators indicators={indicators} indicatorsArg={indicatorsArg} />
        <DailyAppliedDoses data={dailyAppliedDosesData} locationName={location?.label} />
        <div className={'p-grid'}>
          <div className={'p-col-12 p-md-6'}>
            <AccumulativeRatesChart data={rates} field={'dosis1'} title={'Primera dosis'} />
          </div>
          <div className={'p-col-12 p-md-6'}>
            <AccumulativeRatesChart data={rates} field={'dosis2'} title={'Segunda dosis'} />
          </div>
        </div>
        <div>
          <Message
            className={'full-width p-mt-4'}
            severity="warn"
            text="Aclaración: en ciertos casos se puede superar el 100% por dos posibles errores en los datos: 1) Proyección de población 2020 errada. 2) Criterio de residencia distinto entre lo que es el censo y el domicilio de vacunación.  "
          />
        </div>
      </div>
      <LocationFormModal
        visible={comparisonModalForm}
        onClose={() => setComparisonModalForm(false)}
        onSubmit={redirectToCompare}
      />
    </div>
  );
};

export default LocationDetailLayout;
