import { Colorify } from '../enums/Colorify';

export default interface Levels {
  x: number;
  y: number;
  color: string;
  readonly shadow?: string;
  readonly colorify?: Colorify | string;
}
