import { Perspective } from '../types';
export default interface Props {
    readonly perspective?: Perspective;
    readonly color: string;
    readonly shadow?: string;
    readonly colorify?: boolean;
}
