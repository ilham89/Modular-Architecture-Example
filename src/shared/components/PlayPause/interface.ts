import { IShazamCore } from "@shared/interfaces/shazam-core";

export interface PlayPauseProps {
  isPlaying: boolean;
  activeSong: IShazamCore | undefined;
  song: any;
  handlePause?: () => void | undefined;
  handlePlay?: () => void | undefined;
}
