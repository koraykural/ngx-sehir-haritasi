import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { NgxSehirHaritasiService } from '../ngx-sehir-haritasi.service';
import { AddMarkerParams, MarkerClustorParams } from '../types';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  private _click = new Subject<string>();

  constructor(private service: NgxSehirHaritasiService) {
    this.service.mapReady
      .pipe(
        filter((isReady) => isReady),
        take(1)
      )
      .subscribe(() => {
        this.marker?.OnClick((_id, tag) => {
          this._click.next(tag);
        });
      });
  }

  get marker() {
    return this.service.map.value?.Marker;
  }

  add(params: AddMarkerParams): Promise<{ id: string; tag: string }> {
    return new Promise((resolve, reject) => {
      if (!this.marker) {
        throw new Error('Map is not ready yet');
      }
      this.marker.Add(params, (id, tag) => {
        resolve({ id, tag });
      });
    });
  }

  cluster(markers: MarkerClustorParams): void {
    if (!this.marker) {
      throw new Error('Map is not ready yet');
    }
    this.marker.Cluster({ markers });
  }

  remove(id?: string): void {
    if (!this.marker) {
      throw new Error('Map is not ready yet');
    }
    this.marker.Remove(id ? { id } : undefined);
  }

  onClick(): Observable<any> {
    return this._click.asObservable();
  }
}
