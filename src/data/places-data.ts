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
  '90': [
    {
      value: 6487,
      label: 'Burruyacú',
    },
    {
      value: 387,
      label: 'Capital',
    },
    {
      value: 1099,
      label: 'Chicligasta',
    },
    {
      value: 1025,
      label: 'Cruz Alta',
    },
    {
      value: 8161,
      label: 'Famaillá',
    },
    {
      value: 65486,
      label: 'Graneros',
    },
    {
      value: 15255,
      label: 'Juan Bautista Alberdi',
    },
    {
      value: 10661,
      label: 'La Cocha',
    },
    {
      value: 51894,
      label: 'Leales',
    },
    {
      value: 5299,
      label: 'Lules',
    },
    {
      value: 5057,
      label: 'Monteros',
    },
    {
      value: 5917,
      label: 'Río Chico',
    },
    {
      value: 15443,
      label: 'Simoca',
    },
    {
      value: 14921,
      label: 'Tafí del Valle',
    },
    {
      value: 385,
      label: 'Tafí Viejo',
    },
    {
      value: 54584,
      label: 'Trancas',
    },
    {
      value: 381,
      label: 'Yerba Buena',
    },
  ],
  '94': [
    {
      value: 17952546,
      label: 'Antártida Argentina',
    },
    {
      value: 17952547,
      label: 'Islas del Atlántico Sur',
    },
    {
      value: 219,
      label: 'Río Grande',
    },
    {
      value: 53,
      label: 'Ushuaia',
    },
  ],
  '86': [
    {
      value: 89302,
      label: 'Aguirre',
    },
    {
      value: 14519,
      label: 'Alberdi',
    },
    {
      value: 181270,
      label: 'Atamisqui',
    },
    {
      value: 73402,
      label: 'Avellaneda',
    },
    {
      value: 11897,
      label: 'Banda',
    },
    {
      value: 8835,
      label: 'Belgrano',
    },
    {
      value: 725,
      label: 'Capital',
    },
    {
      value: 43932,
      label: 'Choya',
    },
    {
      value: 72868,
      label: 'Copo',
    },
    {
      value: 103284,
      label: 'Figueroa',
    },
    {
      value: 14459,
      label: 'General Taboada',
    },
    {
      value: 162808,
      label: 'Guasayán',
    },
    {
      value: 48168,
      label: 'Jiménez',
    },
    {
      value: 55444,
      label: 'Juan F. Ibarra',
    },
    {
      value: 140716,
      label: 'Loreto',
    },
    {
      value: 12316934,
      label: 'Mitre',
    },
    {
      value: 14515,
      label: 'Moreno',
    },
    {
      value: 5313,
      label: 'Ojo de Agua',
    },
    {
      value: 59964,
      label: 'Pellegrini',
    },
    {
      value: 11909,
      label: 'Quebrachos',
    },
    {
      value: 9175,
      label: 'Río Hondo',
    },
    {
      value: 1379,
      label: 'Rivadavia',
    },
    {
      value: 8805,
      label: 'Robles',
    },
    {
      value: 110650,
      label: 'Salavina',
    },
    {
      value: 110486,
      label: 'San Martín',
    },
    {
      value: 129680,
      label: 'Sarmiento',
    },
    {
      value: 132906,
      label: 'Silípica',
    },
  ],
  '82': [
    {
      value: 13149,
      label: '9 de Julio',
    },
    {
      value: 5691,
      label: 'Belgrano',
    },
    {
      value: 8327,
      label: 'Caseros',
    },
    {
      value: 5093,
      label: 'Castellanos',
    },
    {
      value: 5655,
      label: 'Constitución',
    },
    {
      value: 6341,
      label: 'Garay',
    },
    {
      value: 583,
      label: 'General López',
    },
    {
      value: 5225,
      label: 'General Obligado',
    },
    {
      value: 8319,
      label: 'Iriondo',
    },
    {
      value: 81,
      label: 'La Capital',
    },
    {
      value: 467,
      label: 'Las Colonias',
    },
    {
      value: 129,
      label: 'Rosario',
    },
    {
      value: 8169,
      label: 'San Cristóbal',
    },
    {
      value: 5121,
      label: 'San Javier',
    },
    {
      value: 6119,
      label: 'San Jerónimo',
    },
    {
      value: 9607,
      label: 'San Justo',
    },
    {
      value: 6055,
      label: 'San Lorenzo',
    },
    {
      value: 5679,
      label: 'San Martín',
    },
    {
      value: 9635,
      label: 'Vera',
    },
  ],
  '78': [
    {
      value: 287,
      label: 'Corpen Aike',
    },
    {
      value: 1557,
      label: 'Deseado',
    },
    {
      value: 7927,
      label: 'Güer Aike',
    },
    {
      value: 1069,
      label: 'Lago Argentino',
    },
    {
      value: 5599,
      label: 'Lago Buenos Aires',
    },
    {
      value: 5981,
      label: 'Magallanes',
    },
    {
      value: 14097,
      label: 'Río Chico',
    },
  ],
  '74': [
    {
      value: 42014,
      label: 'Ayacucho',
    },
    {
      value: 36218,
      label: 'Belgrano',
    },
    {
      value: 11437,
      label: 'Chacabuco',
    },
    {
      value: 36148,
      label: 'Coronel Pringles',
    },
    {
      value: 1127,
      label: 'General Pedernera',
    },
    {
      value: 7117,
      label: 'Gobernador Dupuy',
    },
    {
      value: 11891,
      label: 'Junín',
    },
    {
      value: 227,
      label: 'La Capital',
    },
    {
      value: 45032,
      label: 'Libertador General San Martín',
    },
  ],
  '70': [
    {
      value: 48380,
      label: '25 de Mayo',
    },
    {
      value: 87310,
      label: '9 de Julio',
    },
    {
      value: 36200,
      label: 'Albardón',
    },
    {
      value: 47158,
      label: 'Angaco',
    },
    {
      value: 107320,
      label: 'Calingasta',
    },
    {
      value: 7103,
      label: 'Capital',
    },
    {
      value: 5605,
      label: 'Caucete',
    },
    {
      value: 15501,
      label: 'Chimbas',
    },
    {
      value: 268530,
      label: 'Iglesia',
    },
    {
      value: 36968,
      label: 'Jáchal',
    },
    {
      value: 663,
      label: 'Pocito',
    },
    {
      value: 817,
      label: 'Rawson',
    },
    {
      value: 279,
      label: 'Rivadavia',
    },
    {
      value: 47196,
      label: 'San Martín',
    },
    {
      value: 47212,
      label: 'Santa Lucía',
    },
    {
      value: 7617,
      label: 'Sarmiento',
    },
    {
      value: 12285,
      label: 'Ullúm',
    },
    {
      value: 62310,
      label: 'Valle Fértil',
    },
    {
      value: 11543,
      label: 'Zonda',
    },
  ],
  '66': [
    {
      value: 17803,
      label: 'Anta',
    },
    {
      value: 118064,
      label: 'Cachi',
    },
    {
      value: 853,
      label: 'Cafayate',
    },
    {
      value: 521,
      label: 'Capital',
    },
    {
      value: 5151,
      label: 'Cerrillos ',
    },
    {
      value: 45158,
      label: 'Chicoana',
    },
    {
      value: 8707,
      label: 'General Güemes',
    },
    {
      value: 1223,
      label: 'Grl. José de San Martín',
    },
    {
      value: 17952543,
      label: 'Guachipas',
    },
    {
      value: 58518,
      label: 'Iruya',
    },
    {
      value: 38550,
      label: 'La Caldera',
    },
    {
      value: 17952544,
      label: 'La Candelaria',
    },
    {
      value: 17952545,
      label: 'La Poma',
    },
    {
      value: 145388,
      label: 'La Viña',
    },
    {
      value: 130344,
      label: 'Los Andes',
    },
    {
      value: 5399,
      label: 'Metán',
    },
    {
      value: 16335,
      label: 'Molinos',
    },
    {
      value: 5483,
      label: 'Orán',
    },
    {
      value: 13857,
      label: 'Rivadavia',
    },
    {
      value: 10849,
      label: 'Rosario de la Frontera',
    },
    {
      value: 6547,
      label: 'Rosario de Lerma',
    },
    {
      value: 117272,
      label: 'San Carlos',
    },
    {
      value: 60072,
      label: 'Santa Victoria',
    },
  ],
  '62': [
    {
      value: 61994,
      label: '25 de Mayo',
    },
    {
      value: 2201792,
      label: '9 de Julio',
    },
    {
      value: 193,
      label: 'Adolfo Alsina',
    },
    {
      value: 11141,
      label: 'Avellaneda',
    },
    {
      value: 641,
      label: 'Bariloche',
    },
    {
      value: 40622,
      label: 'Conesa',
    },
    {
      value: 74232,
      label: 'El Cuy',
    },
    {
      value: 277,
      label: 'General Roca',
    },
    {
      value: 17952542,
      label: 'Ñorquincó',
    },
    {
      value: 17869,
      label: 'Pichi Mahuida',
    },
    {
      value: 14339,
      label: 'Pilcaniyeu',
    },
    {
      value: 9235,
      label: 'San Antonio',
    },
    {
      value: 73696,
      label: 'Valcheta',
    },
  ],
  '58': [
    {
      value: 6011,
      label: 'Aluminé',
    },
    {
      value: 48670,
      label: 'Añelo',
    },
    {
      value: 80100,
      label: 'Catán Lil',
    },
    {
      value: 8721,
      label: 'Chos Malal',
    },
    {
      value: 4913,
      label: 'Collón Curá',
    },
    {
      value: 417,
      label: 'Confluencia',
    },
    {
      value: 38518,
      label: 'Huiliches',
    },
    {
      value: 1343,
      label: 'Lácar',
    },
    {
      value: 39778,
      label: 'Loncopué',
    },
    {
      value: 14367,
      label: 'Los Lagos',
    },
    {
      value: 12437,
      label: 'Minas',
    },
    {
      value: 37516,
      label: 'Ñorquín',
    },
    {
      value: 10737,
      label: 'Pehuenches',
    },
    {
      value: 7881,
      label: 'Picunches',
    },
    {
      value: 14481,
      label: 'Picún Leufú',
    },
    {
      value: 7045,
      label: 'Zapala ',
    },
  ],
  '54': [
    {
      value: 64996,
      label: '25 de Mayo',
    },
    {
      value: 69484,
      label: 'Apóstoles',
    },
    {
      value: 103566,
      label: 'Cainguás',
    },
    {
      value: 6109,
      label: 'Candelaria',
    },
    {
      value: 4851,
      label: 'Capital',
    },
    {
      value: 2868944,
      label: 'Concepción',
    },
    {
      value: 7587,
      label: 'Eldorado',
    },
    {
      value: 64886,
      label: 'General Manuel Belgrano',
    },
    {
      value: 73362,
      label: 'Guaraní',
    },
    {
      value: 6539,
      label: 'Iguazú',
    },
    {
      value: 6977,
      label: 'Leandro N. Alem',
    },
    {
      value: 45800,
      label: 'Libertador Grl. San Martín',
    },
    {
      value: 73614,
      label: 'Montecarlo',
    },
    {
      value: 6731,
      label: 'Oberá',
    },
    {
      value: 15507,
      label: 'San Ignacio',
    },
    {
      value: 66216,
      label: 'San Javier',
    },
    {
      value: 66840,
      label: 'San Pedro',
    },
  ],
  '50': [
    {
      value: 275,
      label: 'Capital',
    },
    {
      value: 9281,
      label: 'General Alvear',
    },
    {
      value: 41,
      label: 'Godoy Cruz',
    },
    {
      value: 307,
      label: 'Guaymallén',
    },
    {
      value: 37676,
      label: 'Junín',
    },
    {
      value: 40464,
      label: 'La Paz',
    },
    {
      value: 1037,
      label: 'Las Heras',
    },
    {
      value: 5793,
      label: 'Lavalle',
    },
    {
      value: 297,
      label: 'Luján de Cuyo',
    },
    {
      value: 5237,
      label: 'Maipú',
    },
    {
      value: 6281,
      label: 'Malargüe',
    },
    {
      value: 38506,
      label: 'Rivadavia',
    },
    {
      value: 5071,
      label: 'San Carlos',
    },
    {
      value: 1567,
      label: 'San Martín',
    },
    {
      value: 141,
      label: 'San Rafael',
    },
    {
      value: 73256,
      label: 'Santa Rosa',
    },
    {
      value: 43961258,
      label: 'Temp',
    },
    {
      value: 11465,
      label: 'Tunuyán',
    },
    {
      value: 8357,
      label: 'Tupungato',
    },
  ],
  '46': [
    {
      value: 50590,
      label: 'Arauco',
    },
    {
      value: 151,
      label: 'Capital',
    },
    {
      value: 70350,
      label: 'Castro Barros',
    },
    {
      value: 39726,
      label: 'Chamical ',
    },
    {
      value: 9303,
      label: 'Chilecito ',
    },
    {
      value: 55680,
      label: 'Coronel Felipe Varela',
    },
    {
      value: 43764,
      label: 'Famatina ',
    },
    {
      value: 53922,
      label: 'General Angel V. Peñaloza',
    },
    {
      value: 61370,
      label: 'General Belgrano',
    },
    {
      value: 44538,
      label: 'General Juan F. Quiroga',
    },
    {
      value: 114212,
      label: 'General Lamadrid',
    },
    {
      value: 101196,
      label: 'General Ocampo',
    },
    {
      value: 126278,
      label: 'General San Martín',
    },
    {
      value: 101248,
      label: 'Independencia',
    },
    {
      value: 44398,
      label: 'Rosario Vera Peñaloza',
    },
    {
      value: 9945,
      label: 'Sanagasta',
    },
    {
      value: 44414,
      label: 'San Blas de los Sauces',
    },
    {
      value: 155006,
      label: 'Vinchina',
    },
  ],
  '42': [
    {
      value: 48978,
      label: 'Atreucó',
    },
    {
      value: 119630,
      label: 'Caleu Caleu',
    },
    {
      value: 451,
      label: 'Capital',
    },
    {
      value: 8329,
      label: 'Catriló',
    },
    {
      value: 7769,
      label: 'Chalileo',
    },
    {
      value: 1217,
      label: 'Chapaleufú',
    },
    {
      value: 17952539,
      label: 'Chical Co',
    },
    {
      value: 72248,
      label: 'Conhelo',
    },
    {
      value: 1862548,
      label: 'Curacó',
    },
    {
      value: 119460,
      label: 'Guatraché',
    },
    {
      value: 40024,
      label: 'Hucal',
    },
    {
      value: 17952540,
      label: 'Lihuel Calel',
    },
    {
      value: 17952541,
      label: 'Limay Mahuida',
    },
    {
      value: 88262,
      label: 'Loventué',
    },
    {
      value: 7737,
      label: 'Maracó',
    },
    {
      value: 54320,
      label: 'Puelén',
    },
    {
      value: 517,
      label: 'Quemú Quemú',
    },
    {
      value: 38482,
      label: 'Rancul',
    },
    {
      value: 7719,
      label: 'Realicó',
    },
    {
      value: 17409,
      label: 'Toay',
    },
    {
      value: 165226,
      label: 'Trenel',
    },
    {
      value: 49298,
      label: 'Utracán',
    },
  ],
  '38': [
    {
      value: 16951,
      label: 'Campana',
    },
    {
      value: 15465,
      label: 'Cochinoca',
    },
    {
      value: 9122950,
      label: 'Coronel de Marina L. Rosales',
    },
    {
      value: 759,
      label: 'Dr. Manuel Belgrano',
    },
    {
      value: 5857,
      label: 'El Carmen',
    },
    {
      value: 13459784,
      label: 'Ezeiza',
    },
    {
      value: 261440,
      label: 'General Guido',
    },
    {
      value: 38384,
      label: 'Humahuaca',
    },
    {
      value: 15305960,
      label: 'Hurlingham',
    },
    {
      value: 12213,
      label: 'Ledesma',
    },
    {
      value: 5039,
      label: 'Palpalá ',
    },
    {
      value: 42423883,
      label: 'Pehuajó',
    },
    {
      value: 3224446,
      label: 'Rinconada',
    },
    {
      value: 11171,
      label: 'San Antonio',
    },
    {
      value: 15637,
      label: 'San Pedro',
    },
    {
      value: 45564,
      label: 'Santa Bárbara',
    },
    {
      value: 69480,
      label: 'Santa Catalina',
    },
    {
      value: 58422,
      label: 'Susques',
    },
    {
      value: 8935,
      label: 'Tilcara',
    },
    {
      value: 56248,
      label: 'Tumbaya',
    },
    {
      value: 124142,
      label: 'Valle Grande',
    },
    {
      value: 15449,
      label: 'Yavi',
    },
  ],
  '34': [
    {
      value: 64082,
      label: 'Bermejo',
    },
    {
      value: 123,
      label: 'Formosa',
    },
    {
      value: 15257,
      label: 'Laishi',
    },
    {
      value: 93638,
      label: 'Matacos',
    },
    {
      value: 47356,
      label: 'Patiño',
    },
    {
      value: 47202,
      label: 'Pilagás',
    },
    {
      value: 57,
      label: 'Pilcomayo',
    },
    {
      value: 15683,
      label: 'Pirané',
    },
    {
      value: 234982,
      label: 'Ramón Lista',
    },
  ],
  '30': [
    {
      value: 7159,
      label: 'Colón',
    },
    {
      value: 145,
      label: 'Concordia',
    },
    {
      value: 5831,
      label: 'Diamante',
    },
    {
      value: 6403,
      label: 'Federación',
    },
    {
      value: 134272,
      label: 'Federal',
    },
    {
      value: 157150,
      label: 'Feliciano',
    },
    {
      value: 375,
      label: 'Gualeguay',
    },
    {
      value: 4863,
      label: 'Gualeguaychú',
    },
    {
      value: 13607,
      label: 'Islas del Ibicuy',
    },
    {
      value: 8609,
      label: 'La Paz',
    },
    {
      value: 7705,
      label: 'Nogoyá',
    },
    {
      value: 333,
      label: 'Paraná',
    },
    {
      value: 106352,
      label: 'San Salvador',
    },
    {
      value: 5283,
      label: 'Tala',
    },
    {
      value: 573,
      label: 'Uruguay',
    },
    {
      value: 8791,
      label: 'Victoria',
    },
    {
      value: 8051,
      label: 'Villaguay',
    },
  ],
  '18': [
    {
      value: 9041,
      label: 'Bella Vista',
    },
    {
      value: 81546,
      label: 'Berón de Astrada',
    },
    {
      value: 79,
      label: 'Capital',
    },
    {
      value: 54816,
      label: 'Concepción',
    },
    {
      value: 38090,
      label: 'Curuzú Cuatiá',
    },
    {
      value: 5827,
      label: 'Empedrado',
    },
    {
      value: 15829,
      label: 'Esquina',
    },
    {
      value: 38362,
      label: 'General Alvear',
    },
    {
      value: 1059,
      label: 'General Paz',
    },
    {
      value: 1359,
      label: 'Goya',
    },
    {
      value: 68476,
      label: 'Itatí',
    },
    {
      value: 555,
      label: 'Ituzaingó',
    },
    {
      value: 7857,
      label: 'Lavalle',
    },
    {
      value: 46938,
      label: 'Mburucuyá',
    },
    {
      value: 5797,
      label: 'Mercedes',
    },
    {
      value: 8713,
      label: 'Monte Caseros',
    },
    {
      value: 8269,
      label: 'Paso de los Libres',
    },
    {
      value: 1047,
      label: 'Saladas',
    },
    {
      value: 13245,
      label: 'San Cosme',
    },
    {
      value: 12987,
      label: 'San Luis del Palmar',
    },
    {
      value: 130246,
      label: 'San Martín',
    },
    {
      value: 109892,
      label: 'San Miguel',
    },
    {
      value: 8247,
      label: 'San Roque',
    },
    {
      value: 1053,
      label: 'Santo Tomé',
    },
    {
      value: 43172,
      label: 'Sauce',
    },
  ],
  '14': [
    {
      value: 821,
      label: 'Calamuchita',
    },
    {
      value: 209,
      label: 'Capital',
    },
    {
      value: 233,
      label: 'Colón',
    },
    {
      value: 509,
      label: 'Cruz del Eje',
    },
    {
      value: 9427,
      label: 'General Roca',
    },
    {
      value: 1285,
      label: 'General San Martín',
    },
    {
      value: 875,
      label: 'Ischilín',
    },
    {
      value: 5985,
      label: 'Juárez Celman',
    },
    {
      value: 5141,
      label: 'Marcos Juárez',
    },
    {
      value: 48364,
      label: 'Minas',
    },
    {
      value: 83500,
      label: 'Pocho',
    },
    {
      value: 519,
      label: 'Presidente Roque Sáenz Peña',
    },
    {
      value: 525,
      label: 'Punilla',
    },
    {
      value: 35,
      label: 'Río Cuarto',
    },
    {
      value: 9459,
      label: 'Río Primero',
    },
    {
      value: 12925,
      label: 'Río Seco',
    },
    {
      value: 365,
      label: 'Río Segundo',
    },
    {
      value: 6625,
      label: 'San Alberto',
    },
    {
      value: 5317,
      label: 'San Javier',
    },
    {
      value: 101,
      label: 'San Justo',
    },
    {
      value: 569,
      label: 'Santa María',
    },
    {
      value: 214772,
      label: 'Sobremonte',
    },
    {
      value: 61,
      label: 'Tercero Arriba',
    },
    {
      value: 1297,
      label: 'Totoral',
    },
    {
      value: 13175,
      label: 'Tulumba',
    },
    {
      value: 225,
      label: 'Unión',
    },
  ],
  '26': [
    {
      value: 6151,
      label: 'Biedma',
    },
    {
      value: 6397,
      label: 'Cushamen',
    },
    {
      value: 5001,
      label: 'Escalante',
    },
    {
      value: 17270410,
      label: 'Florentino Ameghino',
    },
    {
      value: 9161,
      label: 'Futaleufú',
    },
    {
      value: 80446,
      label: 'Gaiman',
    },
    {
      value: 17952536,
      label: 'Gastre',
    },
    {
      value: 17952537,
      label: 'Languiñeo',
    },
    {
      value: 17952538,
      label: 'Mártires',
    },
    {
      value: 16611864,
      label: 'Paso de Indios',
    },
    {
      value: 487,
      label: 'Rawson',
    },
    {
      value: 38896,
      label: 'Río Senguer',
    },
    {
      value: 9849,
      label: 'Sarmiento ',
    },
    {
      value: 6223,
      label: 'Tehuelches',
    },
    {
      value: 81930,
      label: 'Telsen',
    },
  ],
  '22': [
    {
      value: 8257,
      label: '12 de Octubre',
    },
    {
      value: 5345,
      label: '1º de Mayo',
    },
    {
      value: 49464,
      label: '25 de Mayo',
    },
    {
      value: 5767,
      label: '2 de Abril',
    },
    {
      value: 12241,
      label: '9 de Julio',
    },
    {
      value: 5167,
      label: 'Almirante Brown',
    },
    {
      value: 5697,
      label: 'Bermejo',
    },
    {
      value: 6183,
      label: 'Chacabuco',
    },
    {
      value: 811,
      label: 'Comandante Fernández',
    },
    {
      value: 16855,
      label: 'Fray Justo Santa María de Oro',
    },
    {
      value: 9741,
      label: 'General Belgrano',
    },
    {
      value: 799,
      label: 'General Donovan',
    },
    {
      value: 6419,
      label: 'General Güemes',
    },
    {
      value: 9335,
      label: 'Independencia',
    },
    {
      value: 8439,
      label: 'Libertad',
    },
    {
      value: 1185,
      label: 'Libertador General San Martín',
    },
    {
      value: 5173,
      label: 'Maipú',
    },
    {
      value: 5065,
      label: 'Mayor Luis J. Fontana',
    },
    {
      value: 92630,
      label: "O'Higgins",
    },
    {
      value: 12043,
      label: 'Presidencia de la Plaza',
    },
    {
      value: 9501,
      label: 'Quitilipi',
    },
    {
      value: 195,
      label: 'San Fernando',
    },
    {
      value: 16349,
      label: 'San Lorenzo',
    },
    {
      value: 7843,
      label: 'Sargento Cabral',
    },
    {
      value: 86454,
      label: 'Tapenagá',
    },
  ],
  '6': [
    {
      value: 13613,
      label: '25 de Mayo',
    },
    {
      value: 5077,
      label: '9 de Julio',
    },
    {
      value: 54244,
      label: 'Adolfo Alsina',
    },
    {
      value: 37456,
      label: 'Adolfo Gonzales Chaves',
    },
    {
      value: 7487,
      label: 'Alberti',
    },
    {
      value: 85,
      label: 'Almirante Brown',
    },
    {
      value: 9273,
      label: 'Arrecifes',
    },
    {
      value: 75,
      label: 'Avellaneda',
    },
    {
      value: 5037,
      label: 'Ayacucho',
    },
    {
      value: 5263,
      label: 'Azul',
    },
    {
      value: 345,
      label: 'Bahía Blanca',
    },
    {
      value: 1211,
      label: 'Balcarce',
    },
    {
      value: 6921,
      label: 'Baradero',
    },
    {
      value: 17239,
      label: 'Benito Juárez',
    },
    {
      value: 103,
      label: 'Berazategui',
    },
    {
      value: 5885,
      label: 'Berisso',
    },
    {
      value: 6803,
      label: 'Bolívar',
    },
    {
      value: 5097,
      label: 'Bragado',
    },
    {
      value: 927,
      label: 'Brandsen',
    },
    {
      value: 321,
      label: 'Campana',
    },
    {
      value: 199,
      label: 'Cañuelas',
    },
    {
      value: 7457,
      label: 'Capitán Sarmiento',
    },
    {
      value: 13703,
      label: 'Carlos Casares',
    },
    {
      value: 47664,
      label: 'Carlos Tejedor',
    },
    {
      value: 5029,
      label: 'Carmen de Areco',
    },
    {
      value: 625,
      label: 'Castelli',
    },
    {
      value: 215,
      label: 'Chacabuco',
    },
    {
      value: 13443,
      label: 'Chascomús',
    },
    {
      value: 363,
      label: 'Chivilcoy',
    },
    {
      value: 6689,
      label: 'Colón',
    },
    {
      value: 12945,
      label: 'Coronel de Marina L. Rosales',
    },
    {
      value: 8691,
      label: 'Coronel Dorrego',
    },
    {
      value: 5755,
      label: 'Coronel Pringles',
    },
    {
      value: 41486,
      label: 'Coronel Suárez',
    },
    {
      value: 42688,
      label: 'Daireaux',
    },
    {
      value: 5327,
      label: 'Dolores',
    },
    {
      value: 7947,
      label: 'Ensenada',
    },
    {
      value: 55,
      label: 'Escobar',
    },
    {
      value: 217,
      label: 'Esteban Echeverría',
    },
    {
      value: 9825,
      label: 'Exaltación de la Cruz',
    },
    {
      value: 331,
      label: 'Ezeiza',
    },
    {
      value: 15,
      label: 'Florencio Varela',
    },
    {
      value: 16107,
      label: 'Florentino Ameghino',
    },
    {
      value: 5497,
      label: 'General Alvarado',
    },
    {
      value: 99222,
      label: 'General Alvear',
    },
    {
      value: 49150,
      label: 'General Arenales',
    },
    {
      value: 11755,
      label: 'General Belgrano',
    },
    {
      value: 53026,
      label: 'General Guido',
    },
    {
      value: 11087,
      label: 'General Juan Madariaga',
    },
    {
      value: 14947,
      label: 'General La Madrid',
    },
    {
      value: 9465,
      label: 'General Las Heras',
    },
    {
      value: 98498,
      label: 'General Lavalle',
    },
    {
      value: 1029,
      label: 'General Paz',
    },
    {
      value: 42412,
      label: 'General Pinto',
    },
    {
      value: 67,
      label: 'General Pueyrredón',
    },
    {
      value: 681,
      label: 'General Rodríguez',
    },
    {
      value: 191,
      label: 'General San Martín',
    },
    {
      value: 17737,
      label: 'General Viamonte',
    },
    {
      value: 5079,
      label: 'General Villegas',
    },
    {
      value: 5041,
      label: 'Guaminí',
    },
    {
      value: 10655,
      label: 'Hipólito Yrigoyen',
    },
    {
      value: 5523,
      label: 'Hurlingham',
    },
    {
      value: 69,
      label: 'Ituzaingó',
    },
    {
      value: 501,
      label: 'José C. Paz',
    },
    {
      value: 1311,
      label: 'Junín',
    },
    {
      value: 5719,
      label: 'La Costa',
    },
    {
      value: 169,
      label: 'La Matanza',
    },
    {
      value: 237,
      label: 'Lanús',
    },
    {
      value: 31,
      label: 'La Plata',
    },
    {
      value: 70008,
      label: 'Laprida',
    },
    {
      value: 67090,
      label: 'Las Flores',
    },
    {
      value: 7013,
      label: 'Leandro N. Alem',
    },
    {
      value: 17952548,
      label: 'Lezama',
    },
    {
      value: 16135,
      label: 'Lincoln',
    },
    {
      value: 9173,
      label: 'Lobería',
    },
    {
      value: 4961,
      label: 'Lobos',
    },
    {
      value: 89,
      label: 'Lomas de Zamora',
    },
    {
      value: 435,
      label: 'Luján',
    },
    {
      value: 13141,
      label: 'Magdalena',
    },
    {
      value: 6217,
      label: 'Maipú',
    },
    {
      value: 127,
      label: 'Malvinas Argentinas',
    },
    {
      value: 5715,
      label: 'Mar Chiquita',
    },
    {
      value: 8131,
      label: 'Marcos Paz',
    },
    {
      value: 533,
      label: 'Mercedes',
    },
    {
      value: 207,
      label: 'Merlo',
    },
    {
      value: 465,
      label: 'Monte',
    },
    {
      value: 11689,
      label: 'Monte Hermoso',
    },
    {
      value: 933,
      label: 'Moreno',
    },
    {
      value: 547,
      label: 'Morón',
    },
    {
      value: 39558,
      label: 'Navarro',
    },
    {
      value: 5471,
      label: 'Necochea',
    },
    {
      value: 119,
      label: 'Olavarría',
    },
    {
      value: 38760,
      label: 'Patagones',
    },
    {
      value: 10795,
      label: 'Pehuajó',
    },
    {
      value: 75164,
      label: 'Pellegrini',
    },
    {
      value: 27,
      label: 'Pergamino',
    },
    {
      value: 6073,
      label: 'Pila',
    },
    {
      value: 249,
      label: 'Pilar',
    },
    {
      value: 14853,
      label: 'Pinamar ',
    },
    {
      value: 1125,
      label: 'Presidente Perón',
    },
    {
      value: 7081,
      label: 'Puán',
    },
    {
      value: 327,
      label: 'Punta Indio',
    },
    {
      value: 39,
      label: 'Quilmes',
    },
    {
      value: 9769,
      label: 'Ramallo',
    },
    {
      value: 173,
      label: 'Rauch',
    },
    {
      value: 10227,
      label: 'Rivadavia',
    },
    {
      value: 5549,
      label: 'Rojas',
    },
    {
      value: 7121,
      label: 'Roque Pérez',
    },
    {
      value: 17491,
      label: 'Saavedra',
    },
    {
      value: 40074,
      label: 'Saladillo',
    },
    {
      value: 64430,
      label: 'Salliqueló',
    },
    {
      value: 495,
      label: 'Salto',
    },
    {
      value: 969,
      label: 'San Andrés de Giles',
    },
    {
      value: 4917,
      label: 'San Antonio de Areco',
    },
    {
      value: 6085,
      label: 'San Cayetano',
    },
    {
      value: 71,
      label: 'San Fernando',
    },
    {
      value: 47,
      label: 'San Isidro',
    },
    {
      value: 399,
      label: 'San Miguel',
    },
    {
      value: 1517,
      label: 'San Nicolás',
    },
    {
      value: 4897,
      label: 'San Pedro',
    },
    {
      value: 5571,
      label: 'San Vicente',
    },
    {
      value: 17945,
      label: 'Suipacha',
    },
    {
      value: 283,
      label: 'Tandil',
    },
    {
      value: 62430,
      label: 'Tapalqué',
    },
    {
      value: 91,
      label: 'Tigre',
    },
    {
      value: 16605036,
      label: 'Tordillo',
    },
    {
      value: 37352,
      label: 'Tornquist',
    },
    {
      value: 11623,
      label: 'Trenque Lauquen',
    },
    {
      value: 16459,
      label: 'Tres Arroyos',
    },
    {
      value: 111,
      label: 'Tres de Febrero',
    },
    {
      value: 52088,
      label: 'Tres Lomas',
    },
    {
      value: 77,
      label: 'Vicente López',
    },
    {
      value: 653,
      label: 'Villa Gesell',
    },
    {
      value: 37606,
      label: 'Villarino',
    },
    {
      value: 163,
      label: 'Zárate ',
    },
  ],
  '2': [
    {
      value: 87,
      label: 'COMUNA 01',
    },
    {
      value: 95,
      label: 'COMUNA 02',
    },
    {
      value: 49,
      label: 'COMUNA 03',
    },
    {
      value: 73,
      label: 'COMUNA 04',
    },
    {
      value: 135,
      label: 'COMUNA 05',
    },
    {
      value: 639,
      label: 'COMUNA 06',
    },
    {
      value: 157,
      label: 'COMUNA 07',
    },
    {
      value: 455,
      label: 'COMUNA 08',
    },
    {
      value: 97,
      label: 'COMUNA 09',
    },
    {
      value: 177,
      label: 'COMUNA 10',
    },
    {
      value: 37,
      label: 'COMUNA 11',
    },
    {
      value: 29,
      label: 'COMUNA 12',
    },
    {
      value: 137,
      label: 'COMUNA 13',
    },
    {
      value: 99,
      label: 'COMUNA 14',
    },
    {
      value: 105,
      label: 'COMUNA 15',
    },
  ],
  '10': [
    {
      value: 242670,
      label: 'Ambato',
    },
    {
      value: 9129314,
      label: 'Ancasti',
    },
    {
      value: 8311,
      label: 'Andalgalá',
    },
    {
      value: 246080,
      label: 'Antofagasta de la Sierra',
    },
    {
      value: 41758,
      label: 'Belén',
    },
    {
      value: 48828,
      label: 'Capayán',
    },
    {
      value: 473,
      label: 'Capital',
    },
    {
      value: 109774,
      label: 'El Alto',
    },
    {
      value: 41782,
      label: 'Fray Mamerto Esquiú',
    },
    {
      value: 11655,
      label: 'La Paz',
    },
    {
      value: 55194,
      label: 'Paclín',
    },
    {
      value: 105712,
      label: 'Pomán',
    },
    {
      value: 14413,
      label: 'Santa María',
    },
    {
      value: 41866,
      label: 'Santa Rosa',
    },
    {
      value: 11649,
      label: 'Tinogasta',
    },
    {
      value: 11691,
      label: 'Valle Viejo',
    },
  ],
};
