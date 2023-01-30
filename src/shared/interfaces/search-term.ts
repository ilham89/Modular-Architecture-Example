import { IShazamCore } from "./shazam-core";

export interface ISearchTerm {
  tracks: Tracks;
  artists: Artists;
}

export interface Artists {
  hits: ArtistsHit[];
}

export interface ArtistsHit {
  artist: HitArtist;
}

export interface HitArtist {
  avatar?: string;
  name: string;
  verified: boolean;
  weburl: string;
  adamid: string;
}

export interface Tracks {
  hits: TracksHit[];
}

export interface TracksHit {
  track: IShazamCore;
}

export interface Track {
  layout: string;
  type: TrackType;
  key: string;
  title: string;
  subtitle: Subtitle;
  share: Share;
  images: TrackImages;
  hub: Hub;
  artists: ArtistElement[];
  url: string;
}

export interface ArtistElement {
  id: string;
  adamid: string;
}

export interface Hub {
  type: HubType;
  image: string;
  actions: Action[];
  options: Option[];
  providers: Provider[];
  explicit: boolean;
  displayname: Displayname;
}

export interface Action {
  name: Name;
  type: ActionType;
  id?: string;
  uri?: string;
}

export enum Name {
  Apple = "apple",
  HubApplemusicAndroidstore = "hub:applemusic:androidstore",
  HubApplemusicConnect = "hub:applemusic:connect",
  HubApplemusicDeeplink = "hub:applemusic:deeplink",
  HubDeezerSearchdeeplink = "hub:deezer:searchdeeplink",
  HubSpotifySearchdeeplink = "hub:spotify:searchdeeplink",
  HubYoutubemusicAndroiddeeplink = "hub:youtubemusic:androiddeeplink",
}

export enum ActionType {
  Applemusicconnect = "applemusicconnect",
  Applemusicplay = "applemusicplay",
  Intent = "intent",
  URI = "uri",
}

export enum Displayname {
  AppleMusic = "APPLE MUSIC",
}

export interface Option {
  caption: OptionCaption;
  actions: Action[];
  beacondata: Beacondata;
  image: string;
  type: BeacondataType;
  listcaption: Listcaption;
  overflowimage: string;
  colouroverflowimage: boolean;
  providername: Providername;
}

export interface Beacondata {
  type: BeacondataType;
  providername: Providername;
}

export enum Providername {
  Applemusic = "applemusic",
}

export enum BeacondataType {
  Open = "open",
}

export enum OptionCaption {
  Open = "OPEN",
}

export enum Listcaption {
  OpenInAppleMusic = "Open in Apple Music",
}

export interface Provider {
  caption: ProviderCaption;
  images: ProviderImages;
  actions: Action[];
  type: ProviderType;
}

export enum ProviderCaption {
  OpenInDeezer = "Open in Deezer",
  OpenInSpotify = "Open in Spotify",
  OpenInYouTubeMusic = "Open in YouTube Music",
}

export interface ProviderImages {
  overflow: string;
  default: string;
}

export enum ProviderType {
  Deezer = "DEEZER",
  Spotify = "SPOTIFY",
  Youtubemusic = "YOUTUBEMUSIC",
}

export enum HubType {
  Applemusic = "APPLEMUSIC",
}

export interface TrackImages {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Share {
  subject: string;
  text: string;
  href: string;
  image: string;
  twitter: string;
  html: string;
  avatar: string;
  snapchat: string;
}

export enum Subtitle {
  Tulus = "Tulus",
  YovieWidiantoTulusGlennFredly = "Yovie Widianto, Tulus & Glenn Fredly",
}

export enum TrackType {
  Music = "MUSIC",
}
