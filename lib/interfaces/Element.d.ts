import { Depth } from '../types';
import { Actions } from '../enums';
export default interface Element {
    readonly depth: Depth;
    readonly layers: string;
    readonly animate: boolean;
    readonly clickable?: Actions;
    readonly hoverable?: Actions;
    readonly touchable?: Actions;
}
