import { Perspective } from '../types/Perspective';

export default interface Props {
  readonly perspective: Perspective;
  readonly color: string;
  readonly shadow?: string;
  readonly colorify?: boolean;
}
