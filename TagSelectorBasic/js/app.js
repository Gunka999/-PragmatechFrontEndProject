
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

const ClickBtns = document.querySelectorAll(".favoriteList-btn")

for (let i = 0; i < ClickBtns.length; i++) {
   ClickBtns[i].addEventListener("click", (e) => {
      if (!ClickBtns[i].classList.contains("addCSS")) {
         ClickBtns[i].classList.add("addCSS")
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
      } else {
         ClickI[i].classList.remove("ClickIAddCSS")
      }
   })
}

