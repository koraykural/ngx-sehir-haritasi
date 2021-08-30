# NgxSehirHaritasi

> Demo: https://koraykural.github.io/ngx-sehir-haritasi/

## Geliştirme Süreci

Uygulama Angular v12 ve Şehir Haritası API kullanılarak geliştirilmiştir.

### Şehir Haritası API

Şehir Haritası API non-module js olduğu için Angular ile kullanımı oldukça zordur. Bu yüzden projeyi ikiye bölüp yeniden kullanılabilir bir harita kütüphanesi oluşturdum ve bu kütüphaneyi kullanarak uygulamanın kendisini geliştirdim.

Yeniden kullanılabilir bir kütüphane (ngx-sehir-haritasi) oluşturmak için kaynak kodu `http://sehirharitasi.ibb.gov.tr/api/map2.js` adresinden indirip doğrudan proje dosyaları arasına koydum. Angular Typescript kullandığı için `map2.js` dosyasını typescript dosyasına dönüştürüp ortaya çıkan derleyici hatalarını ortadan kaldırdım. Bu aşamada IE desteğini kaldırdım ve dökümentasyona bakarak parametre ve dönüş değerleri için doğru tipleri atadım.

### ~~Callback~~ -> Observables

Şehir Haritası API asenkron operasyonlar için callback stilini kullanıyor ancak bu Angular için pek popüler değil. Angular asenkron işlemler için [Rxjs](https://rxjs.dev/) kütüphanesini kullanıyor. Bu yüzden map2.js kaynak kodunu kütüphanenin kullanıcılarından gizledim ve ngx-sehir-haritasi'na, bu metodlara erişimi sağlayacak servisler ekledim.

> Not: Bu işlem zaman aldığı için şimdilik sadece demo-app'te ihtiyacım olan fonksiyonlar için wrapper yazdım.

### Demo App

Hackathon için kullanılacak asıl uygulama /projects/demo-app klasöründe bulunuyor.

Uygulama tam ekran bir haritaya ve gerekli işlemleri yapmak için 3 farklı kaplamaya sahip.

1. kaplama bir yükleme göstergesi. Iframe elementinin yüklenmesi zaman aldığı için bu aşamada kullanıcının harita ile etkileşimini engellemek için bir yükleme göstergesi koydum. Uygulama ilk açıldıktan birkaç saniye sonra bu kaplama otomatik olarak kayboluyor.

2. kaplama kullanıcıdan konumunu seçmesini siteyen bir butona sahip. Kullanıcı haritayı kaydırıp butona bastıktan sonra ekran haritanın bu bölgesine kilitleniyor ve 3. kaplamaya geçiş yapılıyor.

3. kaplama mesafe butonlarına (15, 30, 60), arama kategorilerine (park, hastane vb.) ve kullanıcının konumunu değiştirmesine olanak sağlayan bir butona sahip. 3. kaplama gelir gelmez otomatik olarak 15 dakika mesafedeki Akaryakıt istanyonları aranıyor. Arama sonuçları haritaya mavi noktalar olarak ekleniyor. Herhangi bir noktaya tıklandığında haritanın güzergah analizi fonksiyonu kullanılarak rota oluşturuluyor.

### Veriler

Bütün veriler `data.ibb.gov.tr` adresinden indirildi ve demo uygulamasının kaynak kodlarına json formatında eklendi. Farklı bir kategoride arama yapıldığında o kategorinin konumları bit HTTP isteği ile alınıp, kullanıcı tarafında filtrelenip haritaya ekleniyor.

Verilerin alınmasından sorumlu bir servis oluşturdum (`data.service`). Bütün konumların kullanıcı tarafına aktarılıp orada filtrelenmesi çok verimli olmadığı için bu sitemin ileride değiştirilmesini kolaylaştırdım bu şekilde.
