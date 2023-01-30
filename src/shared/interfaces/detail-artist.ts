import { IShazamCore } from "./shazam-core";

export interface IDetailArtist {
  data: IDetailArtistDatum[];
}

export interface IDetailArtistDatum {
  id: string;
  type: Type;
  href: string;
  attributes: PurpleAttributes;
  relationships: Relationships;
  views: DatumViews;
  meta: PurpleMeta;
  avatar: string;
}

export interface PurpleAttributes {
  bornOrFormed: string;
  genreNames: string[];
  editorialArtwork: PurpleEditorialArtwork;
  origin: string;
  name: Name;
  artwork: Artwork;
  url: string;
  artistBio: string;
}

export interface Artwork {
  width: number;
  url: string;
  height: number;
  textColor3: string;
  textColor2: string;
  textColor4: string;
  textColor1: string;
  bgColor: string;
  hasP3: boolean;
  textGradient?: string[];
}

export interface PurpleEditorialArtwork {
  originalFlowcaseBrick?: Artwork;
  storeFlowcase?: Artwork;
  subscriptionHero?: Artwork;
  bannerUber?: Artwork;
}

export enum Name {
  ArianaGrandeMileyCyrusLanaDelRey = "Ariana Grande, Miley Cyrus & Lana Del Rey",
  MileyCyrus = "Miley Cyrus",
}

export interface PurpleMeta {
  views: MetaViews;
}

export interface MetaViews {
  order: string[];
}

export interface Relationships {
  albums: Albums;
}

export interface Albums {
  href: string;
  next?: string;
  data: AlbumsDatum[];
}

export interface AlbumsDatum {
  id: string;
  type: Type;
  href: string;
  attributes?: FluffyAttributes;
}

export interface FluffyAttributes {
  copyright?: string;
  genreNames?: string[];
  releaseDate?: Date;
  isMasteredForItunes?: boolean;
  upc?: string;
  artwork: Artwork;
  url: string;
  playParams: PlayParams;
  recordLabel?: RecordLabel;
  isCompilation?: boolean;
  trackCount?: number;
  isPrerelease?: boolean;
  audioTraits?: AudioTrait[];
  editorialArtwork: FluffyEditorialArtwork;
  isSingle?: boolean;
  name: string;
  contentRating?: string;
  artistName?: Name;
  editorialNotes?: EditorialNotes;
  isComplete?: boolean;
  curatorName?: string;
  lastModifiedDate?: Date;
  isChart?: boolean;
  description?: Description;
  playlistType?: string;
  durationInMillis?: number;
  isrc?: string;
  has4K?: boolean;
  hasHDR?: boolean;
  previews?: Preview[];
  albumName?: string;
  trackNumber?: number;
}

export enum AudioTrait {
  Atmos = "atmos",
  Lossless = "lossless",
  LossyStereo = "lossy-stereo",
  Spatial = "spatial",
}

export interface Description {
  standard: string;
  short?: string;
}

export interface FluffyEditorialArtwork {
  storeFlowcase?: Artwork;
  subscriptionHero?: Artwork;
  staticDetailSquare?: Artwork;
  staticDetailTall?: Artwork;
  subscriptionCover?: Artwork;
  originalFlowcaseBrick?: Artwork;
}

export interface EditorialNotes {
  standard: string;
  short?: string;
  name?: string;
}

export interface PlayParams {
  id: string;
  kind: Kind;
  versionHash?: string;
}

export enum Kind {
  Album = "album",
  MusicVideo = "musicVideo",
  Playlist = "playlist",
  Song = "song",
}

export interface Preview {
  url: string;
  hlsUrl?: string;
  artwork?: Artwork;
}

export enum RecordLabel {
  Columbia = "Columbia",
  HollywoodRecords = "Hollywood Records",
  RCARecordsLabel = "RCA Records Label",
}

export enum Type {
  Albums = "albums",
  Artists = "artists",
  MusicVideos = "music-videos",
  Playlists = "playlists",
  Songs = "songs",
}

export interface DatumViews {
  "featured-albums": FeaturedAlbums;
  playlists: FeaturedAlbums;
  "similar-artists": FeaturedAlbums;
  "top-music-videos": FeaturedAlbums;
  "full-albums": FeaturedAlbums;
  "latest-release": FeaturedAlbums;
  "top-songs": FeaturedAlbums;
}

export interface FeaturedAlbums {
  href: string;
  attributes: FeaturedAlbumsAttributes;
  data: IShazamCore[];
  next?: string;
}

export interface FeaturedAlbumsAttributes {
  title: string;
}

export interface FeaturedAlbumsDatum {
  id: string;
  type: Type;
  href: string;
  attributes: TentacledAttributes;
  relationships?: Relationships;
  meta?: FluffyMeta;
  key?: string;
  title?: string;
  subtitle?: string;
  images?: Images;
  // layout: string;
  // share: Share;
  // hub: Hub;
  // url: string;
  // highlightsurls: Highlightsurls;
  // properties: Highlightsurls;
}

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor?: string;
}

export interface TentacledAttributes {
  copyright?: string;
  genreNames?: string[];
  releaseDate?: Date;
  isMasteredForItunes?: boolean;
  upc?: string;
  artwork: Artwork;
  url: string;
  playParams?: PlayParams;
  recordLabel?: RecordLabel;
  isCompilation?: boolean;
  trackCount?: number;
  isPrerelease?: boolean;
  audioTraits?: AudioTrait[];
  editorialArtwork: TentacledEditorialArtwork;
  isSingle?: boolean;
  name: string;
  contentRating?: string;
  artistName?: Name;
  editorialNotes?: EditorialNotes;
  isComplete?: boolean;
  curatorName?: string;
  lastModifiedDate?: Date;
  isChart?: boolean;
  description?: Description;
  playlistType?: string;
  bornOrFormed?: string;
  origin?: string;
  artistBio?: string;
  durationInMillis?: number;
  isrc?: string;
  has4K?: boolean;
  hasHDR?: boolean;
  previews?: Preview[];
  albumName?: string;
  trackNumber?: number;
  hasTimeSyncedLyrics?: boolean;
  isVocalAttenuationAllowed?: boolean;
  audioLocale?: AudioLocale;
  composerName?: string;
  discNumber?: number;
  isAppleDigitalMaster?: boolean;
  hasLyrics?: boolean;
}

export enum AudioLocale {
  EnUS = "en-US",
}

export interface TentacledEditorialArtwork {
  storeFlowcase?: Artwork;
  subscriptionHero?: Artwork;
  staticDetailSquare?: Artwork;
  staticDetailTall?: Artwork;
  subscriptionCover?: Artwork;
  originalFlowcaseBrick?: Artwork;
  bannerUber?: Artwork;
}

export interface FluffyMeta {
  formerIds: string[];
}
