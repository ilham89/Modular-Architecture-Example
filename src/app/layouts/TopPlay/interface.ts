import { IShazamCore } from "@shared/interfaces/shazam-core";

export interface TopChartCardProps {
  song: IShazamCore;
  i: number;
  isPlaying: boolean;
  activeSong: IShazamCore;
  handlePauseClick: () => void;
  handlePlayClick: () => void;
}
