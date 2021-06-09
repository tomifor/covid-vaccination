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

type Props = {
  data: VaccinationDto;
  dataArg: VaccinationDto;
  location?: Option;
};
const LocationDetailLayout: React.FC<Props> = ({data, dataArg, location}): JSX.Element => {
  const indicators = getIndicators(data);
  const indicatorsArg = dataArg ? getIndicators(dataArg) : undefined;
  const dailyAppliedDosesData = getDailyAppliedDoses(data);
  const [comparisonModalForm, setComparisonModalForm] = useState<boolean>(false);
  const router = useRouter();

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
            className={'p-button-outlined p-button-sm'}
            label={'Comparar'}
            onClick={() => setComparisonModalForm(true)}
          />
        </div>
        <LocationIndicators indicators={indicators} indicatorsArg={indicatorsArg} />
        <DailyAppliedDoses data={dailyAppliedDosesData} />
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
