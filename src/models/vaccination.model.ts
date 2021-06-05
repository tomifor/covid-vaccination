export interface VaccinationDto {
  fecha_inicial: string;
  dosis1: number[];
  dosis2: number[];
  dosisdistribuidas: number[];
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
  lastUpdate: string;
  totalAppliedDoses: string;
  totalAppliedFirstDoses: string;
  totalAppliedSecondDoses: string;
  populationPercentageVaccinatedFirstDose: string;
  populationPercentageVaccinatedSecondDose: string;
  totalPopulation: string;
  dosesAdministeredPer100: string;
  appliedDosesPercentage?: string;
}
