// function createMultipleCircle(_selector, _circleCount, _radius, _backgroundColor) {

//   // Verilən parametrlərə əsasən iç içə dairələr yaradan metod yazın.[Nümunə](https://i.pinimg.com/originals/20/64/c1/2064c19aa04bac67153ef8832618ccb0.gif)
//   // _selector -> yaradılan dairənin html daxilində hansı elementin daxilinə əlavə ediləcəyini müəyyən edəcək.Yəni '.box' argumenti daxil edildiyi zaman yaranan dairə .box adlı elementin daxilinə əlavə ediləcək
//   // _radius->yaradılacaq dairələrdən ən böyük dariənin radiusu daxil ediləcək ədəd olaraq
//   // _backgroundColor->yaradılacaq dairənin arxafon rəngi daxil ediləcək string olaraq

// // let daire = document.createElement("div");
// // // daire.classList.add(`${_selector}1`)
// // daire.className = 'box2';
// // document.body.appendChild(daire);
// // let diametr = _radius * 2;
// // daire.style.width =`${diametr}px`;
// // daire.style.height = `${diametr}px`;
// // daire.style.background = `${_backgroundColor}`;
// // daire.style.borderRadius = "50%";

// // document.querySelector(`${_selector}`).appendChild(daire);

// for (let i = 0; i <= _circleCount-1 ; i++) {
//   let daire = document.createElement("div");
// // daire.classList.add(`${_selector}1`)
//   daire.className = `${'box'+2+i}`, 'multiCircle';
//   // daire.className = 'multiCircle';
//   // daire.className = `${_selector}`+ i;
//   document.body.appendChild(daire);
//   let diametr = _radius * 2;
//   daire.style.width =`${diametr}px`;
//   daire.style.height = `${diametr}px`;
//   daire.style.background = `${_backgroundColor}`;
//   daire.style.borderRadius = "50%";
//   document.querySelector(`${_selector}`).appendChild(daire);
//   // document.getElementsByClassName(`${_selector}`).appendChild(daire)
// };

// // document.querySelector(`${_selector}`).appendChild(daire);

// }

// createMultipleCircle("body", 5, 50, "yellow");


let container = document.querySelector('.container');
let dom = document.createElement('div')
container.appendChild(dom)

function createMultipleCircle(_selector, _circleCount, _radius, _background) {
    for (let i = 0; i < `${ _circleCount}`; i++) {
        let circle = document.createElement('div')
        dom.className = `${_selector}`
        circle.className = 'circle'
        dom.appendChild(circle)
        circle.style.width = `${_radius*2/i}px`
        circle.style.height = `${_radius*2/i}px`
        circle.style.background = `${ _background}`
        circle.style.borderRadius = '50%'
        circle.style.border = '1px solid black'
        dom.style.display = 'flex';
        dom.style.justifyContent = 'center'
        dom.style.alignItems = 'center'
        circle.style.position = 'absolute'
        dom.style.position = 'relative'
    }
}
createMultipleCircle('box', 8, 200, 'yellow')