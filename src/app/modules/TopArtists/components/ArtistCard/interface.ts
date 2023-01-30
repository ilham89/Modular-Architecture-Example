import { Artist, Images } from "@shared/interfaces/shazam-core";

export interface TopArtistProps {
  track: {
    artists?: Artist[];
    subtitle: string;
    images?: Images;
  };
}
