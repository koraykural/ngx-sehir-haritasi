// var CallBackTiklaninca = function () {};
// var CallBackTiklamaKaldir = function () {
//   CallBackTiklaninca = function () {};
// };
// var CallBackAciDegisince = function () {};
// var CallBackAciDegisinceKaldir = function () {
//   CallBackAciDegisince = function () {};
// };
// var CallBackAciDegistir = function () {};
// var CallBackPanoramaKonumDegisince = function () {};
// var CallBackPanoramaKonumDegisinceKaldir = function () {
//   CallBackPanoramaKonumDegisince = function () {};
// };
// var CallBackZoomSeviyesiDegistir = function () {};
// var CallBackAciGetir = function () {};
// var CallBackSonTiklananNokta = function () {};
// var CallBackZoomSeviyesi = function () {};
// var CallBackHaritaOrtaNokta = function () {};
// var CallBackKonumaGit = function () {};
// var CallBackKonumaExtentleGit = function () {};
// var CallBackSadeceHarita = function () {};
// var CallBackAltlikKatmanListele = function () {};
// var CallBackAltlikKatmanGetir = function () {};
// var CallBackAltlikKatmanAyarla = function () {};
// var CallBackIsaretciYerDegistirince = function () {};
// var CallBackIsaretciTiklaninca = function () {};
// var CallBackIsaretciEkle = function () {};
// var CallBackClusterEkle = function () {};
// var CallBackTopluIsaretciEkle = function () {};
// var CallBackIsaretciTemizle = function () {};
// var CallBackCiz = function () {};
// var CallBackCizimTemizle = function () {};
// var CallBackCizimEditoruGetir = function () {};
// var CallBackCizimPasiflestir = function () {};
// var CallBackCizimDuzenle = function () {};
// var CallBackCizimSil = function () {};
// var CallBackCizimYerDegistirince = function () {};
// var CallBackCizimTiklaninca = function () {};
// var CallBackTurileCizim = function () {};
// var CallBackCizimDegistir = function () {};
// var CallBackCizimSec = function () {};
// var CallBackYakinimdaAra = function () {};
// var CallBackYakinimdaAraKapat = function () {};
// var CallBackYakinimdaAraDurum = function () {};
// var CallBackYolTarifi = function () {};
// var CallBackTUBS = function () {};
// var CallBackGuzergahKapat = function () {};
// var CallBackTUBSGizle = function () {};
// var CallBackTarifGizle = function () {};
// var CallBackGuzergahDurum = function () {};
// var CallBackTarifPaylasim = function () {};
// var CallBackPanorama = function () {};
// var CallBackPanoramaKapat = function () {};
// var CallBackPanoramaDurum = function () {};
// var CallBackTrafik = function () {};
// var CallBackTrafikKaldir = function () {};
// var CallBackArama = function () {};
// var CallBackAramaKapat = function () {};
// var CallBackAramaDurum = function () {};
// var CallBackYazdir = function () {};
// var CallBackYaklas = function () {};
// var CallBackUzaklas = function () {};
// var CallBackBilgiKapat = function () {};
// var CallBackEczane = function () {};
// var CallBackPazar = function () {};
// var CallBackBilgiData = function () {};
// var CallBackSpor = function () {};
// var CallBackSosyal = function () {};
// var CallBackIletisim = function () {};
// var CallBackHikaye = function () {};
// var HikayeKapaninca = function () {};
// var CallBackKatmanEkle = function () {};
// var CallBackKatmanKaldir = function () {};
// var CallBackKatmanSaydamlikGetir = function () {};
// var CallBackKatmanYoneticisiGetir = function () {};
// var CallBackItrfWgs84Donusumu = function () {};
// var CallBackWgs84ItrfDonusumu = function () {};
// var CallBackAracCubugu = function () {};
// var CallBackBoyut = function () {};
// var CallBackAlan = function () {};
// var CallBackWktAlan = function () {};
// var CallBackSabitKoordinat = function () {};
// var CallBackSabitExtent = function () {};
// var CallBackSerbestKoordinat = function () {};
// var CallBackBolge = function () {};
// var CallBackMesafe = function () {};
// var CallBackTemizle = function () {};
// var CallBackLokasyon = function () {};
// var CallBackBilgiAl = function () {};
// var CallBackDil = function () {};
// var CallBackDilGetir = function () {};
// var CallBackHaritaDondur = function () {};
// var CallBackEkranKlavyesi = function () {};
// var CallBackTekParmakPasif = function () {};

