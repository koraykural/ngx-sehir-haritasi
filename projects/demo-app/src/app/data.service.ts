import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  DistanceLevel,
  SearchResultItem,
  Location,
  SearchCategory,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  private getJson(name: SearchCategory): Observable<SearchResultItem[]> {
    return this.http.get<SearchResultItem[]>(`assets/data/${name}.json`);
  }

  private calculateDistance(p1: Location, p2: Location): number {
    return Math.sqrt((p2.lat - p1.lat) ** 2 + (p2.lon - p1.lon) ** 2);
  }

  private isInRange(
    userLocation: Location,
    point: Location,
    distanceRange: DistanceLevel
  ): boolean {
    const distanceDiff = this.calculateDistance(userLocation, point);
    switch (distanceRange) {
      case 15:
        return distanceDiff <= 0.0675;
      case 30:
        return distanceDiff > 0.0675 && distanceDiff <= 0.135;
      case 60:
        return distanceDiff > 0.135 && distanceDiff <= 0.28;
    }
  }

  getLocations(
    category: SearchCategory,
    location: Location,
    distance: DistanceLevel
  ): Observable<SearchResultItem[]> {
    return this.getJson(category).pipe(
      map((items) =>
        items.filter(({ lat, lon }) =>
          this.isInRange(location, { lat, lon }, distance)
        )
      )
    );
  }
}
