import { Perspective } from '../types';

import { Colorify } from '../enums/Colorify';

export default interface Props {
  readonly perspective?: Perspective;
  readonly color: string;
  readonly shadow?: string;
  readonly colorify?: Colorify | string;
  readonly [key: string]: any;
}
