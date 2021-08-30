import { Component, OnInit } from '@angular/core';
import {
  MapService,
  NgxSehirHaritasiService,
} from 'projects/ngx-sehir-haritasi/src/public-api';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private ngxSehirHaritasiService: NgxSehirHaritasiService,
    private mapService: MapService,
    private appService: AppService
  ) {}

  showSpinner: Observable<boolean> = this.ngxSehirHaritasiService.mapReady.pipe(
    startWith(false),
    map((isReady) => !isReady)
  );

  showSetUserLocation: Observable<boolean> = combineLatest([
    this.appService.userLocation.pipe(map((user) => user === undefined)),
    this.ngxSehirHaritasiService.mapReady,
  ]).pipe(map(([userNotSet, isReady]) => userNotSet && isReady));

  showResetUserLocation: Observable<boolean> = this.showSetUserLocation.pipe(
    map((val) => !val)
  );

  showSetDistance: Observable<boolean> = combineLatest([
    this.appService.userLocation.pipe(map((user) => user !== undefined)),
    this.ngxSehirHaritasiService.mapReady,
  ]).pipe(map(([isUserSet, isReady]) => isUserSet && isReady));

  async ngOnInit() {
    this.ngxSehirHaritasiService.mapReady.subscribe(() => {
      this.hideTools();
    });
  }

  hideTools() {
    this.mapService.toolbar({
      network: false,
      panorama: false,
      menu: false,
      layers: false,
      search: false,
      mapSwitch: false,
      traffic: false,
      coordinate: false,
      clear: false,
      measure: false,
      print: false,
      language: false,
      rightMenu: false,
      label: false,
      legend: false,
    });
  }
}
