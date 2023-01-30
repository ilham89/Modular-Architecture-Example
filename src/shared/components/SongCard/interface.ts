import { IShazamCore } from "@shared/interfaces/shazam-core";

export interface SongCardProps {
  song: IShazamCore;
  isPlaying: boolean;
  activeSong?: IShazamCore;
  data: IShazamCore[];
  i: number;
}
