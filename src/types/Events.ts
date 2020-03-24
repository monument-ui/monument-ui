import { Actions } from './Actions';

export type Events = {
  readonly hoverable?: Actions;
  readonly clickable?: Actions;
  readonly touchable?: Actions;
};
