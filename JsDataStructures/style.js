// function Foo() {
//     console.log(i)
//     i++

//     if (i < 100) {
//         Foo()
//     }
// }
// let i = 1;
// while (i < 100) {
//     console.log(i)
//     i++
// }

let arr = ["Samir", "Memmed", "Hesen"];
let obj = {
        ad: "Sabir",
        soyad: 'Kerimov',
        yas: 41,
        qocaliq: true,
        sacRengi: 'Qara'
    }
    // for (let i = 0; i < 3; i++) {
    //     console.log(arr[i])
    // }

for (let key in arr) {
    console.log(key, arr[key])
}
console.log(typeof arr)












Variant 01
let adlar = ['Ehmed', 'Memmed', 'Sahil']
let soyadlar = ['Ehmedov', 'Qasimov', 'Haciyev'];
let telebeler = [adlar, soyadlar];
console.log(telebeler[1][2])



Variant 02
let telebeler = [
    ['Ehmed', 'Memmed', 'Sahil'],
    ['Ehmedov', 'Qasimov', 'Haciyev']
];
console.log(telebeler[1][2])




Variant 03
let telebe01 = {
    ad: 'Ehmed',
    soyad: "Ehmedov"
}

let telebe02 = {
    ad: 'Memmed',
    soyad: "Qasimov"
}

let telebe03 = {
    ad: 'Sahil',
    soyad: "Haciyev"
}
let telebeler = [telebe01, telebe02, telebe03]
console.log(telebeler[2]['soyad'])




Variant 04

let telebeler = [{
    ad: 'Ehmed',
    soyad: "Ehmedov"
}, {
    ad: 'Memmed',
    soyad: "Qasimov"
}, {
    ad: 'Sahil',
    soyad: "Haciyev"
}]
console.log(telebeler[2]['soyad'])




Variant 05

let telebeler = {
    adlar: ['Ehmed', 'Memmed', 'Sahil'],
    soyadlar: ['Ehmedov', 'Qasimov', 'Haciyev']
}
console.log(telebeler["soyadlar"][2])




es (12 sloc)  352 Bytes
   
// Variant 01
let adlar = ['Ehmed', 'Memmed', 'Sahil']
let soyadlar = ['Ehmedov', 'Qasimov', 'Haciyev'];
let yaslar = [23, 34, 13]
let telebeler = [adlar, soyadlar, yaslar];
for (let j = 0; j < 3; j++) {
    console.log(`${telebeler[0][j]} / ${telebeler[1][j]} / ${telebeler[2][j]} `)
}

function FindStudent(studName) {
    // 
}

FindStudent('Ehmed')