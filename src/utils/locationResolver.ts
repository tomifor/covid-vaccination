import {municipalities, provinces} from '../data/places-data';
import {LocationOption} from '../models/location.model';

export const resolveLocation = (
  provinceId: string,
  municipalityId: string,
): LocationOption | undefined => {
  if (!provinceId && !municipalityId) return;

  let province;

  if (provinceId) {
    province = provinces.find((p) => p.value === provinceId);
  }

  if (!province) return;

  if (municipalityId) {
    const provinceMunicipalities = municipalities[provinceId];

    if (!provinceMunicipalities) return;

    const municipality = provinceMunicipalities.find((m) => m.value.toString() === municipalityId);

    return {province: province, municipality: municipality};
  } else {
    return {province: province, municipality: undefined};
  }
};
