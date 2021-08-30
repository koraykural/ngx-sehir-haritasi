import { Injectable } from '@angular/core';
import { NgxSehirHaritasiService } from '../ngx-sehir-haritasi.service';
import { DriveParams } from '../types';

@Injectable({
  providedIn: 'root',
})
export class RouteAnalysisService {
  constructor(private service: NgxSehirHaritasiService) {}

  get routeAnalysis() {
    return this.service.map.value?.RouteAnalysis;
  }

  close(): void {
    if (!this.routeAnalysis) {
      throw new Error('Map is not ready yet');
    }
    this.routeAnalysis.Close();
  }

  drive(params: DriveParams): void {
    if (!this.routeAnalysis) {
      throw new Error('Map is not ready yet');
    }
    this.routeAnalysis.Drive(params);
  }

  hideDrive(): void {
    if (!this.routeAnalysis) {
      throw new Error('Map is not ready yet');
    }
    this.routeAnalysis.HideDrive();
  }
}
