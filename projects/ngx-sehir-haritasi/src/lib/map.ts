import {
  AddMarkerParams,
  FixCoordinateParams,
  GoToParams,
  MarkerClustorParams,
  NearbyOpenParams,
  ToolbarParams,
} from './types';

interface Style {
  strokeColor: string;
  strokeOpacity: number;
  strokeWidth: number;
  strokeDashStyle: string;
  fillOpacity: number;
  fillColor: string;
}

let CallBackTiklaninca = function (
  lat: number,
  lon: number,
  zoom: number,
  clickDirection: string,
  pixelX: number,
  pixelY: number
) {};
let CallBackTiklamaKaldir = function () {
  CallBackTiklaninca = function (
    lat: number,
    lon: number,
    zoom: number,
    clickDirection: string,
    pixelX: number,
    pixelY: number
  ) {};
};
let CallBackAciDegisince = function () {};
let CallBackAciDegisinceKaldir = function () {
  CallBackAciDegisince = function () {};
};
let CallBackAciDegistir = function () {};
let CallBackPanoramaKonumDegisince = function () {};
let CallBackPanoramaKonumDegisinceKaldir = function () {
  CallBackPanoramaKonumDegisince = function () {};
};
let CallBackZoomSeviyesiDegistir = function () {};
let CallBackAciGetir = function () {};
let CallBackSonTiklananNokta = function (
  lat: number,
  lon: number,
  zoom: number
) {};
let CallBackZoomSeviyesi = function (zoom: number) {};
let CallBackHaritaOrtaNokta = function (lat: number, lon: number) {};
let CallBackKonumaGit = function () {};
let CallBackKonumaExtentleGit = function () {};
let CallBackSadeceHarita = function () {};
let CallBackAltlikKatmanListele = function () {};
let CallBackAltlikKatmanGetir = function () {};
let CallBackAltlikKatmanAyarla = function () {};
let CallBackIsaretciYerDegistirince = function (
  id: string,
  lat: number,
  lon: number
) {};
let CallBackIsaretciTiklaninca = function (id: string, tag: string) {};
let CallBackIsaretciEkle = function (id: string, tag: string) {};
let CallBackClusterEkle = function () {};
let CallBackTopluIsaretciEkle = function () {};
let CallBackIsaretciTemizle = function () {};
let CallBackCiz = function () {};
let CallBackCizimTemizle = function () {};
let CallBackCizimEditoruGetir = function () {};
let CallBackCizimPasiflestir = function () {};
let CallBackCizimDuzenle = function () {};
let CallBackCizimSil = function () {};
let CallBackCizimYerDegistirince = function () {};
let CallBackCizimTiklaninca = function () {};
let CallBackTurileCizim = function () {};
let CallBackCizimDegistir = function () {};
let CallBackCizimSec = function () {};
let CallBackYakinimdaAra = function () {};
let CallBackYakinimdaAraKapat = function () {};
let CallBackYakinimdaAraDurum = function () {};
let CallBackYolTarifi = function () {};
let CallBackTUBS = function () {};
let CallBackGuzergahKapat = function () {};
let CallBackTUBSGizle = function () {};
let CallBackTarifGizle = function () {};
let CallBackGuzergahDurum = function () {};
let CallBackTarifPaylasim = function () {};
let CallBackPanorama = function () {};
let CallBackPanoramaKapat = function () {};
let CallBackPanoramaDurum = function () {};
let CallBackTrafik = function () {};
let CallBackTrafikKaldir = function () {};
let CallBackArama = function () {};
let CallBackAramaKapat = function () {};
let CallBackAramaDurum = function () {};
let CallBackYazdir = function () {};
let CallBackYaklas = function () {};
let CallBackUzaklas = function () {};
let CallBackBilgiKapat = function () {};
let CallBackEczane = function () {};
let CallBackPazar = function () {};
let CallBackBilgiData = function () {};
let CallBackSpor = function () {};
let CallBackSosyal = function () {};
let CallBackIletisim = function () {};
let CallBackHikaye = function () {};
let HikayeKapaninca = function () {};
let CallBackKatmanEkle = function () {};
let CallBackKatmanKaldir = function () {};
let CallBackKatmanSaydamlikGetir = function () {};
let CallBackKatmanYoneticisiGetir = function () {};
let CallBackItrfWgs84Donusumu = function () {};
let CallBackWgs84ItrfDonusumu = function () {};
let CallBackAracCubugu = function () {};
let CallBackBoyut = function (en: number, boy: number) {};
let CallBackAlan = function (
  minX: number,
  minY: number,
  maxX: number,
  maxY: number
) {};
let CallBackWktAlan = function () {};
let CallBackSabitKoordinat = function () {};
let CallBackSabitExtent = function () {};
let CallBackSerbestKoordinat = function () {};
let CallBackBolge = function () {};
let CallBackMesafe = function () {};
let CallBackTemizle = function () {};
let CallBackLokasyon = function () {};
let CallBackBilgiAl = function () {};
let CallBackDil = function () {};
let CallBackDilGetir = function () {};
let CallBackHaritaDondur = function () {};
let CallBackEkranKlavyesi = function () {};
let CallBackTekParmakPasif = function () {};
let CallBackReset = function () {};
let CallBackGuzergahGizle = function () {};
let CallBackHikayeKapaninca = function () {};

