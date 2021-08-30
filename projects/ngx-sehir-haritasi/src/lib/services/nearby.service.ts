import { Injectable } from '@angular/core';
import { NgxSehirHaritasiService } from '../ngx-sehir-haritasi.service';
import { NearbyOpenParams } from '../types';

@Injectable({
  providedIn: 'root',
})
export class NearbyService {
  constructor(private service: NgxSehirHaritasiService) {}

  get nearby() {
    return this.service.map.value?.Nearby;
  }

  open(params: NearbyOpenParams) {
    this.nearby?.Open(params);
  }
}
