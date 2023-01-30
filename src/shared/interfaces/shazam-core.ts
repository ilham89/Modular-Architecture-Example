import { TentacledAttributes } from "./detail-artist";

export interface IShazamCore {
  layout: string;
  type: TopArtistType;
  key: string;
  title: string;
  subtitle: string;
  share: Share;
  images?: Images;
  hub: Hub;
  artists?: Artist[];
  url: string;
  highlightsurls: Highlightsurls;
  properties: Highlightsurls;
  attributes?: TentacledAttributes;
}

export interface IShazamCoreDetail {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  images: Images;
  share: Share;
  hub: Hub;
  sections: Section[];
  url: string;
  artists: Artist[];
  alias: string;
  isrc: string;
  genres: Genres;
  urlparams: Urlparams;
  highlightsurls: Highlightsurls;
  albumadamid: string;
  trackadamid: string;
  releasedate: string;
}

export interface Artist {
  alias: string;
  id: string;
  adamid: string;
}

export interface Highlightsurls {}

export interface Hub {
  type: HubType;
  image: string;
  actions?: Action[];
  options: Option[];
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
  HubApplemusicDeeplink = "hub:applemusic:deeplink",
  HubApplemusicSubscribe = "hub:applemusic:subscribe",
}

export enum ActionType {
  Applemusicopen = "applemusicopen",
  Applemusicplay = "applemusicplay",
  URI = "uri",
}

export enum Displayname {
  AppleMusic = "APPLE MUSIC",
}

export interface Option {
  caption: Caption;
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

export interface Section {
  type: string;
  metapages?: Metapage[];
  tabname: string;
  metadata?: Metadatum[];
  text?: string[];
  footer?: string;
  beacondata?: SectionBeacondata;
}

export interface SectionBeacondata {
  lyricsid: string;
  providername: string;
  commontrackid: string;
}
export interface Metapage {
  image: string;
  caption: string;
}

export interface Metadatum {
  title: string;
  text: string;
}

export enum Providername {
  Applemusic = "applemusic",
}

export enum BeacondataType {
  Open = "open",
}

export enum Caption {
  Open = "OPEN",
}

export enum Listcaption {
  OpenInAppleMusic = "Open in Apple Music",
}

export enum HubType {
  Applemusic = "APPLEMUSIC",
}

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor?: string;
}

export interface Share {
  subject: string;
  text: string;
  href: string;
  image?: string;
  twitter: string;
  html: string;
  avatar?: string;
  snapchat: string;
}

export interface Genres {
  primary: string;
}

export interface Urlparams {
  "{tracktitle}": string;
  "{trackartist}": string;
}
export enum TopArtistType {
  Music = "MUSIC",
}
