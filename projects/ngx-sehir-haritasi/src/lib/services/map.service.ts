import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { NgxSehirHaritasiService } from '../ngx-sehir-haritasi.service';
import {
  FixCoordinateParams,
  FixExtentParams,
  GoToParams,
  ToolbarParams,
  OnClickEvent,
} from '../types';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private _click = new Subject<OnClickEvent>();

  constructor(private service: NgxSehirHaritasiService) {
    this.service.mapReady
      .pipe(
        filter((isReady) => isReady),
        take(1)
      )
      .subscribe(() => {
        this.map?.OnClick((lat, lon, zoom, clickDirection, pixelX, pixelY) => {
          this._click.next({ lat, lon, zoom, clickDirection, pixelX, pixelY });
        });
      });
  }

  get map() {
    return this.service.map.value?.Map;
  }

  goTo(params: GoToParams): void {
    if (!this.map) {
      throw new Error('Map is not ready yet');
    }
    this.map.Goto(params);
  }

  getCenter(): Promise<{ lat: number; lon: number }> {
    return new Promise((resolve, reject) => {
      if (!this.map) {
        throw new Error('Map is not ready yet');
      }
      this.map.GetCenter((lat, lon) => {
        resolve({ lat, lon });
      });
    });
  }

  toolbar(params: ToolbarParams): void {
    if (!this.map) {
      throw new Error('Map is not ready yet');
    }
    this.map.Toolbar(params);
  }

  onlyMap(): void {
    if (!this.map) {
      throw new Error('Map is not ready yet');
    }
    this.map.OnlyMap();
  }

  fixCoordinate(params: FixCoordinateParams): void {
    if (!this.map) {
      throw new Error('Map is not ready yet');
    }
    this.map.FixCoordinate(params);
  }

  fixExtent(params: FixExtentParams): void {
    if (!this.map) {
      throw new Error('Map is not ready yet');
    }
    this.map.FixExtent(params);
  }

  fixRelease(): void {
    if (!this.map) {
      throw new Error('Map is not ready yet');
    }
    this.map.FixRelease();
  }

  onClick(): Observable<OnClickEvent> {
    return this._click.asObservable();
  }
}
