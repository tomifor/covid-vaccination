import {population, VaccinationDto, VaccinationIndicators} from '../models/vaccination.model';
import {numberFormat} from './contants';

export const getIndicators = (data: VaccinationDto): VaccinationIndicators => {
  const totalFirstDoses = data.dosis1.reduce(accumulate);
  const totalSecondDoses = data.dosis2.reduce(accumulate);
  const totalDoses = totalFirstDoses + totalSecondDoses;

  return {
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
  };
};

const accumulate = (a: number, b: number): number => a + b;
