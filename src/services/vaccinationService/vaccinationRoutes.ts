const BASE_URL = '/vacunadosargentina';

const getMunicipalityData = (province: string, municipality?: string) =>
  `${BASE_URL}?comprimido=1&provincias%5B%5D=${province}${
    municipality ? '&departamentos%5B%5D=' + municipality : ''
  }`;

const getArgentinaData = () => `${BASE_URL}?comprimido=1`;

const getAccumulatedRates = (date: string, province: string, department: string) =>
  `/tasas?desde=&fecha=${date}&sexo=${province ? '&provincias%5B%5D=' + province : ''}${
    department ? '&departamentos%5B%5D=' + department : ''
  }`;

export const vaccinationRoutes = {
  getMunicipalityData: (province: string, municipality?: string) =>
    getMunicipalityData(province, municipality),
  getArgentinaData: () => getArgentinaData(),
  getAccumulatedRates: (date: string, province: string, department: string) =>
    getAccumulatedRates(date, province, department),
};
