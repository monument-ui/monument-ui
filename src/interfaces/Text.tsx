import { ReactChild } from 'react';

import { Depth } from '../types';

export default interface Text {
  readonly depth: Depth;
  readonly layers: string;
  readonly children: ReactChild | ReactChild[];
}
