import { Actions } from '../enums';

export type Events = {
  readonly hoverable?: Actions;
  readonly clickable?: Actions;
  readonly touchable?: Actions;
};
