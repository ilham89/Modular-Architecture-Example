import { FeaturedAlbumsDatum } from "@shared/interfaces/detail-artist";
import { IShazamCore } from "@shared/interfaces/shazam-core";

export interface RelatedSongProps {
  data: IShazamCore[] | undefined;
  artistId: string | undefined;
  isPlaying: boolean;
  activeSong?: IShazamCore;
  handlePauseClick?: () => void | undefined;
  handlePlayClick?: (song: FeaturedAlbumsDatum, i: number) => void | undefined;
}

export interface SongBarProps {
  song: IShazamCore;
  i: number;
  artistId: string | undefined;
  isPlaying: boolean;
  activeSong: IShazamCore | undefined;
  handlePauseClick?: () => void | undefined;
  handlePlayClick?: (song: FeaturedAlbumsDatum, i: number) => void | undefined;
}
