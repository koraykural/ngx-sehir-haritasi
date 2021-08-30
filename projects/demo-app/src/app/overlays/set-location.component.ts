import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { MapService } from 'projects/ngx-sehir-haritasi/src/public-api';
import { AppService } from '../app.service';

@Component({
  selector: 'app-set-location',
  template: ``,
  styles: [],
})
export class SetLocationComponent implements OnInit, OnDestroy {
  buttonOverlayRef = this.overlay.create({
    hasBackdrop: false,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .bottom('20px'),
  });
  iconOverlayRef = this.overlay.create({
    hasBackdrop: false,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
  });

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.buttonOverlayRef.attach(
      new ComponentPortal(SetLocationButtonComponent, this.viewContainerRef)
    );
    this.iconOverlayRef.attach(
      new ComponentPortal(SetLocationIconComponent, this.viewContainerRef)
    );
  }

  ngOnDestroy(): void {
    this.buttonOverlayRef.dispose();
    this.iconOverlayRef.dispose();
  }
}

@Component({
  selector: 'app-set-location-button',
  template: `
    <button mat-raised-button color="primary" (click)="setUserLocation()">
      Konumumu Seç
    </button>
  `,
  styles: [],
})
export class SetLocationButtonComponent {
  constructor(private mapService: MapService, private appService: AppService) {}

  async setUserLocation() {
    const center = await this.mapService.getCenter();
    this.appService.setUserLocation(center);
  }
}

@Component({
  selector: 'app-set-location-icon',
  template: `<mat-icon color="primary">person_pin_circle</mat-icon>`,
  styles: [
    `
      mat-icon {
        font-size: 42px;
        width: 42px;
        height: 42px;
        transform: translateY(-12px);
        user-select: none;
      }
    `,
  ],
})
export class SetLocationIconComponent {
  constructor() {}
}
