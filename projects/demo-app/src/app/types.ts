export interface Location {
  lat: number;
  lon: number;
}

export type DistanceLevel = 15 | 30 | 60;
export type SearchCategory = 'gas' | 'ispark' | 'isbike' | 'park' | 'health';

export type SearchResultItem = { name: string; lat: number; lon: number };
