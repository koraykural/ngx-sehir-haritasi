import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarkerService } from 'projects/ngx-sehir-haritasi/src/lib/services/marker.service';
import { Anchors, MapIcons } from 'projects/ngx-sehir-haritasi/src/lib/types';
import {
  MapService,
  NgxSehirHaritasiService,
  RouteAnalysisService,
} from 'projects/ngx-sehir-haritasi/src/public-api';
import { BehaviorSubject, combineLatest, forkJoin, Observable, of } from 'rxjs';
import { filter, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { DataService } from './data.service';
import {
  DistanceLevel,
  SearchCategory,
  Location,
  SearchResultItem,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _userLocation = new BehaviorSubject<Location | undefined>(undefined);
  private _searchDistance = new BehaviorSubject<DistanceLevel>(15);
  private _searchCategory = new BehaviorSubject<SearchCategory>('gas');

  constructor(
    private mapService: MapService,
    private markerService: MarkerService,
    private ngxSehirHaritasiService: NgxSehirHaritasiService,
    private dataService: DataService,
    private routeAnalysis: RouteAnalysisService,
    private snackbar: MatSnackBar
  ) {
    // Observe user location, search distance and search category inputs
    combineLatest([this.userLocation, this.searchDistance, this.searchCategory])
      .pipe(
        // Don't let continue if map is not ready
        withLatestFrom(this.ngxSehirHaritasiService.mapReady),
        filter(([_, mapReady]) => mapReady),
        map(([[location, distance, category], _]) => ({
          location,
          distance,
          category,
        })),

        // Remove previous markers and route analysis
        tap(() => {
          this.markerService.remove();
          this.routeAnalysis.close();
        }),

        // Mark search results if all three inputs are set
        mergeMap(({ location, distance, category }) =>
          forkJoin({
            location: of(location),
            distance: of(distance),
            locations: location
              ? this.dataService.getLocations(category, location, distance)
              : of<SearchResultItem[]>([]),
          })
        )
      )
      .subscribe(({ location, distance, locations }) => {
        if (location) {
          this.addUserPin(location);
          this.fixMapToZone(location, distance);
          this.addMarkers(locations);
        } else {
          this.mapService.fixRelease();
        }
      });

    // Observer marker clicks, create route
    this.markerService
      .onClick()
      .pipe(
        // Continue if marker is set for a search result
        map((tag) => this.parseMarkerTag(tag)),
        filter((marker) => marker !== undefined),
        map((m) => m as SearchResultItem),

        // Continue if user location is set
        withLatestFrom(this.userLocation),
        map(([m, l]) => ({ marker: m, location: l as Location })),
        tap(() => this.routeAnalysis.close()),
        filter(({ location }) => location !== undefined)
      )
      .subscribe(({ location, marker }) => {
        this.routeAnalysis.drive({
          start: location,
          finish: marker,
        });
        this.snackbar.open(`${marker.name} için rota oluşturuluyor`, '', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      });
  }

  get userLocation(): Observable<Location | undefined> {
    return this._userLocation.asObservable();
  }

  get searchDistance(): Observable<DistanceLevel> {
    return this._searchDistance.asObservable();
  }

  get searchCategory(): Observable<SearchCategory> {
    return this._searchCategory.asObservable();
  }

  private distanceToZoomLevel(distance: DistanceLevel): number {
    switch (distance) {
      case 15:
        return 14;
      case 30:
        return 12;
      case 60:
        return 11;
    }
  }

  private parseMarkerTag(tag: string): SearchResultItem | undefined {
    try {
      const { lat, lon, name } = JSON.parse(tag);
      if (lat && lon) {
        return { lat, lon, name } as SearchResultItem;
      } else {
        return undefined;
      }
    } catch (error) {
      return undefined;
    }
  }

  private addUserPin(location: Location): void {
    this.markerService.add({
      ...location,
      iconUrl: MapIcons.Start,
      tag: 'user_location_pin',
      anchorX: Anchors.Center,
      anchorY: Anchors.Bottom,
    });
  }

  private fixMapToZone(center: Location, distance: DistanceLevel): void {
    this.mapService.fixExtent({
      minLat: center.lat - 0.0035 * distance,
      maxLat: center.lat + 0.0035 * distance,
      minLon: center.lon - 0.0035 * distance,
      maxLon: center.lon + 0.0035 * distance,
      zoom: this.distanceToZoomLevel(distance),
      maxZoom: 20,
      minZoom: this.distanceToZoomLevel(distance),
      drag: true,
    });
  }

  private addMarkers(locations: SearchResultItem[]): void {
    locations.forEach((point) => {
      this.markerService.add({
        lat: point.lat,
        lon: point.lon,
        tag: JSON.stringify(point),
        toolbar: false,
        iconUrl: MapIcons.DefaultLarge,
      });
    });
  }

  setUserLocation(location: Location | undefined): void {
    this._userLocation.next(location);
  }

  setSearchDistance(distance: DistanceLevel): void {
    this._searchDistance.next(distance);
  }

  setSearchCategory(category: SearchCategory): void {
    this._searchCategory.next(category);
  }
}
