export interface VaccinationDto {
  fecha_inicial: string;
  dosis1: number[];
  dosis2: number[];
  dias: number;
  poblacion: population;
  microdato: boolean;
}

export interface population {
  personas: number;
  varones: number;
  mujeres: number;
  fuente: string;
  link: string;
}

export interface VaccinationIndicators {
  totalAppliedDoses: string;
  totalAppliedFirstDoses: string;
  totalAppliedSecondDoses: string;
  populationPercentageVaccinatedFirstDose: string;
  populationPercentageVaccinatedSecondDose: string;
  totalPopulation: string;
  dosesAdministeredPer100: string;
}