export default class SehirHaritasiAPI {
  version = '2.0.3';
  updateDate = '20.04.2016';
  options: { mapFrame: string; apiKey: string };
  icons = {
    Default: 'https://sehirharitasi.ibb.gov.tr/images/markers/searched.png',
    DefaultLarge: 'https://sehirharitasi.ibb.gov.tr/images/markers/hedef.png',
    Info: 'https://sehirharitasi.ibb.gov.tr/images/markers/location.png',
    Start: 'https://sehirharitasi.ibb.gov.tr/images/markers/baslangic.png',
    Finish: 'https://sehirharitasi.ibb.gov.tr/images/markers/bitis.png',
    WayPoint: 'https://sehirharitasi.ibb.gov.tr/images/markers/aranokta.png',
    Transfer: 'https://sehirharitasi.ibb.gov.tr/images/markers/aktarma.png',
    Panorama: 'https://sehirharitasi.ibb.gov.tr/images/markers/roi-big.png',
  };
  layers = {
    Harita: 'Harita',
    _2018: '2018',
    _2017: '2017',
    _2015: '2015',
    _2014: '2014',
    _2013: '2013',
    _2011: '2011',
    _2006: '2006',
    _1982: '1982',
    _1970: '1970',
    _1966: '1966',
    _1946: '1946',
    SolarRenkli: 'Solar Harita (Renkli)',
    SolarSiyahBeyaz: 'Solar Harita (SB)',
    SolarDifuzyon: 'Solar Harita (Difüzyon)',
    Havza: 'Havza Sınırları',
    Rayli: 'Raylı Sistem Hattı',
    Kabartma: 'Kabartma Haritası',
    Etiket: 'Etiket',
    PazarYerleri: 'Pazar Yerleri',
    Cizim: 'Çizim',
    Marker: 'Marker',
    Cluster: 'Cluster',
    SiyahBeyaz: 'Siyah Beyaz Harita',
    Trafik: 'Trafik',
    All: 'Cluster,İki Boyut Haritası,Harita,2015,2017,2018,2014,2013,2011,2006,1982,1970,1966,1946,Solar Harita (Renkli),Solar Harita (SB),Solar Harita (Difüzyon),Havza Sınırları,Raylı Sistem Hattı,Kabartma Haritası,Etiket,Pazar Yerleri,Çizim,Marker,Trafik,Siyah Beyaz Harita',
    Default: '',
  };
  layerTypes = {
    Rest: 'REST',
    FeatureRest: 'FEATURE REST',
    ImageWMS: 'IMAGE WMS',
    TileWMS: 'TILE WMS',
    TileImage: 'TILE IMAGE',
    Default: 'REST',
  };
  anchors = {
    Left: 'l',
    Right: 'r',
    Center: 'c',
    Top: 't',
    Bottom: 'b',
  };
  geomTypes = {
    Point: 'POINT',
    LineString: 'LINESTRING',
    Polygon: 'POLYGON',
    Circle: 'CIRCLE',
  };
  colors = {
    Default: '#2AABE3',
  };

  constructor(
    options: { mapFrame: string; apiKey: string },
    callback: () => void
  ) {
    if (!options || !options.mapFrame || !options.apiKey) {
      throw new Error(
        'mapFrame ve apiKey alanlari tanimli olmali ! API fonksiyonlari kullanilamaz !'
      );
    }
    if (options.mapFrame === '') {
      throw new Error(
        'mapFrame alani tanimli degil !\r\nAPI fonksiyonlari kullanilamaz !'
      );
    }
    if (options.apiKey === '') {
      throw new Error(
        'apiKey alani tanimli degil !\r\nAPI fonksiyonlari kullanilamaz !'
      );
    }
    if (options.apiKey.length !== 32) {
      throw new Error(
        'apiKey alani dogrulanamiyor !\r\nAPI fonksiyonlari kullanilamaz !'
      );
    }

    this.options = options;

    this.Ajax(
      '//cbsproxy.ibb.gov.tr/?UserKeyStatisticsAdd',
      'apikey=' + this.options.apiKey,
      (data: any, params) => {
        data = JSON.parse(data);
        data = parseInt(data.long['#text']);
        if (data === 0) {
          throw new Error('Gecersiz API KEY');
        }
      },
      (x, a) => {}
    );

    addEventListener('message', this.MapListener, false);

    const iframeObj = document.getElementById(
      options.mapFrame
    ) as HTMLIFrameElement | null;
    if (callback && iframeObj) {
      iframeObj.onload = callback;
    }
  }

  private GetIframeWindow() {
    let doc: any;
    const iframeObj = document.getElementById(
      this.options.mapFrame
    ) as HTMLIFrameElement | null;
    if (iframeObj?.contentWindow) {
      return iframeObj.contentWindow;
    }
    if ((iframeObj as any).window) {
      return (iframeObj as any).window;
    }
    if (!doc && iframeObj?.contentDocument) {
      doc = iframeObj.contentDocument;
    }
    if (!doc && (iframeObj as any).document) {
      doc = (iframeObj as any).document;
    }
    if (doc && doc.defaultView) {
      return doc.defaultView;
    }
    if (doc && doc.parentWindow) {
      return doc.parentWindow;
    }
    return undefined;
  }

