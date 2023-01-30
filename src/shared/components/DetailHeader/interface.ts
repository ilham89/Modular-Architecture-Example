import { IDetailArtistDatum } from "@shared/interfaces/detail-artist";
import { IShazamCoreDetail } from "@shared/interfaces/shazam-core";

export interface DetailHeaderProps {
  artistId: string | undefined;
  artistData?: IDetailArtistDatum;
  songData?: IShazamCoreDetail;
}
