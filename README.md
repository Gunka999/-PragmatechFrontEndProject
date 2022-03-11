# Javascript
***
### 1. Hello World ilə bağlı suallar
***

* ___Javascript kodları necə formada yazıla bilər?___
   * İki formada yazıla bilər. 
      * HTML kodlarının içərisində __script__ taginin icərisində.
      * Ayrı js faylı yaradaraq HTML kodlarında __script__ tagində src atributu ilə yerini göstərərək.


* ___Javascript kodlarının script tagları daxilində yazmaqla ayrı fayl formatında yazıb import etmek arasında nə fərq var?___
   * Ayrı fayllarda Javascript kodlarının yazılmasının üstün cəhəti ondadır ki, brauzer script-i ayriça yükləyir və keşdə saxlayır. 


* ___Madem mənim brauzerimdə V8-Engine yüklüdür niyə html kodu daxilində yazılan javascript kodları işləmir.___
   * Sualı tam anlamadım.


***
### 2. Code Structure ilə bağlı suallar
***
* ___";" hansı hallarda istifadə edilir?___
   * Bir kod çümləsi digərindən ; ilə ayrılır. 

   ```
   alert('World'); alert('World');
   ```
   Əksər hallarda kodun oxunaqlı olması üçün hər yeni kod cümləsini yeni sətirdən yazırla. Əksər hallarda yeni sətirdən kod çümləsi yazılırsa ; qoymamaq olar. Belə haldada kod işləyir. (bu halda javascript avtomatik ; əlavə edir)

   ```
   alert('Hello')
   alert('World')
   ```
   Lakin bəzi hallarda yeni sətr ; anlamına gəlmir. Misal üçün:
   ```
   alert(3 +
   1
   + 2);
   ```
   ___Və ya___

   ```
   alert('Hello')
   [1, 2].forEach(alert);
   ```
Bu o anlama gəlir ki + sonra və [] işarəsindən öncə ; işarəsi avtomatik qoyulmur. 
Bu səbəbdən hər kod sətri bitdikdən sonra xətadan qacmaq üçün ; qoyulması məqsədə uyğundur. 
* ___Javascript-də comment yazmaq üçün neçə üsul var.___
   * İki cür koment yazmaq növü var.
      * tək sətirlər üçün 
      ```
      // Bu koment bütün sətri tutur
      ```
      * və bir neçə sətri komentə almaq üçün
      ```
      /* Bu çoxsətirli 
      komentdir 
      */
      ```
***      
### 3. Variables ilə bağlı suallar
***

* ___let,var,const ifadələri arasında fərqlər nədir?___
   * CONST - Dəyərri daha sonradan dəyişdirilə bilməz. Mütləq dəyər təyin olunmalıdır.
   * VAR -
      * Dəyişənin blok limiti yoxdur. Ən aşağı funksiya içərisində görülə bilir.Yəni eyni funksiyanın içındə fərqli bir bloqun içində yazılsa belə əlçatandır.
      * Dəyişən funksiya çağırılanda müəyyən olunur, lakin dəyəri sətir ardıçılığına görə.
      ```
      function sayHi() {
      var phrase;
      alert(phrase); // undefined

      phrase = "Hello"; // ...
      }

      sayHi();
      ```
      * bir neçədəfə eyni dəyişən adını təyin etmək olar.
      ```
      var user = "Pete";
      var user = "John";

      alert(user); // John
      ```
* ___dəyişən təyin edərkən adlandırma qaydaları nələrdir?___
   * Dəyişən adları hərif, rəqəm və $ _ simvollarından ibarət ola bilər.
   * Birinci simvol rəqəm ola bilməz.
   * Bəzi rezer olunmuş adlar var hansılardan ki istifadə etmək olmaz. Misal üçün let, class, return və function.
   ```
   let let = 5; // bu addan istifadə etmək olmaz "let", error!
   let return = 5; // bu addan istifadə etmək olmaz "let", error!
   ```
* ___let x=5;x=7 yazıldığı zaman nəticə 7 olur.Belə olan halda 5 dəyərinin aqibəti nə olur? Yaddaşda yer tutur mu 5 dəyəri yoxsa başqa proses mi gedir?___
   * xeyir yer tutmur. 5 dəyəri qutudan silinir və 7 ilə əvəz olunur.
   ![](img.JPG)
   