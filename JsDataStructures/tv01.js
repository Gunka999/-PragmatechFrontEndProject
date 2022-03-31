// inputs

let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = [names, surnames, ages];
for (let j = 0; j < 5; j++) {
    console.log(`Ad: ${students[0][j]} , Soyad: ${students[1][j]} , Yas: ${students[2][j]} `)
}



//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34


// let a=0;
// for(let i =0; i<5; i++){
//    let arr =[];
//    arr[i]=a;
//    a=a+1;
//    console.log(arr);
// }