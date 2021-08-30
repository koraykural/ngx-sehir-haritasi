import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  template: ``,
  styles: [],
})
export class SpinnerComponent implements OnInit, OnDestroy {
  loaderOverlayRef: OverlayRef = this.overlay.create({
    hasBackdrop: true,
    backdropClass: 'loader-overlay',
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
    this.loaderOverlayRef.attach(
      new ComponentPortal(MatSpinner, this.viewContainerRef)
    );
  }

  ngOnDestroy(): void {
    this.loaderOverlayRef.dispose();
  }
}
