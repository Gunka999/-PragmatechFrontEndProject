function createPoolTable() {
   // 1-i ağ 1-i qara 7-si mavi 7-si qırmızı olmaqla ümümilikdə 16 bilyard topu yaradın
   // ağ dairə xaricində geri qalan topların daxilində nömrələri yazılacaq
   // bilyard masasI görüntüsü üçün [link](https://upload.wikimedia.org/wikipedia/commons/5/5e/American-style_pool_table_diagram_%28empty%29.png)-dəki arxafon şəklindən istifadə edin.
   // yaradılan toplar random olaraq görüntüsü verilən bilyard masası üzərində random yerlərdə yerləşməlidir.

   let agTop = document.createElement("div");
   let qaraTop = document.createElement("div");
   i=1;

   while (i<=7){
      let maviTop = document.createElement("div");
      let qirmiziTop = document.createElement("div");

      maviTop.className = 'maviTop';
      qirmiziTop.className = 'qirmiziTop';

      let randMaviTopX = Math.random() * 500;
      let randMaviTopY = Math.random() * 1200;
      let randQirmiziTopX = Math.random() * 500;
      let randQirmiziTopY = Math.random() * 1200;
      
      maviTop.style.top = `${randMaviTopX}px`;
      maviTop.style.left = `${randMaviTopY}px`;
      qirmiziTop.style.top = `${randQirmiziTopX}px`;
      qirmiziTop.style.left = `${randQirmiziTopY}px`;
      qirmiziTop.innerHTML=i;
      maviTop.innerHTML=i;
      document.querySelector(`body`).appendChild(maviTop);
      document.querySelector(`body`).appendChild(qirmiziTop);
      i++
   }
      
   agTop.className = 'agTop';
   qaraTop.className = 'qaraTop';

   let randAgTopX = Math.random() * 500;
   let randAgTopY = Math.random() * 1200;
   let randQaraTopX = Math.random() * 500;
   let randQaraTopY = Math.random() * 1200;

   agTop.style.top = `${randAgTopX}px`;
   agTop.style.left = `${randAgTopY}px`;
   qaraTop.style.top = `${randQaraTopX}px`;
   qaraTop.style.left = `${randQaraTopY}px`;
   qaraTop.innerHTML="1";

   document.querySelector(`body`).appendChild(agTop);
   document.querySelector(`body`).appendChild(qaraTop);

 }
 
 createPoolTable()