// function SehirHaritasiAPI(options, callback) {
//   /// <signature>
//   /// <summary>??ehir Haritas?? s??n??f??</summary>
//   /// <param name="options" type="Class">Se??enekler {String mapFrame:iframe ID bilgisi, String apiKey: Uygulama KEY bilginiz}</param>
//   /// <param name="callback" type="Function">Harita y??klenmesi tamamland?? olay??</param>
//   /// </signature>
//   // options: mapFrame & apiKey
//   if (!options || !options.mapFrame || !options.apiKey) {
//     console.error(
//       "mapFrame ve apiKey alanlari tanimli olmali ! API fonksiyonlari kullanilamaz !"
//     );
//     return {};
//   }
//   // se??enekler doldurulmu?? mu
//   // harita iframe ID bilgisi dolu mu
//   if (options.mapFrame === "") {
//     console.error(
//       "mapFrame alani tanimli degil !\r\nAPI fonksiyonlari kullanilamaz !"
//     );
//     return {};
//   }
//   // Uygulamala KEY bilgisi dolu mu
//   if (options.apiKey === "") {
//     console.error(
//       "apiKey alani tanimli degil !\r\nAPI fonksiyonlari kullanilamaz !"
//     );
//     return {};
//   }
//   // Uygulamala KEY bilgisi yeterli uzunlukta m??
//   if (options.apiKey.length !== 32) {
//     console.error(
//       "apiKey alani dogrulanamiyor !\r\nAPI fonksiyonlari kullanilamaz !"
//     );
//     return {};
//   }
//   this.version = "2.0.3";
//   this.updateDate = "20.04.2016";
//   this.options = options;
//   this.icons = {
//     Default: "http://sehirharitasi.ibb.gov.tr/images/markers/searched.png",
//     DefaultLarge: "http://sehirharitasi.ibb.gov.tr/images/markers/hedef.png",
//     Info: "http://sehirharitasi.ibb.gov.tr/images/markers/location.png",
//     Start: "http://sehirharitasi.ibb.gov.tr/images/markers/baslangic.png",
//     Finish: "http://sehirharitasi.ibb.gov.tr/images/markers/bitis.png",
//     WayPoint: "http://sehirharitasi.ibb.gov.tr/images/markers/aranokta.png",
//     Transfer: "http://sehirharitasi.ibb.gov.tr/images/markers/aktarma.png",
//     Panorama: "http://sehirharitasi.ibb.gov.tr/images/markers/roi-big.png",
//   };
//   this.layers = {
//     Harita: "Harita",
//     _2018: "2018",
//     _2017: "2017",
//     _2015: "2015",
//     _2014: "2014",
//     _2013: "2013",
//     _2011: "2011",
//     _2006: "2006",
//     _1982: "1982",
//     _1970: "1970",
//     _1966: "1966",
//     _1946: "1946",
//     SolarRenkli: "Solar Harita (Renkli)",
//     SolarSiyahBeyaz: "Solar Harita (SB)",
//     SolarDifuzyon: "Solar Harita (Dif??zyon)",
//     Havza: "Havza S??n??rlar??",
//     Rayli: "Rayl?? Sistem Hatt??",
//     Kabartma: "Kabartma Haritas??",
//     Etiket: "Etiket",
//     PazarYerleri: "Pazar Yerleri",
//     Cizim: "??izim",
//     Marker: "Marker",
//     Cluster: "Cluster",
//     SiyahBeyaz: "Siyah Beyaz Harita",
//     Trafik: "Trafik",
//     All: "Cluster,??ki Boyut Haritas??,Harita,2015,2017,2018,2014,2013,2011,2006,1982,1970,1966,1946,Solar Harita (Renkli),Solar Harita (SB),Solar Harita (Dif??zyon),Havza S??n??rlar??,Rayl?? Sistem Hatt??,Kabartma Haritas??,Etiket,Pazar Yerleri,??izim,Marker,Trafik,Siyah Beyaz Harita",
//     Default: "",
//   };
//   this.layerTypes = {
//     Rest: "REST",
//     FeatureRest: "FEATURE REST",
//     ImageWMS: "IMAGE WMS",
//     TileWMS: "TILE WMS",
//     TileImage: "TILE IMAGE",
//     Default: "REST",
//   };
//   this.anchors = {
//     Left: "l",
//     Right: "r",
//     Center: "c",
//     Top: "t",
//     Bottom: "b",
//   };
//   this.geomTypes = {
//     Point: "POINT",
//     LineString: "LINESTRING",
//     Polygon: "POLYGON",
//     Circle: "CIRCLE",
//   };
//   this.colors = {
//     Default: "#2AABE3",
//   };
//   // Harita penceresini yakalayabilmek i??in yard??mc?? metod
//   var GetIframeWindow = function (iframe_object) {
//     var doc;
//     if (iframe_object.contentWindow) {
//       return iframe_object.contentWindow;
//     }
//     if (iframe_object.window) {
//       return iframe_object.window;
//     }
//     if (!doc && iframe_object.contentDocument) {
//       doc = iframe_object.contentDocument;
//     }
//     if (!doc && iframe_object.document) {
//       doc = iframe_object.document;
//     }
//     if (doc && doc.defaultView) {
//       return doc.defaultView;
//     }
//     if (doc && doc.parentWindow) {
//       return doc.parentWindow;
//     }
//     return undefined;
//   };
//   /// API KEY ileti??imi
//   var Ajax = function (url, data, callback, errorback) {
//     var xhr = window.XMLHttpRequest
//       ? new XMLHttpRequest()
//       : new ActiveXObject("Microsoft.XMLHTTP");
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         callback(xhr.responseText, data);
//       }
//     };
//     xhr.onerror = function () {
//       errorback(xhr, arguments);
//     };
//     xhr.open("GET", url + "&" + data, true);
//     //xhr.responseType = 'json';
//     //xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//     //xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//     xhr.send();
//   };
//   Ajax(
//     "//cbsproxy.ibb.gov.tr/?UserKeyStatisticsAdd",
//     "apikey=" + this.options.apiKey,
//     function (data, params) {
//       data = JSON.parse(data);
//       data = parseInt(data.long["#text"]);
//       //if (data === 0)
//       //    console.error("Gecersiz API KEY", "\r\n", "apiKey:", params.split("=")[1], "\r\n", "API fonksiyonlari kullanilamaz !");
//     },
//     function (x, a) {
//       //console.error(x, a);
//     }
//   );
//   // Iframe ileti??imi
//   var MapListener = function (event) {
//     var origin = event.origin;
//     var splitted = event.data.split("|");
//     var methodName = splitted[0];
//     var args = [];
//     if (splitted.length > 1)
//       for (var i = 1; i < splitted.length; i++) {
//         args.push(splitted[i]);
//       }
//     switch (methodName) {
//       case "Tiklaninca":
//       case "TiklamaKaldir":
//       case "AciGetir":
//       case "AciDegisince":
//       case "AciDegisinceKaldir":
//       case "PanoramaKonumDegisince":
//       case "PanoramaKonumDegisinceKaldir":
//       case "AciDegistir":
//       case "SonTiklananNokta":
//       case "ZoomSeviyesi":
//       case "ZoomSeviyesiDegistir":
//       case "HaritaOrtaNokta":
//       case "KonumaGit":
//       case "SabitKoordinat":
//       case "SabitExtent":
//       case "SerbestKoordinat":
//       case "KonumaExtentleGit":
//       case "SadeceHarita":
//       case "AltlikKatmanListele":
//       case "AltlikKatmanGetir":
//       case "AltlikKatmanSec":
//       case "IsaretciEkle":
//       case "ClusterEkle":
//       case "IsaretciYerDegistirince":
//       case "IsaretciTiklaninca":
//       case "TopluIsaretciEkle":
//       case "IsaretciTemizle":
//       // v1 kald??r??l??nca silinecekler
//       case "MarkerEkle":
//       case "TopluMarkerEkle":
//       case "MarkerTemizle":
//       // v1 kald??r??l??nca silinecekler
//       case "Ciz":
//       case "CizimTemizle":
//       case "TurileCizim":
//       case "CizimPasiflestir":
//       case "CizimSec":
//       case "CizimDuzenle":
//       case "CizimSil":
//       case "CizimYerDegistirince":
//       case "CizimTiklaninca":
//       case "CizimDegistir":
//       case "YakinimdaAra":
//       case "YakinimdaAraKapat":
//       case "YakinimdaAraDurum":
//       case "Hikaye":
//       case "HikayeKapaninca":
//       case "YolTarifi":
//       case "TUBS":
//       case "GuzergahKapat":
//       case "GuzergahDurum":
//       case "TarifPaylasim":
//       case "Panorama":
//       case "PanoramaKapat":
//       case "PanoramaDurum":
//       case "Trafik":
//       case "Arama":
//       case "AramaKapat":
//       case "AramaDurum":
//       case "Yazdir":
//       case "Yaklas":
//       case "Uzaklas":
//       case "Eczane":
//       case "Spor":
//       case "Sosyal":
//       case "Iletisim":
//       case "KatmanEkle":
//       case "KatmanKaldir":
//       case "KatmanSaydamlikDegistir":
//       case "KatmanSaydamlikGetir":
//       case "KatmanYoneticisiGetir":
//       case "CizimEditoruGetir":
//       case "Wgs84ItrfDonusumu":
//       case "ItrfWgs84Donusumu":
//       case "AracCubugu":
//       case "Boyut":
//       case "Alan":
//       case "WktAlan":
//       case "Bolge":
//       case "Mesafe":
//       case "Temizle":
//       case "Lokasyon":
//       case "BilgiAl":
//       case "Dil":
//       case "DilGetir":
//       case "EkranKlavyesi":
//       case "TekParmakPasif":
//         // v1 kald??r??l??nca silinecekler
//         if (methodName.indexOf("Marker") > -1) {
//           if (methodName == "MarkerEkle") methodName = "IsaretciEkle";
//           else if (methodName == "TopluMarkerEkle")
//             methodName = "TopluIsaretciEkle";
//           else if (methodName == "MarkerTemizle")
//             methodName = "IsaretciTemizle";
//         }
//         // v1 kald??r??l??nca silinecekler
//         eval("CallBack" + methodName + "(" + args + ");");
//         if (
//           methodName != "Tiklaninca" &&
//           methodName != "TiklamaKaldir" &&
//           methodName != "AciDegisince" &&
//           methodName != "AciDegisinceKaldir" &&
//           methodName != "PanoramaKonumDegisince" &&
//           methodName != "PanoramaKonumDegisinceKaldir" &&
//           methodName != "HaritaOrtaNokta"
//         ) {
//           // bir ??ok metod i??levini bir kez ger??ekle??tirip default hale d??nmeli
//           eval("var CallBack" + methodName + " = function(){ }");
//         }
//         break;
//       default:
//         break;
//     }
//   };
//   // Event Listener aktifle??tirmesi
//   if (window.addEventListener) {
//     addEventListener("message", MapListener, false);
//   } else {
//     attachEvent("onmessage", MapListener);
//   }
//   this.Map = {
//     // Haritada bir konuma t??klan??nca ??a??r??lacak metod
//     OnClick: function (callback) {
//       /// <signature>
//       /// <summary>Haritaya t??klama olay??</summary>
//       /// <param name="callback" type="Function">Olay sonucu geri d??nece??i fonksiyon</param>
//       /// </signature>
//       if (callback) {
//         CallBackTiklaninca = callback;
//         var el = document.getElementById(this.prototype.options.mapFrame);
//         GetIframeWindow(el).postMessage("Tiklaninca|", "*");
//       }
//     },
//     // Haritaya t??klamalarda geri d??n???? bilgisi atamas??n?? kald??r
//     UnClick: function () {
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("TiklamaKaldir|", "*");
//     },
//     //  Haritada en son t??klanan noktan??n lon,lat olarak bilgisini verir
//     GetLastClickedPoint: function (callback) {
//       if (callback) CallBackSonTiklananNokta = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("SonTiklananNokta|", "*");
//     },
//     // Haritan??n aktif zoom seviyesini verir
//     GetZoom: function (callback) {
//       if (callback) CallBackZoomSeviyesi = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("ZoomSeviyesi|", "*");
//     },
//     // Haritan??n aktif zoom seviyesini de??i??tirir
//     SetZoom: function (options, callback) {
//       // options: zoom
//       if (callback) CallBackZoomSeviyesi = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "ZoomSeviyesiDegistir|" + options.zoom,
//         "*"
//       );
//     },
//     // Haritan??n o anki orta noktas??n??n koordinatlar??n?? lon,lat olarak verir
//     GetCenter: function (callback) {
//       if (callback) CallBackHaritaOrtaNokta = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("HaritaOrtaNokta|", "*");
//     },
//     // Haritada istenilen bir konuma i??aret??i atar, zoom ??eker ve bilgi penceresi yerle??tirir
//     Goto: function (options, callback) {
//       // options: lat, lon, zoom, effect
//       if (callback) CallBackKonumaGit = callback;
//       else CallBackKonumaGit = function () {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "KonumaGit|" +
//           options.lat +
//           "|" +
//           options.lon +
//           "|" +
//           options.zoom +
//           "|" +
//           options.effect,
//         "*"
//       );
//     },
//     FixExtent: function (options, callback) {
//       if (callback) CallBackSabitExtent = callback;
//       else CallBackSabitExtent = function () {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "SabitExtent|" +
//           options.minLat +
//           "|" +
//           options.minLon +
//           "|" +
//           options.maxLat +
//           "|" +
//           options.maxLon +
//           "|" +
//           options.drag +
//           "|" +
//           options.zoom +
//           "|" +
//           options.maxZoom +
//           "|" +
//           options.minZoom,
//         "*"
//       );
//     },
//     //Pasif
//     CloseSlide: function () {
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "KaydirKapat|" +
//           options.minLat +
//           "|" +
//           options.minLon +
//           "|" +
//           options.maxLat +
//           "|" +
//           options.maxLon +
//           "|" +
//           options.drag +
//           "|" +
//           options.zoom +
//           "|" +
//           options.maxZoom +
//           "|" +
//           options.minZoom,
//         "*"
//       );
//     },
//     // options:lon, lat,drag, zoom, zoomMax, zoomMin
//     // Haritada belitrilen konumu sabitler
//     FixCoordinate: function (options, callback) {
//       if (callback) CallBackSabitKoordinat = callback;
//       else CallBackSabitKoordinat = function () {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "SabitKoordinat|" +
//           options.lat +
//           "|" +
//           options.lon +
//           "|" +
//           options.zoom +
//           "|" +
//           options.maxZoom +
//           "|" +
//           options.minZoom,
//         "*"
//       );
//     },
//     //fixCoordinate'i ge??ersiz k??lar
//     FixRelease: function (options, callback) {
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("SerbestKoordinat|", "*");
//     },
//     GotoExtent: function (options, callback) {
//       // options: lat, lon, zoom, effect
//       if (callback) CallBackKonumaExtentleGit = callback;
//       else CallBackKonumaExtentleGit = function () {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "KonumaExtentleGit|" +
//           options.minLat +
//           "|" +
//           options.minLon +
//           "|" +
//           options.maxLat +
//           "|" +
//           options.maxLon,
//         "*"
//       );
//       //ol4 sonras??   GetIframeWindow(el).postMessage("KonumaExtentleGit|" + options.minLat + "|" + options.minLon + "|" + options.maxLat + "|" + options.maxLon + "|" + options.effect, "*");
//     },
//     //t??m men??leri kapat??r sadece harita g??r??n??r olur.
//     OnlyMap: function (callback) {
//       if (callback) CallBackSadeceHarita = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("SadeceHarita|", "*");
//     },
//     //yazdirma yapar
//     Print: function (callback) {
//       if (callback) CallBackYazdir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Yazdir|", "*");
//     },
//     // Ara?? ??ubu??u g??r??n??m ayarlar??
//     Toolbar: function (options, callback) {
//       // options: network, panorama, layers, menu, search, language, traffic, mapSwitch, mapEtiket, coordinate, clear, measure, print, location, zoomin, zoomout, rightMen,legend
//       if (callback) CallBackAracCubugu = callback;
//       if (!options) options = {};
//       if (!options.zoomIn) options.zoomIn = options.zoomin;
//       if (!options.zoomOut) options.zoomOut = options.zoomout;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "AracCubugu|" +
//           options.network +
//           "|" +
//           options.panorama +
//           "|" +
//           options.layers +
//           "|" +
//           options.menu +
//           "|" +
//           options.search +
//           "|" +
//           options.language +
//           "|" +
//           options.traffic +
//           "|" +
//           options.mapSwitch +
//           "|" +
//           options.label +
//           "|" +
//           options.coordinate +
//           "|" +
//           options.clear +
//           "|" +
//           options.measure +
//           "|" +
//           options.print +
//           "|" +
//           options.location +
//           "|" +
//           options.zoomIn +
//           "|" +
//           options.zoomOut +
//           "|" +
//           options.rightMenu +
//           "|" +
//           options.legend,
//         "*"
//       );
//     },
//     // haritada yakla??
//     ZoomIn: function (callback) {
//       if (callback) CallBackYaklas = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Yaklas|", "*");
//     },
//     // haritada uzakla??
//     ZoomOut: function (callback) {
//       if (callback) CallBackUzaklas = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Uzaklas|", "*");
//     },
//     // boyutu pixel dizisi olarak d??nd??r??r {width, height}
//     GetSize: function (callback) {
//       if (callback) CallBackBoyut = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Boyut|", "*");
//     },
//     // alan?? koordinatlar dizisi olarak d??nd??r??r {minx, miny, maxx, maxy }
//     GetExtent: function (callback) {
//       if (callback) CallBackAlan = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Alan|", "*");
//     },
//     // Harita ??zerinde b??lge ??izimi yapar.
//     AreaMeasure: function (callback) {
//       if (callback) CallBackBolge = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Bolge|", "*");
//     },
//     // Harita ??zerinde mesafe ??izimi yapar.
//     LineMeasure: function (callback) {
//       if (callback) CallBackMesafe = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Mesafe|", "*");
//     },
//     // Harita ??zerinde yap??lm???? olanlar?? temizler.
//     Clear: function (callback) {
//       if (callback) CallBackTemizle = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Temizle|", "*");
//     },
//     // Harita Lokasyon
//     GetLocation: function (callback) {
//       if (callback) CallBackLokasyon = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Lokasyon|", "*");
//     },
//     // Harita ??zerinde bilgi al.
//     GetInformation: function (options, callback) {
//       if (callback) CallBackBilgiAl = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "BilgiAl|" + options.lat + "|" + options.lon + "|" + options.title,
//         "*"
//       );
//       // if (callback)
//       //     CallBackBilgiAl = callback;
//       //else
//       //     CallBackBilgiAl = function () { }
//       //var el = document.getElementById(this.prototype.options.mapFrame);
//       //GetIframeWindow(el).postMessage("BilgiAl|" + options.lat + "|" + options.lon , "*");
//     },
//     // Dil se??ene??i
//     Language: function (options, callback) {
//       if (callback) CallBackDil = callback;
//       if (!options) options = {};
//       if (!options.language) options.language = options.language;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Dil|" + options.language, "*");
//     },
//     GetLanguage: function (callback) {
//       if (callback) CallBackDilGetir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("DilGetir|", "*");
//     },
//     //Pasif
//     Reset: function (callback) {
//       if (callback) CallBackReset = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Reset|", "*");
//     },
//     //Pasif
//     Rotate: function (options, callback) {
//       if (callback) CallBackHaritaDondur = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("HaritaDondur|" + options.rotate, "*");
//     },
//     //Pasif
//     ScreenKeyboard: function (callback) {
//       if (callback) CallBackEkranKlavyesi = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("EkranKlavyesi|", "*");
//     },
//     //pasif
//     MobileSinglePassive: function (callback) {
//       if (callback) CallBackTekParmakPasif = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("TekParmakPasif|", "*");
//     },
//   };
//   this.Map.prototype = this;
//   this.Marker = {
//     // Haritada istenilen bir konuma i??aret??i atar, zoom ??eker ve bilgi penceresi yerle??tirir
//     Add: function (options, callback) {
//       // options: lat, lon, anchorX, anchorY, zoom, effect, content, iconUrl, imageX, imageY, center, toolbar, draggable, showPopover, title, gotoPosition, tag
//       if (callback) CallBackIsaretciEkle = callback;
//       else CallBackIsaretciEkle = function () {};
//       if (!options) options = {};
//       if (!options.iconUrl) options.iconUrl = this.prototype.icons.Default;
//       if (!options.style) options.style = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "IsaretciEkle|" +
//           options.lat +
//           "|" +
//           options.lon +
//           "|" +
//           options.anchorX +
//           "|" +
//           options.anchorY +
//           "|" +
//           options.zoom +
//           "|" +
//           options.effect +
//           "|" +
//           options.content +
//           "|" +
//           options.iconUrl +
//           "|" +
//           options.imageX +
//           "|" +
//           options.imageY +
//           "|" +
//           options.center +
//           "|" +
//           options.toolbar +
//           "|" +
//           options.draggable +
//           "|" +
//           options.showPopover +
//           "|" +
//           options.title +
//           "|" +
//           options.gotoPosition +
//           "|" +
//           options.tag +
//           "|" +
//           options.opacity +
//           "|" +
//           options.closeotherpopups +
//           "|" +
//           options.cluster +
//           "|" +
//           options.shareText +
//           "|" +
//           options.style.maxWidth +
//           "|",
//         "*"
//       );
//     },
//     //Pasif
//     Batch: function (options, callback) {
//       // options: markers
//       if (callback) CallBackTopluIsaretciEkle = callback;
//       else CallBackTopluIsaretciEkle = function () {};
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "TopluIsaretciEkle|" + options.markers,
//         "*"
//       );
//     },
//     //Toplu i??aret??i ekleme Yapar
//     Cluster: function (options, callback) {
//       // options: markers
//       if (callback) CallBackClusterEkle = callback;
//       else CallBackClusterEkle = function () {};
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "ClusterEkle|" + JSON.stringify(options.markers),
//         "*"
//       );
//     },
//     // Haritadaki i??aret??ileri temizle
//     Remove: function (options, callback) {
//       // options: id
//       if (callback) CallBackIsaretciTemizle = callback;
//       else CallBackIsaretciTemizle = function () {};
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "IsaretciTemizle|" + options.id + "|",
//         "*"
//       );
//     },
//     // ????aret??i yer de??i??tirdikce ??a??r??lacak method
//     OnDrag: function (callback) {
//       if (callback) CallBackIsaretciYerDegistirince = callback;
//     },
//     // ????aret??iye t??klan??nca ??a??r??lacak method
//     OnClick: function (callback) {
//       if (callback) CallBackIsaretciTiklaninca = callback;
//     },
//   };
//   this.Marker.prototype = this;
//   this.Draw = {
//     //Al??nan WKT verisini ??izer
//     WKT: function (options, callback) {
//       // options: wkt, zoom, tag, style:{fillColor, fillOpacity, strokeColor, strokeOpacity, strokeWidth, strokeDashStyle}
//       if (callback) CallBackCiz = callback;
//       if (!options.style) options.style = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "Ciz|" +
//           options.wkt +
//           "|" +
//           options.zoom +
//           "|" +
//           options.tag +
//           "|" +
//           options.style.fillColor +
//           "|" +
//           options.style.fillOpacity +
//           "|" +
//           options.style.strokeColor +
//           "|" +
//           options.style.strokeOpacity +
//           "|" +
//           options.style.strokeWidth +
//           "|" +
//           options.style.strokeDashStyle +
//           "|" +
//           options.effect,
//         "*"
//       );
//     },
//     //Geometiriyi siler
//     Remove: function (options, callback) {
//       // options: id
//       if (callback) CallBackCizimTemizle = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("CizimTemizle|" + options.id, "*");
//     },
//     //??izim edit??r??n?? a??ar
//     ShowToolbox: function (callback) {
//       if (callback) CallBackCizimEditoruGetir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("CizimEditoruGetir|", "*");
//     },
//     //??izimi ??zelli??i kapat??l??r
//     Finish: function (callback) {
//       if (callback) CallBackCizimEditoruGetir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("CizimPasiflestir|", "*");
//     },
//     //Geometiriyi se??er
//     Select: function (options, callback) {
//       // options: id
//       if (callback) CallBackCizimEditoruGetir = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("CizimSec|" + options.id, "*");
//     },
//     //T??r ile ??izim
//     Start: function (options, callback) {
//       // options: type, draggable,  drawingStyle: {fillColor, fillOpacity, strokeColor, strokeOpacity, strokeWidth, strokeDashStyle}, cursorStyle: {fillColor, fillOpacity, strokeColor, strokeOpacity, strokeWidth, strokeDashStyle, radius}, style:{fillColor, fillOpacity, strokeColor, strokeOpacity, strokeWidth, strokeDashStyle}
//       if (callback) CallBackTurileCizim = callback;
//       if (!options) options = {};
//       if (!options.drawingStyle) options.drawingStyle = {};
//       if (!options.cursorStyle) options.cursorStyle = {};
//       if (!options.style) options.style = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       var parameters = options.type + "|" + options.draggable + "|";
//       parameters +=
//         options.drawingStyle.fillColor +
//         "|" +
//         options.drawingStyle.fillOpacity +
//         "|" +
//         options.drawingStyle.strokeColor +
//         "|" +
//         options.drawingStyle.strokeOpacity +
//         "|" +
//         options.drawingStyle.strokeWidth +
//         "|" +
//         options.drawingStyle.strokeDashStyle +
//         "|";
//       parameters +=
//         options.cursorStyle.fillColor +
//         "|" +
//         options.cursorStyle.fillOpacity +
//         "|" +
//         options.cursorStyle.strokeColor +
//         "|" +
//         options.cursorStyle.strokeOpacity +
//         "|" +
//         options.cursorStyle.strokeWidth +
//         "|" +
//         options.cursorStyle.strokeDashStyle +
//         "|" +
//         options.cursorStyle.radius +
//         "|";
//       parameters +=
//         options.style.fillColor +
//         "|" +
//         options.style.fillOpacity +
//         "|" +
//         options.style.strokeColor +
//         "|" +
//         options.style.strokeOpacity +
//         "|" +
//         options.style.strokeWidth +
//         "|" +
//         options.style.strokeDashStyle;
//       GetIframeWindow(el).postMessage("TurileCizim|" + parameters, "*");
//     },
//     // Geometri stilini de??i??tirir
//     SetStyle: function (options, callback) {
//       // options: style:{fillColor, fillOpacity, strokeColor, strokeOpacity, strokeWidth, strokeDashStyle}
//       if (callback) CallBackCizimDegistir = callback;
//       if (!options.style) options.style = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       var parameters =
//         options.id +
//         "|" +
//         options.style.fillColor +
//         "|" +
//         options.style.fillOpacity +
//         "|" +
//         options.style.strokeColor +
//         "|" +
//         options.style.strokeOpacity +
//         "|" +
//         options.style.strokeWidth +
//         "|" +
//         options.style.strokeDashStyle;
//       GetIframeWindow(el).postMessage("CizimDegistir|" + parameters, "*");
//     },
//     //Geometriyi d??zenler. ??ncelikle ??izim se?? fonksiyonu ile d??zeltilmesi gereken ??izim se??ilir.
//     Edit: function (callback) {
//       if (callback) CallBackCizimDuzenle = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("CizimDuzenle|", "*");
//     },
//     //Geometriyi siler. ??ncelikle ??izim se?? fonksiyonu ile se??im i??lemi kullan??c??ya yapt??r??l??r silinmesi gereken ??izim se??ilir.
//     RemoveSelected: function (callback) {
//       if (callback) CallBackCizimEditoruGetir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("CizimSil|", "*");
//     },
//     // Geometri yer de??i??tirdikce ??a??r??lacak method
//     OnDrag: function (callback) {
//       if (callback) CallBackCizimYerDegistirince = callback;
//     },
//     // Geometriye t??klan??nca ??a??r??lacak method
//     OnClick: function (callback) {
//       if (callback) CallBackCizimTiklaninca = callback;
//     },
//   };
//   this.Draw.prototype = this;
//   this.Search = {
//     //aramay?? a??ar ve arama yapar
//     Open: function (options, callback) {
//       // options: query
//       if (callback) CallBackArama = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "Arama|" + true + "|" + options.query,
//         "*"
//       );
//     },
//     // aramay?? pasif hale getirir
//     Close: function (callback) {
//       if (callback) CallBackAramaKapat = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("AramaKapat|", "*");
//     },
//     // arama durumunu d??nd??r??r
//     GetState: function (callback) {
//       if (callback) CallBackAramaDurum = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("AramaDurum|", "*");
//     },
//   };
//   this.Search.prototype = this;
//   this.Nearby = {
//     //Yak??n??mda Aramay?? a??ar ve arama yapar
//     Open: function (options, callback) {
//       // options: lat, lon, type, distance
//       if (callback) CallBackYakinimdaAra = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "YakinimdaAra|" +
//           options.lat +
//           "|" +
//           options.lon +
//           "|" +
//           options.type +
//           "|" +
//           options.distance,
//         "*"
//       );
//     },
//     //Yak??n??mda Aramay?? kapat??r
//     Close: function (options, callback) {
//       // options: lat, lon, type, distance
//       if (callback) CallBackYakinimdaAraKapat = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("YakinimdaAraKapat|", "*");
//     },
//     // Yak??n??mda Arama durumunu d??nd??r??r
//     GetState: function (callback) {
//       if (callback) CallBackYakinimdaAraDurum = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("YakinimdaAraDurum|", "*");
//     },
//   };
//   this.Nearby.prototype = this;
//   this.RouteAnalysis = {
//     //yol tarifi hesaplar
//     Drive: function (options, callback) {
//       // options: start {lat, lon}, waystation{lat,lon|lat,lon} finish {lat, lon}
//       if (callback) CallBackYolTarifi = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "YolTarifi|" +
//           options.start.lat +
//           "|" +
//           options.start.lon +
//           "|" +
//           options.waystation +
//           "|" +
//           options.finish.lat +
//           "|" +
//           options.finish.lon,
//         "*"
//       );
//     },
//     //toplu ta????ma i??in yol tarifi hesaplar
//     TUBS: function (options, callback) {
//       // options: start {lat, lon}, finish {lat, lon}, type, time, date
//       if (callback) CallBackYolTarifi = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "TUBS|" +
//           options.start.lat +
//           "|" +
//           options.start.lon +
//           "|" +
//           options.finish.lat +
//           "|" +
//           options.finish.lon +
//           "|" +
//           options.type +
//           "|" +
//           options.time +
//           "|" +
//           options.date +
//           "|" +
//           options.noparameter,
//         "*"
//       );
//     },
//     //g??zergah analizini kapat??r
//     Close: function (options, callback) {
//       // options: lat, lon, type, distance
//       if (callback) CallBackGuzergahGizle = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("GuzergahKapat|", "*");
//     },
//     //TUBS'u gizler
//     HideTUBS: function (options, callback) {
//       // options: lat, lon, type, distance
//       if (callback) CallBackTUBSGizle = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("TUBSGizle|", "*");
//     },
//     //g??zergah analizini gizler
//     HideDrive: function (options, callback) {
//       // options: lat, lon, type, distance
//       if (callback) CallBackTarifGizle = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("YolTarifGizle|", "*");
//     },
//     // g??zergah analizi durumunu d??nd??r??r
//     GetState: function (callback) {
//       if (callback) CallBackGuzergahDurum = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("GuzergahDurum|", "*");
//     },
//     Share: function (callback) {
//       if (callback) CallBackTarifPaylasim = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("TarifPaylasim|", "*");
//     },
//   };
//   this.RouteAnalysis.prototype = this;
//   this.Panorama = {
//     //verilen koordinata g??re panoramay?? a??ar
//     Open: function (options, callback) {
//       // options: lat, lon
//       if (callback) CallBackPanorama = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "Panorama|" + options.lat + "|" + options.lon + "|" + options.angle,
//         "*"
//       );
//     },
//     // panorama kutusunu kapat??r
//     Close: function (callback) {
//       if (callback) CallBackPanoramaKapat = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("PanoramaKapat|", "*");
//     },
//     // panorama durumunu d??nd??r??r
//     GetState: function (callback) {
//       if (callback) CallBackPanoramaDurum = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("PanoramaDurum|", "*");
//     },
//     // panoraman??n o anki a????c??s??n?? d??nd??r??r
//     GetAngle: function (callback) {
//       if (callback) CallBackAciGetir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("AciGetir|", "*");
//     },
//     // Panorama a???? de??i??imini sa??lar
//     SetAngle: function (options, callback) {
//       // options: angle
//       if (callback) CallBackAciDegistir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("AciDegistir|" + options.angle, "*");
//     },
//     // Panorama a???? de??i??iminde ??a??r??lacak metod
//     OnAngleChanged: function (callback) {
//       if (callback) {
//         CallBackAciDegisince = callback;
//         var el = document.getElementById(this.prototype.options.mapFrame);
//         GetIframeWindow(el).postMessage("AciDegisince|", "*");
//       }
//     },
//     // Panorama a???? de??i??imi geri d??n???? bilgisi atamas??n?? kald??r
//     UnAngleChanged: function () {
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("AciDegisinceKaldir|", "*");
//     },
//     // Panoramada konum de??i??ikli??inde koordinatlar?? d??nd??r??r
//     OnPositionChanged: function (callback) {
//       if (callback) {
//         CallBackPanoramaKonumDegisince = callback;
//         var el = document.getElementById(this.prototype.options.mapFrame);
//         GetIframeWindow(el).postMessage("PanoramaKonumDegisince|", "*");
//       }
//     },
//     // Panoramada konum de??i??ince olay??n?? kald??r??r
//     UnPositionChanged: function () {
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("PanoramaKonumDegisinceKaldir|", "*");
//     },
//   };
//   this.Panorama.prototype = this;
//   this.InformationServices = {
//     //verilen il??eyeg??re n??bet??i eczaneleri getirir.
//     ReturnData: function (options, callback) {
//       if (callback) CallBackBilgiData = callback;
//       if (!options) options = { district: "" };
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "BilgiServisData|" + options.type + "|" + options.district,
//         "*"
//       );
//     },
//     Bazaar: function (options, callback) {
//       // options: district
//       if (callback) CallBackPazar = callback;
//       if (!options) options = { district: "" };
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Pazar|" + options.district, "*");
//     },
//     Pharmacy: function (options, callback) {
//       // options: district
//       if (callback) CallBackEczane = callback;
//       if (!options) options = { district: "" };
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Eczane|" + options.district, "*");
//     },
//     //verilen il??eyeg??re spor tesislerini  getirir.
//     Sports: function (options, callback) {
//       // options: district
//       if (callback) CallBackSpor = callback;
//       if (!options) options = { district: "" };
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Spor|" + options.district, "*");
//     },
//     //verilen il??eye g??re ??bb sosyal tesislerini getirir.
//     Social: function (options, callback) {
//       // options: district
//       if (callback) CallBackSosyal = callback;
//       if (!options) options = { district: "" };
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Sosyal|" + options.district, "*");
//     },
//     //verilen il??eye g??re ??bb ileti??im noktalar??n?? getirir.
//     Contact: function (options, callback) {
//       // options: district
//       if (callback) CallBackIletisim = callback;
//       if (!options) options = { district: "" };
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Iletisim|" + options.district, "*");
//     },
//     //verilen il??eye g??re ??bb ileti??im noktalar??n?? getirir.
//     StoryIstanbul: function (options, callback) {
//       if (callback) CallBackHikaye = callback;
//       if (!options) options = { language: "" };
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Hikaye|" + options.language, "*");
//     },
//     //verilen il??eye g??re ??bb ileti??im noktalar??n?? getirir.
//     StoryIstanbulOnClose: function (callback) {
//       if (callback) CallBackHikayeKapaninca = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("HikayeKapaninca|", "*");
//     },
//     Close: function (options, callback) {
//       if (callback) CallBackBilgiKapat = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("BilgiKapat|", "*");
//     },
//   };
//   this.InformationServices.prototype = this;
//   this.Layers = {
//     //verilen url'deki  servisi katman olarak ekler.
//     Add: function (options, callback) {
//       // options: url, name, visibility, type, opacity, layers
//       if (callback) CallBackKatmanEkle = callback;
//       if (!options) options = {};
//       if (!options.legend) options.legend = {};
//       if (!options.type) options.type = this.prototype.layerTypes.Default;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "KatmanEkle|" +
//           options.url +
//           "|" +
//           options.name +
//           "|" +
//           options.visibility +
//           "|" +
//           options.type +
//           "|" +
//           options.opacity +
//           "|" +
//           options.layers +
//           "|" +
//           options.nocache +
//           "|" +
//           options.legend.tr +
//           "|" +
//           options.legend.en +
//           "|" +
//           options.legend.url +
//           "|" +
//           options.layerDefinitions +
//           "|" +
//           options.isBaseLayer,
//         "*"
//       );
//     },
//     // verilen katman?? kald??r??r.
//     Remove: function (options, callback) {
//       // options: name
//       if (callback) CallBackKatmanKaldir = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("KatmanKaldir|" + options.name, "*");
//     },
//     // verilen katman??n saydaml??k de??erini de??i??tirir.
//     SetOpacity: function (options) {
//       // options: name, opacity
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "KatmanSaydamlikDegistir|" + options.name + "|" + options.opacity,
//         "*"
//       );
//     },
//     // verilen katman??n saydaml??k de??erini d??nd??r??r.
//     GetOpacity: function (options, callback) {
//       // options:  name
//       if (callback) CallBackKatmanSaydamlikGetir = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "KatmanSaydamlikGetir|" + options.name,
//         "*"
//       );
//     },
//     //kayman y??neticisi ekler
//     ShowToolbox: function (options, callback) {
//       if (!options) options = {};
//       if (!options.layers) options.layers = this.prototype.layers.Default;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "KatmanYoneticisiGetir|" +
//           options.hiddenLayers +
//           "|" +
//           options.subLayers +
//           "|" +
//           options.onlyLayersName +
//           "|" +
//           options.width +
//           "|" +
//           options.height +
//           "|" +
//           options.click,
//         "*"
//       );
//     },
//     //haritadaki aktif t??m katmanlar?? getirir.
//     GetActiveLayers: function (callback) {
//       if (callback) CallBackAltlikKatmanListele = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("AltlikKatmanListele|", "*");
//     },
//     //haritadaki aktif katman?? getirir.
//     GetBaseLayer: function (callback) {
//       if (callback) CallBackAltlikKatmanGetir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("AltlikKatmanGetir|", "*");
//     },
//     //verilen de??eri altl??k katman olarak ayarlar.
//     SetBaseLayer: function (options, callback) {
//       // options: name
//       if (callback) CallBackAltlikKatmanAyarla = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "AltlikKatmanAyarla|" + options.name,
//         "*"
//       );
//     },
//     //trafik katman??n?? a??ar
//     ShowTrafficLayer: function (callback) {
//       if (callback) CallBackTrafik = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("Trafik|", "*");
//     },
//     //trafik katman??n?? kapat??r
//     HideTrafficLayer: function (callback) {
//       if (callback) CallBackTrafikKaldir = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("TrafikKaldir|", "*");
//     },
//   };
//   this.Layers.prototype = this;
//   this.Convert = {
//     //itrf wgs84 koordinat donusumu yapar
//     ITRFtoWGS84: function (options, callback) {
//       // options: lat, lon
//       if (callback) CallBackItrfWgs84Donusumu = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "ItrfWgs84Donusumu|" + options.lat + "|" + options.lon,
//         "*"
//       );
//     },
//     //wgs84 itrf koordinat donusumu yapar
//     WGS84toITRF: function (options, callback) {
//       // options: lat, lon
//       if (callback) CallBackWgs84ItrfDonusumu = callback;
//       if (!options) options = {};
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage(
//         "Wgs84ItrfDonusumu|" + options.lat + "|" + options.lon,
//         "*"
//       );
//     },
//   };
//   this.Convert.prototype = this;
//   this.Calculate = {
//     WktExtent: function (options, callback) {
//       if (callback) CallBackWktAlan = callback;
//       var el = document.getElementById(this.prototype.options.mapFrame);
//       GetIframeWindow(el).postMessage("WktAlan|" + options.wkt, "*");
//     },
//   };
//   this.Calculate.prototype = this;
//   if (callback)
//     document.getElementById(this.options.mapFrame).onload = function () {
//       callback();
//     };
// }
