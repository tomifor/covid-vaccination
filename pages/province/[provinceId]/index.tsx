import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import LocationDetailLayout from '../../../src/components/layouts/LocationDetailLayout';
import {vaccinationService} from '../../../src/services/vaccinationService/vaccinationService';
import {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';
import {provinces} from '../../../src/data/places-data';

const ProvinceDetail = ({data, dataArg, error}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const provinceId = router.query.provinceId ? router.query.provinceId.toString() : '';

  console.log(data);
  console.log(dataArg);

  return (
    <LocationDetailLayout data={data} dataArg={dataArg} location={provinces.find((p) => p.value === provinceId)} />
  );
};

export default ProvinceDetail;

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const {provinceId} = context.query;

  try {
    if (provinceId) {
      const req = vaccinationService.getMunicipalityData(provinceId.toString());
      const reqArg = vaccinationService.getArgentinaData();
      const res = await Promise.all([req, reqArg]);

      return {props: {data: res[0], dataArg: res[1], error: false}};
    }
  } catch (e) {
    console.log(e);

    return {props: {data: undefined, error: true}};
  }

  return {props: {}};
};
