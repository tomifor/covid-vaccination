import React, {useEffect} from 'react';
import {useRouter} from 'next/router';
import {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType} from 'next';
import LocationDetailLayout from '../../../../src/components/layouts/LocationDetailLayout';
import {vaccinationService} from '../../../../src/services/vaccinationService/vaccinationService';
import {municipalities} from '../../../../src/utils/places-data';

const MunicipalityDetail = ({
  data,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const provincesId = router.query.provinceId ? router.query.provinceId.toString() : '';
  const municipalityId = router.query.municipalityId ? router.query.municipalityId.toString() : '';

  console.log(data);

  return (
    <LocationDetailLayout
      data={data}
      location={municipalities[provincesId].find((p) => p.value === municipalityId)}
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
      const res = await vaccinationService.getMunicipalityData(provinceId.toString(), municipalityId.toString());

      return {props: {data: res, error: false}};
    } else {
      return {props: {data: undefined, error: true}};
    }
  } catch (e) {
    console.log(e);

    return {props: {data: undefined, error: true}};
  }

  return {props: {}};
};
