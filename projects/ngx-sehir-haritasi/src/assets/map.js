var CallBackTiklaninca = function (lat, lon, zoom, clickDirection, pixelX, pixelY) { };
var CallBackTiklamaKaldir = function () {
    CallBackTiklaninca = function (lat, lon, zoom, clickDirection, pixelX, pixelY) { };
};
var CallBackAciDegisince = function () { };
var CallBackAciDegisinceKaldir = function () {
    CallBackAciDegisince = function () { };
};
var CallBackAciDegistir = function () { };
var CallBackPanoramaKonumDegisince = function () { };
var CallBackPanoramaKonumDegisinceKaldir = function () {
    CallBackPanoramaKonumDegisince = function () { };
};
var CallBackZoomSeviyesiDegistir = function () { };
var CallBackAciGetir = function () { };
var CallBackSonTiklananNokta = function (lat, lon, zoom) { };
var CallBackZoomSeviyesi = function (zoom) { };
var CallBackHaritaOrtaNokta = function (lat, lon) { };
var CallBackKonumaGit = function () { };
var CallBackKonumaExtentleGit = function () { };
var CallBackSadeceHarita = function () { };
var CallBackAltlikKatmanListele = function () { };
var CallBackAltlikKatmanGetir = function () { };
var CallBackAltlikKatmanAyarla = function () { };
var CallBackIsaretciYerDegistirince = function (id, lat, lon) { };
var CallBackIsaretciTiklaninca = function (id, tag) { };
var CallBackIsaretciEkle = function (id, tag) { };
var CallBackClusterEkle = function () { };
var CallBackTopluIsaretciEkle = function () { };
var CallBackIsaretciTemizle = function () { };
var CallBackCiz = function () { };
var CallBackCizimTemizle = function () { };
var CallBackCizimEditoruGetir = function () { };
var CallBackCizimPasiflestir = function () { };
var CallBackCizimDuzenle = function () { };
var CallBackCizimSil = function () { };
var CallBackCizimYerDegistirince = function () { };
var CallBackCizimTiklaninca = function () { };
var CallBackTurileCizim = function () { };
var CallBackCizimDegistir = function () { };
var CallBackCizimSec = function () { };
var CallBackYakinimdaAra = function () { };
var CallBackYakinimdaAraKapat = function () { };
var CallBackYakinimdaAraDurum = function () { };
var CallBackYolTarifi = function () { };
var CallBackTUBS = function () { };
var CallBackGuzergahKapat = function () { };
var CallBackTUBSGizle = function () { };
var CallBackTarifGizle = function () { };
var CallBackGuzergahDurum = function () { };
var CallBackTarifPaylasim = function () { };
var CallBackPanorama = function () { };
var CallBackPanoramaKapat = function () { };
var CallBackPanoramaDurum = function () { };
var CallBackTrafik = function () { };
var CallBackTrafikKaldir = function () { };
var CallBackArama = function () { };
var CallBackAramaKapat = function () { };
var CallBackAramaDurum = function () { };
var CallBackYazdir = function () { };
var CallBackYaklas = function () { };
var CallBackUzaklas = function () { };
var CallBackBilgiKapat = function () { };
var CallBackEczane = function () { };
var CallBackPazar = function () { };
var CallBackBilgiData = function () { };
var CallBackSpor = function () { };
var CallBackSosyal = function () { };
var CallBackIletisim = function () { };
var CallBackHikaye = function () { };
var HikayeKapaninca = function () { };
var CallBackKatmanEkle = function () { };
var CallBackKatmanKaldir = function () { };
var CallBackKatmanSaydamlikGetir = function () { };
var CallBackKatmanYoneticisiGetir = function () { };
var CallBackItrfWgs84Donusumu = function () { };
var CallBackWgs84ItrfDonusumu = function () { };
var CallBackAracCubugu = function () { };
var CallBackBoyut = function (en, boy) { };
var CallBackAlan = function (minX, minY, maxX, maxY) { };
var CallBackWktAlan = function () { };
var CallBackSabitKoordinat = function () { };
var CallBackSabitExtent = function () { };
var CallBackSerbestKoordinat = function () { };
var CallBackBolge = function () { };
var CallBackMesafe = function () { };
var CallBackTemizle = function () { };
var CallBackLokasyon = function () { };
var CallBackBilgiAl = function () { };
var CallBackDil = function () { };
var CallBackDilGetir = function () { };
var CallBackHaritaDondur = function () { };
var CallBackEkranKlavyesi = function () { };
var CallBackTekParmakPasif = function () { };
var CallBackReset = function () { };
var CallBackGuzergahGizle = function () { };
var CallBackHikayeKapaninca = function () { };
var SehirHaritasiAPI = /** @class */ (function () {
    function SehirHaritasiAPI(options, callback) {
        var _this = this;
        this.version = '2.0.3';
        this.updateDate = '20.04.2016';
        this.icons = {
            Default: 'http://sehirharitasi.ibb.gov.tr/images/markers/searched.png',
            DefaultLarge: 'http://sehirharitasi.ibb.gov.tr/images/markers/hedef.png',
            Info: 'http://sehirharitasi.ibb.gov.tr/images/markers/location.png',
            Start: 'http://sehirharitasi.ibb.gov.tr/images/markers/baslangic.png',
            Finish: 'http://sehirharitasi.ibb.gov.tr/images/markers/bitis.png',
            WayPoint: 'http://sehirharitasi.ibb.gov.tr/images/markers/aranokta.png',
            Transfer: 'http://sehirharitasi.ibb.gov.tr/images/markers/aktarma.png',
            Panorama: 'http://sehirharitasi.ibb.gov.tr/images/markers/roi-big.png'
        };
        this.layers = {
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
            Default: ''
        };
        this.layerTypes = {
            Rest: 'REST',
            FeatureRest: 'FEATURE REST',
            ImageWMS: 'IMAGE WMS',
            TileWMS: 'TILE WMS',
            TileImage: 'TILE IMAGE',
            Default: 'REST'
        };
        this.anchors = {
            Left: 'l',
            Right: 'r',
            Center: 'c',
            Top: 't',
            Bottom: 'b'
        };
        this.geomTypes = {
            Point: 'POINT',
            LineString: 'LINESTRING',
            Polygon: 'POLYGON',
            Circle: 'CIRCLE'
        };
        this.colors = {
            Default: '#2AABE3'
        };
        this.Map = {
            OnClick: function (callback) {
                if (callback) {
                    CallBackTiklaninca = callback;
                    _this.GetIframeWindow().postMessage('Tiklaninca|', '*');
                }
            },
            UnClick: function () {
                _this.GetIframeWindow().postMessage('TiklamaKaldir|', '*');
            },
            GetLastClickedPoint: function (callback) {
                if (callback)
                    CallBackSonTiklananNokta = callback;
                _this.GetIframeWindow().postMessage('SonTiklananNokta|', '*');
            },
            GetZoom: function (callback) {
                if (callback)
                    CallBackZoomSeviyesi = callback;
                _this.GetIframeWindow().postMessage('ZoomSeviyesi|', '*');
            },
            SetZoom: function (options, callback) {
                // options: zoom
                if (callback)
                    CallBackZoomSeviyesi = callback;
                _this.GetIframeWindow().postMessage('ZoomSeviyesiDegistir|' + options.zoom, '*');
            },
            GetCenter: function (callback) {
                if (callback)
                    CallBackHaritaOrtaNokta = callback;
                _this.GetIframeWindow().postMessage('HaritaOrtaNokta|', '*');
            },
            Goto: function (options, callback) {
                if (callback)
                    CallBackKonumaGit = callback;
                else
                    CallBackKonumaGit = function () { };
                _this.GetIframeWindow().postMessage('KonumaGit|' +
                    options.lat +
                    '|' +
                    options.lon +
                    '|' +
                    options.zoom +
                    '|' +
                    options.effect, '*');
            },
            FixCoordinate: function (options, callback) {
                if (callback)
                    CallBackSabitKoordinat = callback;
                else
                    CallBackSabitKoordinat = function () { };
                _this.GetIframeWindow().postMessage('SabitKoordinat|' +
                    options.lat +
                    '|' +
                    options.lon +
                    '|' +
                    options.zoom +
                    '|' +
                    options.maxZoom +
                    '|' +
                    options.minZoom, '*');
            },
            FixExtent: function (options, callback) {
                if (callback)
                    CallBackSabitExtent = callback;
                else
                    CallBackSabitExtent = function () { };
                _this.GetIframeWindow().postMessage('SabitExtent|' +
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
                    options.minZoom, '*');
            },
            FixRelease: function (callback) {
                _this.GetIframeWindow().postMessage('SerbestKoordinat|', '*');
            },
            OnlyMap: function (callback) {
                if (callback)
                    CallBackSadeceHarita = callback;
                _this.GetIframeWindow().postMessage('SadeceHarita|', '*');
            },
            Print: function (callback) {
                if (callback)
                    CallBackYazdir = callback;
                _this.GetIframeWindow().postMessage('Yazdir|', '*');
            },
            Toolbar: function (options, callback) {
                if (callback)
                    CallBackAracCubugu = callback;
                if (!options)
                    options = {};
                if (!options.zoomIn)
                    options.zoomIn = options.zoomin;
                if (!options.zoomOut)
                    options.zoomOut = options.zoomout;
                _this.GetIframeWindow().postMessage('AracCubugu|' +
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
                    options.legend, '*');
            },
            ZoomIn: function (callback) {
                if (callback)
                    CallBackYaklas = callback;
                _this.GetIframeWindow().postMessage('Yaklas|', '*');
            },
            ZoomOut: function (callback) {
                if (callback)
                    CallBackUzaklas = callback;
                _this.GetIframeWindow().postMessage('Uzaklas|', '*');
            },
            GetSize: function (callback) {
                if (callback)
                    CallBackBoyut = callback;
                _this.GetIframeWindow().postMessage('Boyut|', '*');
            },
            GetExtent: function (callback) {
                if (callback)
                    CallBackAlan = callback;
                _this.GetIframeWindow().postMessage('Alan|', '*');
            },
            GotoExtent: function (options, callback) {
                if (callback)
                    CallBackKonumaExtentleGit = callback;
                else
                    CallBackKonumaExtentleGit = function () { };
                _this.GetIframeWindow().postMessage('KonumaExtentleGit|' +
                    options.minLat +
                    '|' +
                    options.minLon +
                    '|' +
                    options.maxLat +
                    '|' +
                    options.maxLon, '*');
            },
            GetInformation: function (options, callback) {
                if (callback)
                    CallBackBilgiAl = callback;
                _this.GetIframeWindow().postMessage('BilgiAl|' + options.lat + '|' + options.lon + '|' + options.title, '*');
            },
            GetLocation: function (callback) {
                if (callback)
                    CallBackLokasyon = callback;
                _this.GetIframeWindow().postMessage('Lokasyon|', '*');
            },
            AreaMeasure: function (callback) {
                if (callback)
                    CallBackBolge = callback;
                _this.GetIframeWindow().postMessage('Bolge|', '*');
            },
            LineMeasure: function (callback) {
                if (callback)
                    CallBackMesafe = callback;
                _this.GetIframeWindow().postMessage('Mesafe|', '*');
            },
            Clear: function (callback) {
                if (callback)
                    CallBackTemizle = callback;
                _this.GetIframeWindow().postMessage('Temizle|', '*');
            },
            Language: function (options, callback) {
                if (callback)
                    CallBackDil = callback;
                if (!options)
                    options = {};
                if (!options.language)
                    options.language = options.language;
                _this.GetIframeWindow().postMessage('Dil|' + options.language, '*');
            },
            Reset: function (callback) {
                if (callback)
                    CallBackReset = callback;
                _this.GetIframeWindow().postMessage('Reset|', '*');
            },
            CloseSlide: function (options) {
                _this.GetIframeWindow().postMessage('KaydirKapat|' +
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
                    options.minZoom, '*');
            },
            GetLanguage: function (callback) {
                if (callback)
                    CallBackDilGetir = callback;
                _this.GetIframeWindow().postMessage('DilGetir|', '*');
            },
            Rotate: function (options, callback) {
                if (callback)
                    CallBackHaritaDondur = callback;
                _this.GetIframeWindow().postMessage('HaritaDondur|' + options.rotate, '*');
            },
            ScreenKeyboard: function (callback) {
                if (callback)
                    CallBackEkranKlavyesi = callback;
                _this.GetIframeWindow().postMessage('EkranKlavyesi|', '*');
            },
            MobileSinglePassive: function (callback) {
                if (callback)
                    CallBackTekParmakPasif = callback;
                _this.GetIframeWindow().postMessage('TekParmakPasif|', '*');
            }
        };
        this.Marker = {
            // Haritada istenilen bir konuma işaretçi atar, zoom çeker ve bilgi penceresi yerleştirir
            Add: function (options, callback) {
                if (callback)
                    CallBackIsaretciEkle = callback;
                else
                    CallBackIsaretciEkle = function () { };
                if (!options.iconUrl)
                    options.iconUrl = _this.icons.Default;
                if (!options.style)
                    options.style = {};
                _this.GetIframeWindow().postMessage('IsaretciEkle|' +
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
                    '|', '*');
            },
            Remove: function (options, callback) {
                // options: id
                if (callback)
                    CallBackIsaretciTemizle = callback;
                else
                    CallBackIsaretciTemizle = function () { };
                _this.GetIframeWindow().postMessage('IsaretciTemizle|' + options.id + '|', '*');
            },
            OnDrag: function (callback) {
                if (callback)
                    CallBackIsaretciYerDegistirince = callback;
            },
            OnClick: function (callback) {
                if (callback)
                    CallBackIsaretciTiklaninca = callback;
            },
            Batch: function (options, callback) {
                if (callback)
                    CallBackTopluIsaretciEkle = callback;
                else
                    CallBackTopluIsaretciEkle = function () { };
                _this.GetIframeWindow().postMessage('TopluIsaretciEkle|' + options.markers, '*');
            },
            Cluster: function (options, callback) {
                if (callback)
                    CallBackClusterEkle = callback;
                else
                    CallBackClusterEkle = function () { };
                _this.GetIframeWindow().postMessage('ClusterEkle|' + JSON.stringify(options.markers), '*');
            }
        };
        this.Draw = {
            WKT: function (options, callback) {
                if (callback)
                    CallBackCiz = callback;
                _this.GetIframeWindow().postMessage('Ciz|' +
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
                    options.effect, '*');
            },
            Remove: function (options, callback) {
                if (callback)
                    CallBackCizimTemizle = callback;
                _this.GetIframeWindow().postMessage('CizimTemizle|' + options.id, '*');
            },
            ShowToolbox: function (callback) {
                if (callback)
                    CallBackCizimEditoruGetir = callback;
                _this.GetIframeWindow().postMessage('CizimEditoruGetir|', '*');
            },
            Finish: function (callback) {
                if (callback)
                    CallBackCizimEditoruGetir = callback;
                _this.GetIframeWindow().postMessage('CizimPasiflestir|', '*');
            },
            Select: function (options, callback) {
                if (callback)
                    CallBackCizimEditoruGetir = callback;
                _this.GetIframeWindow().postMessage('CizimSec|' + options.id, '*');
            },
            Start: function (options, callback) {
                if (callback)
                    CallBackTurileCizim = callback;
                var parameters = options.type + '|' + options.draggable + '|';
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
                _this.GetIframeWindow().postMessage('TurileCizim|' + parameters, '*');
            },
            SetStyle: function (options, callback) {
                if (callback)
                    CallBackCizimDegistir = callback;
                var parameters = options.id +
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
                _this.GetIframeWindow().postMessage('CizimDegistir|' + parameters, '*');
            },
            Edit: function (callback) {
                if (callback)
                    CallBackCizimDuzenle = callback;
                _this.GetIframeWindow().postMessage('CizimDuzenle|', '*');
            },
            RemoveSelected: function (callback) {
                if (callback)
                    CallBackCizimEditoruGetir = callback;
                _this.GetIframeWindow().postMessage('CizimSil|', '*');
            },
            OnDrag: function (callback) {
                if (callback)
                    CallBackCizimYerDegistirince = callback;
            },
            OnClick: function (callback) {
                if (callback)
                    CallBackCizimTiklaninca = callback;
            }
        };
        this.Search = {
            Open: function (options, callback) {
                if (callback)
                    CallBackArama = callback;
                _this.GetIframeWindow().postMessage('Arama|' + true + '|' + options.query, '*');
            },
            Close: function (callback) {
                if (callback)
                    CallBackAramaKapat = callback;
                _this.GetIframeWindow().postMessage('AramaKapat|', '*');
            },
            GetState: function (callback) {
                if (callback)
                    CallBackAramaDurum = callback;
                _this.GetIframeWindow().postMessage('AramaDurum|', '*');
            }
        };
        this.Nearby = {
            Open: function (options, callback) {
                if (callback)
                    CallBackYakinimdaAra = callback;
                _this.GetIframeWindow().postMessage('YakinimdaAra|' +
                    options.lat +
                    '|' +
                    options.lon +
                    '|' +
                    options.type +
                    '|' +
                    options.distance, '*');
            },
            Close: function (callback) {
                if (callback)
                    CallBackYakinimdaAraKapat = callback;
                _this.GetIframeWindow().postMessage('YakinimdaAraKapat|', '*');
            },
            GetState: function (callback) {
                if (callback)
                    CallBackYakinimdaAraDurum = callback;
                _this.GetIframeWindow().postMessage('YakinimdaAraDurum|', '*');
            }
        };
        this.RouteAnalysis = {
            Drive: function (options, callback) {
                if (callback)
                    CallBackYolTarifi = callback;
                _this.GetIframeWindow().postMessage('YolTarifi|' +
                    options.start.lat +
                    '|' +
                    options.start.lon +
                    '|' +
                    options.waystation +
                    '|' +
                    options.finish.lat +
                    '|' +
                    options.finish.lon, '*');
            },
            TUBS: function (options, callback) {
                if (callback)
                    CallBackYolTarifi = callback;
                _this.GetIframeWindow().postMessage('TUBS|' +
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
                    options.noparameter, '*');
            },
            Close: function (callback) {
                if (callback)
                    CallBackGuzergahGizle = callback;
                _this.GetIframeWindow().postMessage('GuzergahKapat|', '*');
            },
            HideTUBS: function (callback) {
                if (callback)
                    CallBackTUBSGizle = callback;
                _this.GetIframeWindow().postMessage('TUBSGizle|', '*');
            },
            HideDrive: function (callback) {
                if (callback)
                    CallBackTarifGizle = callback;
                _this.GetIframeWindow().postMessage('YolTarifGizle|', '*');
            },
            GetState: function (callback) {
                if (callback)
                    CallBackGuzergahDurum = callback;
                _this.GetIframeWindow().postMessage('GuzergahDurum|', '*');
            },
            Share: function (callback) {
                if (callback)
                    CallBackTarifPaylasim = callback;
                _this.GetIframeWindow().postMessage('TarifPaylasim|', '*');
            }
        };
        this.Panorama = {
            Open: function (options, callback) {
                if (callback)
                    CallBackPanorama = callback;
                _this.GetIframeWindow().postMessage('Panorama|' + options.lat + '|' + options.lon + '|' + options.angle, '*');
            },
            Close: function (callback) {
                if (callback)
                    CallBackPanoramaKapat = callback;
                _this.GetIframeWindow().postMessage('PanoramaKapat|', '*');
            },
            GetState: function (callback) {
                if (callback)
                    CallBackPanoramaDurum = callback;
                _this.GetIframeWindow().postMessage('PanoramaDurum|', '*');
            },
            GetAngle: function (callback) {
                if (callback)
                    CallBackAciGetir = callback;
                _this.GetIframeWindow().postMessage('AciGetir|', '*');
            },
            SetAngle: function (options, callback) {
                if (callback)
                    CallBackAciDegistir = callback;
                _this.GetIframeWindow().postMessage('AciDegistir|' + options.angle, '*');
            },
            OnAngleChanged: function (callback) {
                if (callback) {
                    CallBackAciDegisince = callback;
                    _this.GetIframeWindow().postMessage('AciDegisince|', '*');
                }
            },
            UnAngleChanged: function () {
                _this.GetIframeWindow().postMessage('AciDegisinceKaldir|', '*');
            },
            OnPositionChanged: function (callback) {
                if (callback) {
                    CallBackPanoramaKonumDegisince = callback;
                    _this.GetIframeWindow().postMessage('PanoramaKonumDegisince|', '*');
                }
            },
            UnPositionChanged: function () {
                _this.GetIframeWindow().postMessage('PanoramaKonumDegisinceKaldir|', '*');
            }
        };
        this.InformationServices = {
            ReturnData: function (options, callback) {
                if (callback)
                    CallBackBilgiData = callback;
                if (!options)
                    options = { district: '' };
                _this.GetIframeWindow().postMessage('BilgiServisData|' + options.type + '|' + options.district, '*');
            },
            Bazaar: function (options, callback) {
                if (callback)
                    CallBackPazar = callback;
                if (!options)
                    options = { district: '' };
                _this.GetIframeWindow().postMessage('Pazar|' + options.district, '*');
            },
            Pharmacy: function (options, callback) {
                if (callback)
                    CallBackEczane = callback;
                if (!options)
                    options = { district: '' };
                _this.GetIframeWindow().postMessage('Eczane|' + options.district, '*');
            },
            Sports: function (options, callback) {
                if (callback)
                    CallBackSpor = callback;
                if (!options)
                    options = { district: '' };
                _this.GetIframeWindow().postMessage('Spor|' + options.district, '*');
            },
            Social: function (options, callback) {
                if (callback)
                    CallBackSosyal = callback;
                if (!options)
                    options = { district: '' };
                _this.GetIframeWindow().postMessage('Sosyal|' + options.district, '*');
            },
            Contact: function (options, callback) {
                if (callback)
                    CallBackIletisim = callback;
                if (!options)
                    options = { district: '' };
                _this.GetIframeWindow().postMessage('Iletisim|' + options.district, '*');
            },
            StoryIstanbul: function (options, callback) {
                if (callback)
                    CallBackHikaye = callback;
                if (!options)
                    options = { language: '' };
                _this.GetIframeWindow().postMessage('Hikaye|' + options.language, '*');
            },
            StoryIstanbulOnClose: function (callback) {
                if (callback)
                    CallBackHikayeKapaninca = callback;
                _this.GetIframeWindow().postMessage('HikayeKapaninca|', '*');
            },
            Close: function (callback) {
                if (callback)
                    CallBackBilgiKapat = callback;
                _this.GetIframeWindow().postMessage('BilgiKapat|', '*');
            }
        };
        this.Layers = {
            Add: function (options, callback) {
                if (callback)
                    CallBackKatmanEkle = callback;
                if (!options.legend)
                    options.legend = {};
                if (!options.type)
                    options.type = _this.layerTypes.Default;
                _this.GetIframeWindow().postMessage('KatmanEkle|' +
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
                    options.isBaseLayer, '*');
            },
            Remove: function (options, callback) {
                // options: name
                if (callback)
                    CallBackKatmanKaldir = callback;
                _this.GetIframeWindow().postMessage('KatmanKaldir|' + options.name, '*');
            },
            SetOpacity: function (options) {
                _this.GetIframeWindow().postMessage('KatmanSaydamlikDegistir|' + options.name + '|' + options.opacity, '*');
            },
            GetOpacity: function (options, callback) {
                if (callback)
                    CallBackKatmanSaydamlikGetir = callback;
                _this.GetIframeWindow().postMessage('KatmanSaydamlikGetir|' + options.name, '*');
            },
            ShowToolbox: function (options) {
                if (!options.layers)
                    options.layers = _this.layers.Default;
                _this.GetIframeWindow().postMessage('KatmanYoneticisiGetir|' +
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
                    options.click, '*');
            },
            GetActiveLayers: function (callback) {
                if (callback)
                    CallBackAltlikKatmanListele = callback;
                _this.GetIframeWindow().postMessage('AltlikKatmanListele|', '*');
            },
            GetBaseLayer: function (callback) {
                if (callback)
                    CallBackAltlikKatmanGetir = callback;
                _this.GetIframeWindow().postMessage('AltlikKatmanGetir|', '*');
            },
            SetBaseLayer: function (options, callback) {
                if (callback)
                    CallBackAltlikKatmanAyarla = callback;
                _this.GetIframeWindow().postMessage('AltlikKatmanAyarla|' + options.name, '*');
            },
            ShowTrafficLayer: function (callback) {
                if (callback)
                    CallBackTrafik = callback;
                _this.GetIframeWindow().postMessage('Trafik|', '*');
            },
            //trafik katmanını kapatır
            HideTrafficLayer: function (callback) {
                if (callback)
                    CallBackTrafikKaldir = callback;
                _this.GetIframeWindow().postMessage('TrafikKaldir|', '*');
            }
        };
        this.Convert = {
            ITRFtoWGS84: function (options, callback) {
                if (callback)
                    CallBackItrfWgs84Donusumu = callback;
                _this.GetIframeWindow().postMessage('ItrfWgs84Donusumu|' + options.lat + '|' + options.lon, '*');
            },
            WGS84toITRF: function (options, callback) {
                if (callback)
                    CallBackWgs84ItrfDonusumu = callback;
                _this.GetIframeWindow().postMessage('Wgs84ItrfDonusumu|' + options.lat + '|' + options.lon, '*');
            }
        };
        this.Calculate = {
            WktExtent: function (options, callback) {
                if (callback)
                    CallBackWktAlan = callback;
                _this.GetIframeWindow().postMessage('WktAlan|' + options.wkt, '*');
            }
        };
        if (!options || !options.mapFrame || !options.apiKey) {
            throw new Error('mapFrame ve apiKey alanlari tanimli olmali ! API fonksiyonlari kullanilamaz !');
        }
        if (options.mapFrame === '') {
            throw new Error('mapFrame alani tanimli degil !\r\nAPI fonksiyonlari kullanilamaz !');
        }
        if (options.apiKey === '') {
            throw new Error('apiKey alani tanimli degil !\r\nAPI fonksiyonlari kullanilamaz !');
        }
        if (options.apiKey.length !== 32) {
            throw new Error('apiKey alani dogrulanamiyor !\r\nAPI fonksiyonlari kullanilamaz !');
        }
        this.options = options;
        this.Ajax('//cbsproxy.ibb.gov.tr/?UserKeyStatisticsAdd', 'apikey=' + this.options.apiKey, function (data, params) {
            data = JSON.parse(data);
            data = parseInt(data.long['#text']);
            if (data === 0) {
                throw new Error('Gecersiz API KEY');
            }
        }, function (x, a) { });
        addEventListener('message', this.MapListener, false);
        var iframeObj = document.getElementById(options.mapFrame);
        if (callback && iframeObj) {
            iframeObj.onload = callback;
        }
    }
    SehirHaritasiAPI.prototype.GetIframeWindow = function () {
        var doc;
        var iframeObj = document.getElementById(this.options.mapFrame);
        if (iframeObj === null || iframeObj === void 0 ? void 0 : iframeObj.contentWindow) {
            return iframeObj.contentWindow;
        }
        if (iframeObj.window) {
            return iframeObj.window;
        }
        if (!doc && (iframeObj === null || iframeObj === void 0 ? void 0 : iframeObj.contentDocument)) {
            doc = iframeObj.contentDocument;
        }
        if (!doc && iframeObj.document) {
            doc = iframeObj.document;
        }
        if (doc && doc.defaultView) {
            return doc.defaultView;
        }
        if (doc && doc.parentWindow) {
            return doc.parentWindow;
        }
        return undefined;
    };
    SehirHaritasiAPI.prototype.Ajax = function (url, data, callback, errorback) {
        var xhr = new XMLHttpRequest();
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
    };
    SehirHaritasiAPI.prototype.MapListener = function (event) {
        var splitted = event.data.split('|');
        var methodName = splitted[0];
        var args = [];
        if (splitted.length > 1) {
            for (var i = 1; i < splitted.length; i++) {
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
                    }
                    else if (methodName == 'TopluMarkerEkle') {
                        methodName = 'TopluIsaretciEkle';
                    }
                    else if (methodName == 'MarkerTemizle') {
                        methodName = 'IsaretciTemizle';
                    }
                }
                eval('CallBack' + methodName + '(' + args + ');');
                if (methodName != 'Tiklaninca' &&
                    methodName != 'TiklamaKaldir' &&
                    methodName != 'AciDegisince' &&
                    methodName != 'AciDegisinceKaldir' &&
                    methodName != 'PanoramaKonumDegisince' &&
                    methodName != 'PanoramaKonumDegisinceKaldir' &&
                    methodName != 'HaritaOrtaNokta') {
                    eval('let CallBack' + methodName + ' = function(){ }');
                }
                break;
            default:
                break;
        }
    };
    return SehirHaritasiAPI;
}());
