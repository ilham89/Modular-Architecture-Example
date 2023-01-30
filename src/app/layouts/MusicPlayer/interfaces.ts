import { IShazamCore } from "@shared/interfaces/shazam-core";

export interface ControlProps {
  isPlaying: boolean;
  repeat: boolean;
  setRepeat: (repeat: any) => void;
  shuffle: boolean;
  setShuffle: (shuffle: any) => void;
  currentSongs: IShazamCore[];
  handlePlayPause: () => void;
  handlePrevSong: () => void;
  handleNextSong: () => void;
}

export interface PlayerProps {
  activeSong: IShazamCore;
  isPlaying: boolean;
  volume: number;
  seekTime: number;
  onEnded: () => void;
  onTimeUpdate: () => void;
  onLoadedData: () => void;
  repeat: boolean;
}

export interface SeekbarProps {
  value: number;
  min: number;
  max: number;
  onInput: () => void;
  setSeekTime: (time: number) => void;
  appTime: number;
}

export interface TrackProps {
  isPlaying: boolean;
  isActive: boolean;
  activeSong: IShazamCore;
}

export interface VolumeBarProps {
  value: number;
  min: number;
  max: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  setVolume: (volume: number) => void;
}
