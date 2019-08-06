import { Depth, Actions, Children } from '../types';

export default interface Element {
  readonly depth: Depth;
  readonly layers: string;
  readonly animate: boolean;
  readonly clickable?: Actions;
  readonly hoverable?: Actions;
  readonly touchable?: Actions;
  readonly children?: Children;
}
