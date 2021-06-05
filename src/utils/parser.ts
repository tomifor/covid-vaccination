import {population, VaccinationDto, VaccinationIndicators} from '../models/vaccination.model';
import {numberFormat} from './contants';
import moment from 'moment';

export const getIndicators = (data: VaccinationDto): VaccinationIndicators => {
  const totalFirstDoses = data.dosis1.reduce(accumulate);
  const totalSecondDoses = data.dosis2.reduce(accumulate);
  const totalReceivedDoses = data.dosisdistribuidas
    ? data.dosisdistribuidas.reduce(accumulate)
    : undefined;
  const totalDoses = totalFirstDoses + totalSecondDoses;

  return {
    lastUpdate: moment(data.fecha_inicial)
      .add(data.dias - 1, 'day')
      .format('DD/MM/yyyy'),
    totalAppliedDoses: new Intl.NumberFormat(numberFormat).format(totalDoses).toString(),
    totalAppliedFirstDoses: new Intl.NumberFormat(numberFormat).format(totalFirstDoses).toString(),
    totalAppliedSecondDoses: new Intl.NumberFormat(numberFormat)
      .format(totalSecondDoses)
      .toString(),
    populationPercentageVaccinatedFirstDose: (
      (totalFirstDoses * 100) /
      data.poblacion.personas
    ).toFixed(1),
    populationPercentageVaccinatedSecondDose: (
      (totalSecondDoses * 100) /
      data.poblacion.personas
    ).toFixed(1),
    totalPopulation: new Intl.NumberFormat(numberFormat).format(data.poblacion.personas).toString(),
    dosesAdministeredPer100: Math.floor(
      ((totalFirstDoses + totalSecondDoses) * 100) / data.poblacion.personas,
    ).toString(),
    appliedDosesPercentage: totalReceivedDoses
      ? ((totalDoses * 100) / totalReceivedDoses).toFixed(2)
      : undefined,
  };
};

const accumulate = (a: number, b: number): number => a + b;
