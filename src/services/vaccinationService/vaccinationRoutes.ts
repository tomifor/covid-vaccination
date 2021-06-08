const BASE_URL = '/vacunadosargentina';

const getMunicipalityData = (province: string, municipality?: string) =>
  `${BASE_URL}?comprimido=1&provincias%5B%5D=${province}${
    municipality ? '&departamentos%5B%5D=' + municipality : ''
  }`;

const getArgentinaData = () => `${BASE_URL}?comprimido=1`;

export const vaccinationRoutes = {
  getMunicipalityData: (province: string, municipality?: string) =>
    getMunicipalityData(province, municipality),
  getArgentinaData: () => getArgentinaData(),
};
