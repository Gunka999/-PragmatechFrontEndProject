// inputs

let names = ['Eli', 'Ehmed', 'Sara', 'Sevda', 'Qurban'];
let surnames = ['Piriyev', 'Memmedov', 'Qurbanova', 'Ezizova', 'Sadiqzade'];
let ages = [23, 34, 40, 58, 60];
let students = {
    adlar: names,
    soyadlar: surnames,
    yaslar: ages
}

for (let j = 0; j < 5; j++) {
    console.log(`Ad: ${students["adlar"][j]} , Soyad: ${students["soyadlar"][j]} , Yas: ${students["yaslar"][j]} `)
}


//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34