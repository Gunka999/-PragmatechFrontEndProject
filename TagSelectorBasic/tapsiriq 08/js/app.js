
favoriteListText = [
   "Avengers",
   "shutter island",
   "Kong: Skull Island",
   "Grand Budapest Hotel",
   "Inception",
   "The Shawshank Redemption",
   "Se7en",
   "The Dark Knight",
   "Goodfellas",
   "The Matrix"

]

const favoriteList = document.querySelector('.favoriteList');

let list;
for (let aList of favoriteListText){
   list = `<button class="favoriteList-btn">${aList} <i class="fa-solid fa-circle-check circleCheck"></i> </button>`
   favoriteList.innerHTML += list;
}

const ClickBtns = document.querySelectorAll(".favoriteList-btn");

for (let i = 0; i < ClickBtns.length; i++) {
   ClickBtns[i].addEventListener("click", (e) => {
      if (!ClickBtns[i].classList.contains("addCSS")) {
         ClickBtns[i].classList.add("addCSS")
         for(let j = 0; j < ClickBtns.length; j++){
            if(j!=i){
               if(ClickBtns[j].classList.contains("addCSS")){
                  ClickBtns[j].classList.remove("addCSS")
               }
            }
         }         
      } else {
         ClickBtns[i].classList.remove("addCSS")
      }
   })
}


const ClickI = document.querySelectorAll(".circleCheck")
for (let i = 0; i < ClickI.length; i++) {
   ClickBtns[i].addEventListener("click", (e) => {
      if (!ClickI[i].classList.contains("ClickIAddCSS")) {
         ClickI[i].classList.add("ClickIAddCSS")
         for(let j = 0; j < ClickI.length; j++){
            if(j!=i){
               if(ClickI[j].classList.contains("ClickIAddCSS")){
                  ClickI[j].classList.remove("ClickIAddCSS")
               }
            }
         } 
      } else {
         ClickI[i].classList.remove("ClickIAddCSS")
      }
   })
}


function myFunction(){
   let x = document.getElementById("myText").value;
   // document.getElementById("demo").innerHTML = x;
 
   favoriteListText.push(x)
}

console.log(x)