  private Ajax(
    url: string,
    data: string,
    callback: (responseText: string, data: string) => void,
    errorback: (xhr: XMLHttpRequest, args: IArguments) => void
  ) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.responseText, data);
      }
    };
    xhr.onerror = function () {
      errorback(xhr, arguments);
    };
    xhr.open('GET', url + '&' + data, true);
    xhr.send();
  }

  private MapListener(event: { data: string }) {
    if (typeof event.data !== 'string') {
      return;
    }
    const splitted = event.data.split('|');
    let methodName = splitted[0];
    const args = [];
    if (splitted.length > 1) {
      for (let i = 1; i < splitted.length; i++) {
        args.push(splitted[i]);
      }
    }
    switch (methodName) {
      case 'Tiklaninca':
      case 'TiklamaKaldir':
      case 'AciGetir':
      case 'AciDegisince':
      case 'AciDegisinceKaldir':
      case 'PanoramaKonumDegisince':
      case 'PanoramaKonumDegisinceKaldir':
      case 'AciDegistir':
      case 'SonTiklananNokta':
      case 'ZoomSeviyesi':
      case 'ZoomSeviyesiDegistir':
      case 'HaritaOrtaNokta':
      case 'KonumaGit':
      case 'SabitKoordinat':
      case 'SabitExtent':
      case 'SerbestKoordinat':
      case 'KonumaExtentleGit':
      case 'SadeceHarita':
      case 'AltlikKatmanListele':
      case 'AltlikKatmanGetir':
      case 'AltlikKatmanSec':
      case 'IsaretciEkle':
      case 'ClusterEkle':
      case 'IsaretciYerDegistirince':
      case 'IsaretciTiklaninca':
      case 'TopluIsaretciEkle':
      case 'IsaretciTemizle':
      case 'MarkerEkle':
      case 'TopluMarkerEkle':
      case 'MarkerTemizle':
      case 'Ciz':
      case 'CizimTemizle':
      case 'TurileCizim':
      case 'CizimPasiflestir':
      case 'CizimSec':
      case 'CizimDuzenle':
      case 'CizimSil':
      case 'CizimYerDegistirince':
      case 'CizimTiklaninca':
      case 'CizimDegistir':
      case 'YakinimdaAra':
      case 'YakinimdaAraKapat':
      case 'YakinimdaAraDurum':
      case 'Hikaye':
      case 'HikayeKapaninca':
      case 'YolTarifi':
      case 'TUBS':
      case 'GuzergahKapat':
      case 'GuzergahDurum':
      case 'TarifPaylasim':
      case 'Panorama':
      case 'PanoramaKapat':
      case 'PanoramaDurum':
      case 'Trafik':
      case 'Arama':
      case 'AramaKapat':
      case 'AramaDurum':
      case 'Yazdir':
      case 'Yaklas':
      case 'Uzaklas':
      case 'Eczane':
      case 'Spor':
      case 'Sosyal':
      case 'Iletisim':
      case 'KatmanEkle':
      case 'KatmanKaldir':
      case 'KatmanSaydamlikDegistir':
      case 'KatmanSaydamlikGetir':
      case 'KatmanYoneticisiGetir':
      case 'CizimEditoruGetir':
      case 'Wgs84ItrfDonusumu':
      case 'ItrfWgs84Donusumu':
      case 'AracCubugu':
      case 'Boyut':
      case 'Alan':
      case 'WktAlan':
      case 'Bolge':
      case 'Mesafe':
      case 'Temizle':
      case 'Lokasyon':
      case 'BilgiAl':
      case 'Dil':
      case 'DilGetir':
      case 'EkranKlavyesi':
      case 'TekParmakPasif':
        if (methodName.indexOf('Marker') > -1) {
          if (methodName == 'MarkerEkle') {
            methodName = 'IsaretciEkle';
          } else if (methodName == 'TopluMarkerEkle') {
            methodName = 'TopluIsaretciEkle';
          } else if (methodName == 'MarkerTemizle') {
            methodName = 'IsaretciTemizle';
          }
        }
        eval('CallBack' + methodName + '(' + args + ');');
        if (
          methodName != 'Tiklaninca' &&
          methodName != 'TiklamaKaldir' &&
          methodName != 'AciDegisince' &&
          methodName != 'AciDegisinceKaldir' &&
          methodName != 'PanoramaKonumDegisince' &&
          methodName != 'PanoramaKonumDegisinceKaldir' &&
          methodName != 'HaritaOrtaNokta'
        ) {
          eval('let CallBack' + methodName + ' = function(){ }');
        }
        break;
      default:
        break;
    }
  }

  Map = {
    OnClick: (
      callback?: (
        lat: number,
        lon: number,
        zoom: number,
        clickDirection: string,
        pixelX: number,
        pixelY: number
      ) => void
    ) => {
      if (callback) {
        CallBackTiklaninca = callback;
        this.GetIframeWindow().postMessage('Tiklaninca|', '*');
      }
    },
    UnClick: () => {
      this.GetIframeWindow().postMessage('TiklamaKaldir|', '*');
    },
    GetLastClickedPoint: (
      callback?: (lat: number, lon: number, zoom: number) => void
    ) => {
      if (callback) CallBackSonTiklananNokta = callback;
      this.GetIframeWindow().postMessage('SonTiklananNokta|', '*');
    },
    GetZoom: (callback?: (zoom: number) => void) => {
      if (callback) CallBackZoomSeviyesi = callback;
      this.GetIframeWindow().postMessage('ZoomSeviyesi|', '*');
    },
    SetZoom: (options: { zoom: number }, callback?: () => void) => {
      // options: zoom
      if (callback) CallBackZoomSeviyesi = callback;
      this.GetIframeWindow().postMessage(
        'ZoomSeviyesiDegistir|' + options.zoom,
        '*'
      );
    },
    GetCenter: (callback?: (lat: number, lon: number) => void) => {
      if (callback) CallBackHaritaOrtaNokta = callback;
      this.GetIframeWindow().postMessage('HaritaOrtaNokta|', '*');
    },
    Goto: (options: GoToParams): void => {
      this.GetIframeWindow().postMessage(
        'KonumaGit|' +
          options.lat +
          '|' +
          options.lon +
          '|' +
          options.zoom +
          '|' +
          options.effect,
        '*'
      );
    },
    FixCoordinate: (options: FixCoordinateParams, callback?: () => void) => {
      if (callback) CallBackSabitKoordinat = callback;
      else CallBackSabitKoordinat = () => {};
      this.GetIframeWindow().postMessage(
        'SabitKoordinat|' +
          options.lat +
          '|' +
          options.lon +
          '|' +
          options.zoom +
          '|' +
          options.maxZoom +
          '|' +
          options.minZoom,
        '*'
      );
    },
    FixExtent: (
      options: {
        minLat: number;
        minLon: number;
        maxLat: number;
        maxLon: number;
        zoom: number;
        maxZoom: number;
        minZoom: number;
        drag: boolean;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackSabitExtent = callback;
      else CallBackSabitExtent = () => {};
      this.GetIframeWindow().postMessage(
        'SabitExtent|' +
          options.minLat +
          '|' +
          options.minLon +
          '|' +
          options.maxLat +
          '|' +
          options.maxLon +
          '|' +
          options.drag +
          '|' +
          options.zoom +
          '|' +
          options.maxZoom +
          '|' +
          options.minZoom,
        '*'
      );
    },
    FixRelease: () => {
      this.GetIframeWindow().postMessage('SerbestKoordinat|', '*');
    },
    OnlyMap: (callback?: () => void) => {
      if (callback) CallBackSadeceHarita = callback;
      this.GetIframeWindow().postMessage('SadeceHarita|', '*');
    },
    Print: (callback?: () => void) => {
      if (callback) CallBackYazdir = callback;
      this.GetIframeWindow().postMessage('Yazdir|', '*');
    },
    Toolbar: (options?: ToolbarParams, callback?: () => void) => {
      if (callback) CallBackAracCubugu = callback;
      if (!options) options = {};
      this.GetIframeWindow().postMessage(
        'AracCubugu|' +
          options.network +
          '|' +
          options.panorama +
          '|' +
          options.layers +
          '|' +
          options.menu +
          '|' +
          options.search +
          '|' +
          options.language +
          '|' +
          options.traffic +
          '|' +
          options.mapSwitch +
          '|' +
          options.label +
          '|' +
          options.coordinate +
          '|' +
          options.clear +
          '|' +
          options.measure +
          '|' +
          options.print +
          '|' +
          options.location +
          '|' +
          options.zoomIn +
          '|' +
          options.zoomOut +
          '|' +
          options.rightMenu +
          '|' +
          options.legend,
        '*'
      );
    },
    ZoomIn: (callback?: () => void) => {
      if (callback) CallBackYaklas = callback;
      this.GetIframeWindow().postMessage('Yaklas|', '*');
    },
    ZoomOut: (callback?: () => void) => {
      if (callback) CallBackUzaklas = callback;
      this.GetIframeWindow().postMessage('Uzaklas|', '*');
    },
    GetSize: (callback?: (en: number, boy: number) => void) => {
      if (callback) CallBackBoyut = callback;
      this.GetIframeWindow().postMessage('Boyut|', '*');
    },
    GetExtent: (
      callback?: (
        minX: number,
        minY: number,
        maxX: number,
        maxY: number
      ) => void
    ) => {
      if (callback) CallBackAlan = callback;
      this.GetIframeWindow().postMessage('Alan|', '*');
    },
    GotoExtent: (
      options: {
        minLon: number;
        minLat: number;
        maxLon: number;
        maxLat: number;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackKonumaExtentleGit = callback;
      else CallBackKonumaExtentleGit = () => {};
      this.GetIframeWindow().postMessage(
        'KonumaExtentleGit|' +
          options.minLat +
          '|' +
          options.minLon +
          '|' +
          options.maxLat +
          '|' +
          options.maxLon,
        '*'
      );
    },
    GetInformation: (
      options: {
        lon: number;
        lat: number;
        title: string;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackBilgiAl = callback;
      this.GetIframeWindow().postMessage(
        'BilgiAl|' + options.lat + '|' + options.lon + '|' + options.title,
        '*'
      );
    },
    GetLocation: (callback?: () => void) => {
      if (callback) CallBackLokasyon = callback;
      this.GetIframeWindow().postMessage('Lokasyon|', '*');
    },
    AreaMeasure: (callback?: () => void) => {
      if (callback) CallBackBolge = callback;
      this.GetIframeWindow().postMessage('Bolge|', '*');
    },
    LineMeasure: (callback?: () => void) => {
      if (callback) CallBackMesafe = callback;
      this.GetIframeWindow().postMessage('Mesafe|', '*');
    },
    Clear: (callback?: () => void) => {
      if (callback) CallBackTemizle = callback;
      this.GetIframeWindow().postMessage('Temizle|', '*');
    },
    Language: (
      options: {
        language?: string;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackDil = callback;
      if (!options) options = {};
      if (!options.language) options.language = options.language;
      this.GetIframeWindow().postMessage('Dil|' + options.language, '*');
    },
    Reset: (callback?: () => void) => {
      if (callback) CallBackReset = callback;
      this.GetIframeWindow().postMessage('Reset|', '*');
    },
    CloseSlide: (options: {
      minLon: number;
      minLat: number;
      maxLon: number;
      maxLat: number;
      zoom: number;
      maxZoom: number;
      minZoom: number;
      drag: boolean;
    }) => {
      this.GetIframeWindow().postMessage(
        'KaydirKapat|' +
          options.minLat +
          '|' +
          options.minLon +
          '|' +
          options.maxLat +
          '|' +
          options.maxLon +
          '|' +
          options.drag +
          '|' +
          options.zoom +
          '|' +
          options.maxZoom +
          '|' +
          options.minZoom,
        '*'
      );
    },
    GetLanguage: (callback?: () => void) => {
      if (callback) CallBackDilGetir = callback;
      this.GetIframeWindow().postMessage('DilGetir|', '*');
    },
    Rotate: (
      options: {
        rotate: any;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackHaritaDondur = callback;
      this.GetIframeWindow().postMessage('HaritaDondur|' + options.rotate, '*');
    },
    ScreenKeyboard: (callback?: () => void) => {
      if (callback) CallBackEkranKlavyesi = callback;
      this.GetIframeWindow().postMessage('EkranKlavyesi|', '*');
    },
    MobileSinglePassive: (callback?: () => void) => {
      if (callback) CallBackTekParmakPasif = callback;
      this.GetIframeWindow().postMessage('TekParmakPasif|', '*');
    },
  };

  Marker = {
    // Haritada istenilen bir konuma işaretçi atar, zoom çeker ve bilgi penceresi yerleştirir
    Add: (
      options: AddMarkerParams,
      callback?: (id: string, tag: string) => void
    ) => {
      if (callback) CallBackIsaretciEkle = callback;
      else CallBackIsaretciEkle = function () {};
      if (!options.iconUrl) options.iconUrl = this.icons.Default;
      if (!options.style) options.style = {};
      this.GetIframeWindow().postMessage(
        'IsaretciEkle|' +
          options.lat +
          '|' +
          options.lon +
          '|' +
          options.anchorX +
          '|' +
          options.anchorY +
          '|' +
          options.zoom +
          '|' +
          options.effect +
          '|' +
          options.content +
          '|' +
          options.iconUrl +
          '|' +
          options.imageX +
          '|' +
          options.imageY +
          '|' +
          options.center +
          '|' +
          options.toolbar +
          '|' +
          options.draggable +
          '|' +
          options.showPopover +
          '|' +
          options.title +
          '|' +
          options.gotoPosition +
          '|' +
          options.tag +
          '|' +
          options.opacity +
          '|' +
          options.closeotherpopups +
          '|' +
          options.cluster +
          '|' +
          options.shareText +
          '|' +
          options.style.maxWidth +
          '|',
        '*'
      );
    },
    Remove: (options?: { id: string }) => {
      this.GetIframeWindow().postMessage(
        'IsaretciTemizle|' + options?.id + '|',
        '*'
      );
    },
    OnDrag: (callback?: (id: string, lat: number, lon: number) => void) => {
      if (callback) CallBackIsaretciYerDegistirince = callback;
    },
    OnClick: (callback?: (id: string, tag: string) => void) => {
      if (callback) CallBackIsaretciTiklaninca = callback;
    },
    Batch: (options: { markers: any }, callback?: () => void) => {
      if (callback) CallBackTopluIsaretciEkle = callback;
      else CallBackTopluIsaretciEkle = function () {};
      this.GetIframeWindow().postMessage(
        'TopluIsaretciEkle|' + options.markers,
        '*'
      );
    },
    Cluster: (
      options: { markers: MarkerClustorParams },
      callback?: () => void
    ) => {
      if (callback) CallBackClusterEkle = callback;
      else CallBackClusterEkle = function () {};
      this.GetIframeWindow().postMessage(
        'ClusterEkle|' + JSON.stringify(options.markers),
        '*'
      );
    },
  };

  Draw = {
    WKT: (
      options: {
        wkt: string;
        style: Style;
        tag: string;
        zoom: boolean;
        effect: boolean;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackCiz = callback;
      this.GetIframeWindow().postMessage(
        'Ciz|' +
          options.wkt +
          '|' +
          options.zoom +
          '|' +
          options.tag +
          '|' +
          options.style.fillColor +
          '|' +
          options.style.fillOpacity +
          '|' +
          options.style.strokeColor +
          '|' +
          options.style.strokeOpacity +
          '|' +
          options.style.strokeWidth +
          '|' +
          options.style.strokeDashStyle +
          '|' +
          options.effect,
        '*'
      );
    },
    Remove: (options: { id: string }, callback?: () => void) => {
      if (callback) CallBackCizimTemizle = callback;
      this.GetIframeWindow().postMessage('CizimTemizle|' + options.id, '*');
    },
    ShowToolbox: (callback?: () => void) => {
      if (callback) CallBackCizimEditoruGetir = callback;
      this.GetIframeWindow().postMessage('CizimEditoruGetir|', '*');
    },
    Finish: (callback?: () => void) => {
      if (callback) CallBackCizimEditoruGetir = callback;
      this.GetIframeWindow().postMessage('CizimPasiflestir|', '*');
    },
    Select: (options: { id: string }, callback?: () => void) => {
      if (callback) CallBackCizimEditoruGetir = callback;
      this.GetIframeWindow().postMessage('CizimSec|' + options.id, '*');
    },
    Start: (
      options: {
        drawingStyle: Style;
        cursorStyle: Style & { radius: number };
        style: Style;
        type: string;
        draggable: boolean;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackTurileCizim = callback;
      let parameters = options.type + '|' + options.draggable + '|';
      parameters +=
        options.drawingStyle.fillColor +
        '|' +
        options.drawingStyle.fillOpacity +
        '|' +
        options.drawingStyle.strokeColor +
        '|' +
        options.drawingStyle.strokeOpacity +
        '|' +
        options.drawingStyle.strokeWidth +
        '|' +
        options.drawingStyle.strokeDashStyle +
        '|';
      parameters +=
        options.cursorStyle.fillColor +
        '|' +
        options.cursorStyle.fillOpacity +
        '|' +
        options.cursorStyle.strokeColor +
        '|' +
        options.cursorStyle.strokeOpacity +
        '|' +
        options.cursorStyle.strokeWidth +
        '|' +
        options.cursorStyle.strokeDashStyle +
        '|' +
        options.cursorStyle.radius +
        '|';
      parameters +=
        options.style.fillColor +
        '|' +
        options.style.fillOpacity +
        '|' +
        options.style.strokeColor +
        '|' +
        options.style.strokeOpacity +
        '|' +
        options.style.strokeWidth +
        '|' +
        options.style.strokeDashStyle;
      this.GetIframeWindow().postMessage('TurileCizim|' + parameters, '*');
    },
    SetStyle: (
      options: {
        id: string;
        style: Style;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackCizimDegistir = callback;
      let parameters =
        options.id +
        '|' +
        options.style.fillColor +
        '|' +
        options.style.fillOpacity +
        '|' +
        options.style.strokeColor +
        '|' +
        options.style.strokeOpacity +
        '|' +
        options.style.strokeWidth +
        '|' +
        options.style.strokeDashStyle;
      this.GetIframeWindow().postMessage('CizimDegistir|' + parameters, '*');
    },
    Edit: (callback?: () => void) => {
      if (callback) CallBackCizimDuzenle = callback;
      this.GetIframeWindow().postMessage('CizimDuzenle|', '*');
    },
    RemoveSelected: (callback?: () => void) => {
      if (callback) CallBackCizimEditoruGetir = callback;
      this.GetIframeWindow().postMessage('CizimSil|', '*');
    },
    OnDrag: (callback?: () => void) => {
      if (callback) CallBackCizimYerDegistirince = callback;
    },
    OnClick: (callback?: () => void) => {
      if (callback) CallBackCizimTiklaninca = callback;
    },
  };

  Search = {
    Open: (options: { query: string }, callback?: () => void) => {
      if (callback) CallBackArama = callback;
      this.GetIframeWindow().postMessage(
        'Arama|' + true + '|' + options.query,
        '*'
      );
    },
    Close: (callback?: () => void) => {
      if (callback) CallBackAramaKapat = callback;
      this.GetIframeWindow().postMessage('AramaKapat|', '*');
    },
    GetState: (callback?: () => void) => {
      if (callback) CallBackAramaDurum = callback;
      this.GetIframeWindow().postMessage('AramaDurum|', '*');
    },
  };

  Nearby = {
    Open: (options: NearbyOpenParams, callback?: () => void) => {
      if (callback) CallBackYakinimdaAra = callback;
      this.GetIframeWindow().postMessage(
        'YakinimdaAra|' +
          options.lat +
          '|' +
          options.lon +
          '|' +
          options.type +
          '|' +
          options.distance,
        '*'
      );
    },
    Close: (callback?: () => void) => {
      if (callback) CallBackYakinimdaAraKapat = callback;
      this.GetIframeWindow().postMessage('YakinimdaAraKapat|', '*');
    },
    GetState: (callback?: () => void) => {
      if (callback) CallBackYakinimdaAraDurum = callback;
      this.GetIframeWindow().postMessage('YakinimdaAraDurum|', '*');
    },
  };

  RouteAnalysis = {
    Drive: (
      options: {
        start: {
          lat: number;
          lon: number;
        };
        finish: {
          lat: number;
          lon: number;
        };
        waystation?: any;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackYolTarifi = callback;
      this.GetIframeWindow().postMessage(
        'YolTarifi|' +
          options.start.lat +
          '|' +
          options.start.lon +
          '|' +
          options.waystation +
          '|' +
          options.finish.lat +
          '|' +
          options.finish.lon,
        '*'
      );
    },
    TUBS: (
      options: {
        start: {
          lat: number;
          lon: number;
        };
        finish: {
          lat: number;
          lon: number;
        };
        type: string;
        time: string;
        date: string;
        noparameter?: any;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackYolTarifi = callback;
      this.GetIframeWindow().postMessage(
        'TUBS|' +
          options.start.lat +
          '|' +
          options.start.lon +
          '|' +
          options.finish.lat +
          '|' +
          options.finish.lon +
          '|' +
          options.type +
          '|' +
          options.time +
          '|' +
          options.date +
          '|' +
          options.noparameter,
        '*'
      );
    },
    Close: (callback?: () => void) => {
      if (callback) CallBackGuzergahGizle = callback;
      this.GetIframeWindow().postMessage('GuzergahKapat|', '*');
    },
    HideTUBS: (callback?: () => void) => {
      if (callback) CallBackTUBSGizle = callback;
      this.GetIframeWindow().postMessage('TUBSGizle|', '*');
    },
    HideDrive: (callback?: () => void) => {
      if (callback) CallBackTarifGizle = callback;
      this.GetIframeWindow().postMessage('YolTarifGizle|', '*');
    },
    GetState: (callback?: () => void) => {
      if (callback) CallBackGuzergahDurum = callback;
      this.GetIframeWindow().postMessage('GuzergahDurum|', '*');
    },
    Share: (callback?: () => void) => {
      if (callback) CallBackTarifPaylasim = callback;
      this.GetIframeWindow().postMessage('TarifPaylasim|', '*');
    },
  };

  Panorama = {
    Open: (
      options: { lat: number; lon: number; angle: number },
      callback?: () => void
    ) => {
      if (callback) CallBackPanorama = callback;
      this.GetIframeWindow().postMessage(
        'Panorama|' + options.lat + '|' + options.lon + '|' + options.angle,
        '*'
      );
    },
    Close: (callback?: () => void) => {
      if (callback) CallBackPanoramaKapat = callback;
      this.GetIframeWindow().postMessage('PanoramaKapat|', '*');
    },
    GetState: (callback?: () => void) => {
      if (callback) CallBackPanoramaDurum = callback;
      this.GetIframeWindow().postMessage('PanoramaDurum|', '*');
    },
    GetAngle: (callback?: () => void) => {
      if (callback) CallBackAciGetir = callback;
      this.GetIframeWindow().postMessage('AciGetir|', '*');
    },
    SetAngle: (options: { angle: number }, callback?: () => void) => {
      if (callback) CallBackAciDegistir = callback;
      this.GetIframeWindow().postMessage('AciDegistir|' + options.angle, '*');
    },
    OnAngleChanged: (callback?: () => void) => {
      if (callback) {
        CallBackAciDegisince = callback;
        this.GetIframeWindow().postMessage('AciDegisince|', '*');
      }
    },
    UnAngleChanged: () => {
      this.GetIframeWindow().postMessage('AciDegisinceKaldir|', '*');
    },
    OnPositionChanged: (callback?: () => void) => {
      if (callback) {
        CallBackPanoramaKonumDegisince = callback;
        this.GetIframeWindow().postMessage('PanoramaKonumDegisince|', '*');
      }
    },
    UnPositionChanged: () => {
      this.GetIframeWindow().postMessage('PanoramaKonumDegisinceKaldir|', '*');
    },
  };

  InformationServices = {
    ReturnData: (
      options?: { district: string; type?: any },
      callback?: () => void
    ) => {
      if (callback) CallBackBilgiData = callback;
      if (!options) options = { district: '' };
      this.GetIframeWindow().postMessage(
        'BilgiServisData|' + options.type + '|' + options.district,
        '*'
      );
    },
    Bazaar: (options?: { district: string }, callback?: () => void) => {
      if (callback) CallBackPazar = callback;
      if (!options) options = { district: '' };
      this.GetIframeWindow().postMessage('Pazar|' + options.district, '*');
    },
    Pharmacy: (options?: { district: string }, callback?: () => void) => {
      if (callback) CallBackEczane = callback;
      if (!options) options = { district: '' };
      this.GetIframeWindow().postMessage('Eczane|' + options.district, '*');
    },
    Sports: (options?: { district: string }, callback?: () => void) => {
      if (callback) CallBackSpor = callback;
      if (!options) options = { district: '' };
      this.GetIframeWindow().postMessage('Spor|' + options.district, '*');
    },
    Social: (options?: { district: string }, callback?: () => void) => {
      if (callback) CallBackSosyal = callback;
      if (!options) options = { district: '' };
      this.GetIframeWindow().postMessage('Sosyal|' + options.district, '*');
    },
    Contact: (options?: { district: string }, callback?: () => void) => {
      if (callback) CallBackIletisim = callback;
      if (!options) options = { district: '' };
      this.GetIframeWindow().postMessage('Iletisim|' + options.district, '*');
    },
    StoryIstanbul: (options?: { language: string }, callback?: () => void) => {
      if (callback) CallBackHikaye = callback;
      if (!options) options = { language: '' };
      this.GetIframeWindow().postMessage('Hikaye|' + options.language, '*');
    },
    StoryIstanbulOnClose: (callback?: () => void) => {
      if (callback) CallBackHikayeKapaninca = callback;
      this.GetIframeWindow().postMessage('HikayeKapaninca|', '*');
    },
    Close: (callback?: () => void) => {
      if (callback) CallBackBilgiKapat = callback;
      this.GetIframeWindow().postMessage('BilgiKapat|', '*');
    },
  };

  Layers = {
    Add: (
      options: {
        url: string;
        name: string;
        type: string;
        visibility: boolean;
        opacity: number;
        layers: string;
        nocache: boolean;
        legend: {
          tr?: any;
          en?: any;
          url?: any;
        };
        layerDefinitions?: any;
        isBaseLayer?: any;
      },
      callback?: () => void
    ) => {
      if (callback) CallBackKatmanEkle = callback;
      if (!options.legend) options.legend = {};
      if (!options.type) options.type = this.layerTypes.Default;
      this.GetIframeWindow().postMessage(
        'KatmanEkle|' +
          options.url +
          '|' +
          options.name +
          '|' +
          options.visibility +
          '|' +
          options.type +
          '|' +
          options.opacity +
          '|' +
          options.layers +
          '|' +
          options.nocache +
          '|' +
          options.legend.tr +
          '|' +
          options.legend.en +
          '|' +
          options.legend.url +
          '|' +
          options.layerDefinitions +
          '|' +
          options.isBaseLayer,
        '*'
      );
    },
    Remove: (options: { name: string }, callback?: () => void) => {
      // options: name
      if (callback) CallBackKatmanKaldir = callback;
      this.GetIframeWindow().postMessage('KatmanKaldir|' + options.name, '*');
    },
    SetOpacity: (options: { name: string; opacity: number }) => {
      this.GetIframeWindow().postMessage(
        'KatmanSaydamlikDegistir|' + options.name + '|' + options.opacity,
        '*'
      );
    },
    GetOpacity: (options: { name: string }, callback?: () => void) => {
      if (callback) CallBackKatmanSaydamlikGetir = callback;
      this.GetIframeWindow().postMessage(
        'KatmanSaydamlikGetir|' + options.name,
        '*'
      );
    },
    ShowToolbox: (options: {
      hiddenLayers: string;
      layers?: string;
      subLayers?: any;
      onlyLayersName?: any;
      width?: any;
      height?: any;
      click?: any;
    }) => {
      if (!options.layers) options.layers = this.layers.Default;
      this.GetIframeWindow().postMessage(
        'KatmanYoneticisiGetir|' +
          options.hiddenLayers +
          '|' +
          options.subLayers +
          '|' +
          options.onlyLayersName +
          '|' +
          options.width +
          '|' +
          options.height +
          '|' +
          options.click,
        '*'
      );
    },
    GetActiveLayers: (callback?: () => void) => {
      if (callback) CallBackAltlikKatmanListele = callback;
      this.GetIframeWindow().postMessage('AltlikKatmanListele|', '*');
    },
    GetBaseLayer: (callback?: () => void) => {
      if (callback) CallBackAltlikKatmanGetir = callback;
      this.GetIframeWindow().postMessage('AltlikKatmanGetir|', '*');
    },
    SetBaseLayer: (options: { name: string }, callback?: () => void) => {
      if (callback) CallBackAltlikKatmanAyarla = callback;
      this.GetIframeWindow().postMessage(
        'AltlikKatmanAyarla|' + options.name,
        '*'
      );
    },
    ShowTrafficLayer: (callback?: () => void) => {
      if (callback) CallBackTrafik = callback;
      this.GetIframeWindow().postMessage('Trafik|', '*');
    },
    //trafik katmanını kapatır
    HideTrafficLayer: (callback?: () => void) => {
      if (callback) CallBackTrafikKaldir = callback;
      this.GetIframeWindow().postMessage('TrafikKaldir|', '*');
    },
  };

  Convert = {
    ITRFtoWGS84: (
      options: { lat: number; lon: number },
      callback?: () => void
    ) => {
      if (callback) CallBackItrfWgs84Donusumu = callback;
      this.GetIframeWindow().postMessage(
        'ItrfWgs84Donusumu|' + options.lat + '|' + options.lon,
        '*'
      );
    },
    WGS84toITRF: (
      options: { lat: number; lon: number },
      callback?: () => void
    ) => {
      if (callback) CallBackWgs84ItrfDonusumu = callback;
      this.GetIframeWindow().postMessage(
        'Wgs84ItrfDonusumu|' + options.lat + '|' + options.lon,
        '*'
      );
    },
  };

  Calculate = {
    WktExtent: (options: { wkt: string }, callback?: () => void) => {
      if (callback) CallBackWktAlan = callback;
      this.GetIframeWindow().postMessage('WktAlan|' + options.wkt, '*');
    },
  };
}
