import { Depth, Actions } from '../types';
export default interface Element {
    readonly depth: Depth;
    readonly layers: string;
    readonly animate: boolean;
    readonly clickable?: Actions;
    readonly hoverable?: Actions;
    readonly touchable?: Actions;
}
