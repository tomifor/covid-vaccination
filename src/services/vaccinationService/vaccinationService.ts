import {VaccinationDto} from '../../models/vaccination.model';
import api from '../api';

import {vaccinationRoutes} from './vaccinationRoutes';
import moment from 'moment';

export const vaccinationService = {
  getMunicipalityData: (province: string, municipality?: string): Promise<VaccinationDto> => {
    return api
      .get(vaccinationRoutes.getMunicipalityData(province, municipality))
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log('Error: ', e);
      });
  },
  getArgentinaData: () => {
    return api
      .get(vaccinationRoutes.getArgentinaData())
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log('Error: ', e);
      });
  },
  getAccumulatedRates: (province: string, municipality?: string) => {
    const today = moment().format('yyyy-MM-DD');
    return api
      .get(vaccinationRoutes.getAccumulatedRates(today, province, municipality))
      .then((res) => {
        return res.data;
      })
      .catch((e) => {
        console.log('Error: ', e);
      });
  },
};
