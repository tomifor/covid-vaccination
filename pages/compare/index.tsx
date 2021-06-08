import React from 'react';
import {VaccinationDto} from '../../src/models/vaccination.model';
import CompareLocationsLayout from '../../src/components/layouts/CompareLocationsLayout';

type Props = {
  location1: VaccinationDto;
  location2: VaccinationDto;
};

const CompareLocations = ({location1, location2}: Props) => {
  return <CompareLocationsLayout location1={location1} location2={location2} />;
};

export default CompareLocations;
