import {Option} from '../models/options.model';

export interface Iterable {
  [key: string]: Option[];
}

export const provinces: Option[] = [
  {label: 'Buenos Aires', value: '6'},
  {label: 'CABA', value: '2'},
  {label: 'Catamarca', value: '10'},
  {label: 'Chaco', value: '22'},
  {label: 'Chubut', value: '26'},
  {label: 'Córdoba', value: '14'},
  {label: 'Corrientes', value: '18'},
  {label: 'Corrientes', value: '18'},
  {label: 'Entre Rios', value: '30'},
  {label: 'Formosa', value: '34'},
  {label: 'Jujuy', value: '38'},
  {label: 'La pampa', value: '42'},
  {label: 'La Rioja', value: '46'},
  {label: 'Mendoza', value: '50'},
  {label: 'Misiones', value: '54'},
  {label: 'Neuquén', value: '58'},
  {label: 'Rio Negro', value: '62'},
  {label: 'Salta', value: '66'},
  {label: 'San Juan', value: '70'},
  {label: 'San Luis', value: '74'},
  {label: 'Santa Cruz', value: '78'},
  {label: 'Santa Fe', value: '82'},
  {label: 'Santiago del Estero', value: '86'},
  {label: 'Tierra del Fuego', value: '94'},
  {label: 'Tucumán', value: '90'},
];

export const municipalities: Iterable = {
  '6': [{label: 'San Miguel', value: '399'}],
};
