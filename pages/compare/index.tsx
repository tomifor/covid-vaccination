import React from 'react';
import {VaccinationDto} from '../../src/models/vaccination.model';
import CompareLocationsLayout from '../../src/components/layouts/CompareLocationsLayout';
import {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';
import {vaccinationService} from '../../src/services/vaccinationService/vaccinationService';
import {resolveLocation} from '../../src/utils/locationResolver';
import {useRouter} from 'next/router';
import FullscreenLoader from '../../src/components/elements/FullScreenLoader/FullScreenLoader';

const CompareLocations = ({
  location1Data,
  location2Data,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  if (error) {
    return (
      <div className={'p-text-center'}>
        <p>Ocurrió un error al cargar los datos</p>
      </div>
    );
  }

  const {province1, municipality1, province2, municipality2} = router.query;

  if (!province1 || !province2) {
    router.push('/');

    return <FullscreenLoader />;
  }

  const location1 = resolveLocation(
    province1.toString(),
    municipality1 ? municipality1.toString() : '',
  );
  const location2 = resolveLocation(
    province2.toString(),
    municipality2 ? municipality2.toString() : '',
  );

  if (!location1 || !location2) {
    router.push('/');

    return <FullscreenLoader />;
  }

  console.log(location1);
  console.log(location2);

  return (
    <CompareLocationsLayout
      location1={location1}
      location1Data={location1Data}
      location2={location2}
      location2Data={location2Data}
    />
  );
};

export default CompareLocations;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const {province1, municipality1, province2, municipality2} = context.query;

  if (!province1 || !province2) {
    return {props: {location1: undefined, location2: undefined, error: true}};
  }

  try {
    const location1Req = vaccinationService.getMunicipalityData(
      province1.toString(),
      municipality1 ? municipality1.toString() : undefined,
    );
    const location2Req = vaccinationService.getMunicipalityData(
      province2.toString(),
      municipality2 ? municipality2.toString() : undefined,
    );

    const res = await Promise.all([location1Req, location2Req]);

    return {props: {location1Data: res[0], location2Data: res[1], error: false}};
  } catch (e) {
    console.log(e);

    return {props: {location1Data: undefined, location2Data: undefined, error: true}};
  }
};
