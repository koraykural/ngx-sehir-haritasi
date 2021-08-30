import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSehirHaritasiModule } from 'projects/ngx-sehir-haritasi/src/public-api';

import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import {
  SetLocationButtonComponent,
  SetLocationComponent,
  SetLocationIconComponent,
} from './overlays/set-location.component';
import { SpinnerComponent } from './overlays/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  SearchComponent,
  SearchInputsComponent,
} from './overlays/search.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SetLocationComponent,
    SetLocationButtonComponent,
    SetLocationIconComponent,
    SpinnerComponent,
    SearchComponent,
    SearchInputsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxSehirHaritasiModule,
    ReactiveFormsModule,
    HttpClientModule,
    OverlayModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
