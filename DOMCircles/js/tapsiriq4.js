function randomCirclePlacement() {
   // radiusu 5px olan bir dairə yaradın
   // funksiya hər dəfə icra olunanda yaradılan dairə body elementinin daxilində təsadufi bir yerdə görünməlidir

   let daire = document.createElement("div");
   daire.className = 'randomCircle';
   let randX = Math.random() * 1000;
   let randY = Math.random() * 1000;

   daire.style.top = `${randX}px`;
   daire.style.left = `${randY}px`;
   document.querySelector(`body`).appendChild(daire);

 }
 randomCirclePlacement()