// function createCircle(_selector, _radius, _backgroundColor) {
//    // Verilən parametrlərə əsasən dairə yaradan metod yazın
//    // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
//    // _radius->yaradılacaq dairənin radiusu daxil ediləcək ədəd olaraq
//    // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq
//  }
 

 function createCircle(_selector, _radius, _backgroundColor) {
   let daire = document.createElement("div");
   let diametr = _radius * 2;
   daire.style.width = `${diametr}px`;
   daire.style.height = `${diametr}px`;
   daire.style.borderRadius = "50%";
   daire.style.backgroundColor = `${_backgroundColor}`;
   document.querySelector(`${_selector}`).appendChild(daire);
 }
 
 createCircle(".box2", 50, "yellow");
