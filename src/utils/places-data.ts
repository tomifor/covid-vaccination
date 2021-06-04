import {Option} from '../models/options.model';

export interface Iterable {
  [key: string]: Option[];
}

export const provinces: Option[] = [{label: 'Buenos Aires', value: '6'}];

export const municipalities: Iterable = {
  '6': [{label: 'San Miguel', value: '399'}],
};
