import {Option} from './options.model';

export interface Location {
  province: string;
  municipality?: string;
}

export interface LocationOption {
  province: Option;
  municipality?: Option;
}
