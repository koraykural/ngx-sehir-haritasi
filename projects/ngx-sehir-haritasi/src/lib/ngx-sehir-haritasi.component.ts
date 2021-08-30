// /// <reference types="../map" />
import { AfterViewInit, Component, Input } from '@angular/core';
import SehirHaritasiAPI from './map';
import { NgxSehirHaritasiService } from './ngx-sehir-haritasi.service';

@Component({
  selector: 'ngx-sehir-haritasi',
  template: `
    <iframe
      id="ngx-sehir-haritas-map-frame"
      src="http://sehirharitasi.ibb.gov.tr"
      style="height:100%; width:100%;"
    ></iframe>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
        width: 100%;
        overflow: hidden;
      }
    `,
  ],
})
export class NgxSehirHaritasiComponent implements AfterViewInit {
  @Input() apiKey!: string;

  private map!: SehirHaritasiAPI;

  constructor(private service: NgxSehirHaritasiService) {}

  ngAfterViewInit(): void {
    if (!this.apiKey) {
      throw new Error('apiKey is required');
    }
    this.map = new SehirHaritasiAPI(
      {
        mapFrame: 'ngx-sehir-haritas-map-frame',
        apiKey: this.apiKey,
      },
      () => {
        this.service.map.next(this.map);
        console.info('Map is ready to perform operations');
      }
    );
  }
}
