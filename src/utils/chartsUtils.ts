import {DailyAppliedDosesData} from '../models/chart.model';
import {VaccinationDto} from '../models/vaccination.model';
import moment from 'moment';

export const getDailyAppliedDoses = (data: VaccinationDto): DailyAppliedDosesData => {
  let doses1 = data.dosis1
    .map((d: number, index: number) => ({
      value: d,
      date: moment(data.fecha_inicial).add(index, 'day').format('DD/MM/yyyy'),
    }))
    .slice(360, data.dosis1.length);

  let doses2 = data.dosis2
    .map((d: number, index: number) => ({
      value: d,
      date: moment(data.fecha_inicial).add(index, 'day').format('DD/MM/yyyy'),
    }))
    .slice(360, data.dosis2.length);

  if (doses1[doses1.length - 1].value === 0 && doses2[doses2.length - 1].value === 0) {
    doses1 = doses1.slice(0, doses1.length - 1);
    doses2 = doses2.slice(0, doses2.length - 1);
  }

  return {
    doses1: doses1,
    doses2: doses2,
    totalDoses: doses1.map((dose1, index) => ({
      value: dose1.value + doses2[index].value,
      date: dose1.date,
    })),
  };
};
