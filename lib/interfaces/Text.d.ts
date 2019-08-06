import { Depth, Children } from '../types';
export default interface Text {
    readonly depth: Depth;
    readonly layers: string;
    readonly children: Children;
}
