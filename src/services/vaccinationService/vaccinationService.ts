import { VaccinationDto } from '../../models/vaccination.model'
import axios from 'axios'
import api from '../api'
import { vaccinationRoutes } from './vaccinationRoutes'

export const vaccinationService = {
  getMunicipalityData: (province: string, municipality: string): Promise<VaccinationDto> => {
    return api.get(vaccinationRoutes.getMunicipalityData(province, municipality)).then(res => res.data)
  }
}
