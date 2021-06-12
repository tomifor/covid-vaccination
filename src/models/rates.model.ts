export interface Rates {
  casos: number;
  casos_con_dx: number;
  casos_con_dx_fis: number;
  dias_diagnostico_apertura: number;
  dias_diagnostico_sintomas: number;
  dias_fallecidos_diagnostico: number;
  dias_fallecidos_sintomas: number;
  dosis1: number;
  dosis2: number;
  fallecidos: number;
  fallecidos_con_dx: number;
  fallecidos_con_fis: number;
  personas: number;
  rango: number;
  sexo: Gender;
}

export enum Gender {
  Male = 'M',
  Female = 'F',
  NoData = 'NR',
}

export interface Iterable {
  [key: number]: string;
}

export const AgeRange: Iterable = {
  0: '0-9',
  1: '10-19',
  2: '20-29',
  3: '30-39',
  4: '40-49',
  5: '50-59',
  6: '60-69',
  7: '70-79',
  8: '80-89',
  9: '+90',
};
