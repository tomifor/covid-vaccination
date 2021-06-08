import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';
import LocationDetailLayout from '../../../../src/components/layouts/LocationDetailLayout';
import {vaccinationService} from '../../../../src/services/vaccinationService/vaccinationService';
import {municipalities} from '../../../../src/data/places-data';

const MunicipalityDetail = ({
  data,
  dataArg,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const provincesId = router.query.provinceId ? router.query.provinceId.toString() : '';
  const municipalityId = router.query.municipalityId ? router.query.municipalityId.toString() : '';
  const municipality = municipalities[provincesId].find(
    (p) => p.value.toString() === municipalityId,
  );

  if (!municipality) {
    router.push('/404');

    return <div />;
  }

  console.log(dataArg);

  return (
    <LocationDetailLayout
      data={data}
      dataArg={dataArg}
      location={{value: municipality.value, label: municipality.label}}
    />
  );
};

export default MunicipalityDetail;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const {provinceId, municipalityId} = context.query;

  try {
    if (provinceId && municipalityId) {
      const req = vaccinationService.getMunicipalityData(
        provinceId.toString(),
        municipalityId.toString(),
      );
      const reqArg = vaccinationService.getArgentinaData();
      const res = await Promise.all([req, reqArg]);

      return {props: {data: res[0], dataArg: res[1], error: false}};
    } else {
      return {props: {data: undefined, error: true}};
    }
  } catch (e) {
    console.log(e);

    return {props: {data: undefined, error: true}};
  }
};
