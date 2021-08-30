export interface OnClickEvent {
  lat: number;
  lon: number;
  zoom: number;
  clickDirection: string;
  pixelX: number;
  pixelY: number;
}

export interface GoToParams {
  lat: number;
  lon: number;
  zoom: number;
  effect: boolean;
}

export interface DriveParams {
  start: {
    lat: number;
    lon: number;
  };
  finish: {
    lat: number;
    lon: number;
  };
}

export interface ToolbarParams {
  network?: boolean;
  panorama?: boolean;
  layers?: boolean;
  menu?: boolean;
  search?: boolean;
  language?: boolean;
  traffic?: boolean;
  mapSwitch?: boolean;
  coordinate?: boolean;
  clear?: boolean;
  measure?: boolean;
  print?: boolean;
  location?: boolean;
  zoomIn?: boolean;
  zoomOut?: boolean;
  rightMenu?: boolean;
  label?: any;
  legend?: any;
}

export interface FixCoordinateParams {
  lat: number;
  lon: number;
  zoom: number;
  maxZoom: number;
  minZoom: number;
}

export interface FixExtentParams {
  minLat: number;
  minLon: number;
  maxLat: number;
  maxLon: number;
  zoom: number;
  maxZoom: number;
  minZoom: number;
  drag: boolean;
}

export interface AddMarkerParams {
  lat: number;
  lon: number;
  anchorX?: string;
  anchorY?: string;
  zoom?: number;
  effect?: boolean;
  content?: string;
  iconUrl?: string;
  imageX?: number;
  imageY?: number;
  toolbar?: boolean;
  draggable?: boolean;
  showPopover?: boolean;
  title?: string;
  gotoPosition?: boolean;
  tag?: string;
  style?: any;
  center?: any;
  opacity?: any;
  closeotherpopups?: any;
  cluster?: any;
  shareText?: any;
}

export enum MapIcons {
  Default = 'https://sehirharitasi.ibb.gov.tr/images/markers/searched.png',
  DefaultLarge = 'https://sehirharitasi.ibb.gov.tr/images/markers/hedef.png',
  Info = 'https://sehirharitasi.ibb.gov.tr/images/markers/location.png',
  Start = 'https://sehirharitasi.ibb.gov.tr/images/markers/baslangic.png',
  Finish = 'https://sehirharitasi.ibb.gov.tr/images/markers/bitis.png',
  WayPoint = 'https://sehirharitasi.ibb.gov.tr/images/markers/aranokta.png',
  Transfer = 'https://sehirharitasi.ibb.gov.tr/images/markers/aktarma.png',
  Panorama = 'https://sehirharitasi.ibb.gov.tr/images/markers/roi-big.png',
}

export enum Anchors {
  Left = 'l',
  Right = 'r',
  Center = 'c',
  Top = 't',
  Bottom = 'b',
}

export interface NearbyOpenParams {
  lat: number;
  lon: number;
  type: string;
  distance: number;
}

export type MarkerClustorParams = {
  content: string;
  lat: number;
  lon: number;
  title: string;
  toolbar: boolean;
}[];
