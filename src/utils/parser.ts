import { population, VaccinationDto, VaccinationIndicators } from '../models/vaccination.model'


export const getIndicators = (data: VaccinationDto): VaccinationIndicators => {

  const totalFirstDoses = data.dosis1.reduce(accumulate)
  const totalSecondDoses = data.dosis2.reduce(accumulate)

  return {
    totalAppliedDoses: (totalFirstDoses + totalSecondDoses).toString(),
    totalAppliedFirstDoses: totalFirstDoses.toString(),
    totalAppliedSecondDoses: totalSecondDoses.toString(),
    populationPercentageVaccinatedFirstDose: (totalFirstDoses * 100 / data.poblacion.personas).toFixed(1),
    populationPercentageVaccinatedSecondDose: (totalSecondDoses * 100 / data.poblacion.personas).toFixed(1),
    totalPopulation: data.poblacion.personas.toString(),
    dosesAdministeredPer100: Math.floor(((totalFirstDoses + totalSecondDoses) * 100 / data.poblacion.personas)).toString(),
  }
}


const accumulate = (a: number, b: number): number => a + b
