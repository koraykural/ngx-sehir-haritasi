import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { take } from 'rxjs/operators';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  template: ``,
  styles: [],
})
export class SearchComponent implements OnInit, OnDestroy {
  overlayRef = this.overlay.create({
    hasBackdrop: false,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .top('20px'),
  });

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.overlayRef.attach(
      new ComponentPortal(SearchInputsComponent, this.viewContainerRef)
    );
  }

  ngOnDestroy(): void {
    this.overlayRef.dispose();
  }
}

@Component({
  selector: 'app-search-inputs',
  template: `
    <div class="container">
      <div style="margin-right: 0.25rem;">
        <button mat-flat-button color="primary" (click)="unsetUserLocation()">
          <mat-icon>person_pin_circle</mat-icon>
        </button>
      </div>
      <mat-button-toggle-group
        [formControl]="distanceControl"
        aria-label="Font Style"
        [value]="15"
      >
        <mat-button-toggle [value]="15">15</mat-button-toggle>
        <mat-button-toggle [value]="30">30</mat-button-toggle>
        <mat-button-toggle [value]="60">60</mat-button-toggle>
      </mat-button-toggle-group>
      <div style="margin-left: 0.25rem; font-size: 60%; width: 140px">
        <mat-form-field appearance="fill" style="width: 140px">
          <mat-label>Arama Kategorisi</mat-label>
          <mat-select [formControl]="categoryControl">
            <mat-option *ngFor="let opt of categoryOptions" [value]="opt.value">
              {{ opt.label }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
      }
    `,
  ],
})
export class SearchInputsComponent implements OnInit {
  distanceControl = new FormControl(15);
  categoryControl = new FormControl('gas');
  categoryOptions: { label: string; value: string }[] = [
    { label: 'Akaryak??t istasyonlar??', value: 'gas' },
    { label: '??spark otoparklar??', value: 'ispark' },
    { label: '??sbike istasyonlar??', value: 'isbike' },
    { label: 'Parklar ve ye??il alanlar', value: 'park' },
    { label: 'Sa??l??k kurum ve kurulu??lar??', value: 'health' },
  ];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.searchDistance.pipe(take(1)).subscribe((distance) => {
      this.distanceControl.setValue(distance);
    });
    this.distanceControl.valueChanges.subscribe((value) => {
      this.appService.setSearchDistance(value);
    });
    this.categoryControl.valueChanges.subscribe((value) => {
      this.appService.setSearchCategory(value);
    });
  }

  async unsetUserLocation() {
    this.appService.setUserLocation(undefined);
  }
}
