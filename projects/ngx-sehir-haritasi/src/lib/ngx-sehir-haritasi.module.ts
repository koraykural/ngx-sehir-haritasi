import { NgModule } from '@angular/core';
import { NgxSehirHaritasiComponent } from './ngx-sehir-haritasi.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [NgxSehirHaritasiComponent, SafePipe],
  imports: [],
  exports: [NgxSehirHaritasiComponent],
})
export class NgxSehirHaritasiModule {}
