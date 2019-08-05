import { ReactChild } from 'react';

import { Perspective } from '../types';

export default interface Props {
  readonly perspective?: Perspective;
  readonly color: string;
  readonly shadow?: string;
  readonly colorify?: boolean;
  readonly children?: ReactChild | ReactChild[];
  readonly [key: string]: any;
}
