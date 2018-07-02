# Vuejs Open Weather Map Örneği
Vuejs altyapısı ile hazırlanan Hava durumu uygulamasıdır. 
OpenWeatherMap api kullanabilmek için gerekli olan appId değeri ve başlangıçta hava durumu değerleri istenen şehirlerin bilgileri state üzerinde tutulmuştur. Kendi kullanıcınıza göre appId değerinizi ve istediğiniz şehir listesini main.js içerisinden değiştirebilirsiniz. 

  - İstenen verilerin alınabilmesi için 'axios' aracılığı ile sorgu gönderildi.
  - Routing işlemleri için 'VueRouter' kullanıldı. main.js sayfasından görüntülenebilir.
  - State kontrolü için 'Vuex' kullanıldı. main.js sayfasından görüntülenebilir.

### Kurulum

```sh
$ cd app
$ npm install
$ npm run dev
```