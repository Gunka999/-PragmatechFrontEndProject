// inputs

let students = [{
   ad: 'Eli',
   soyad: 'Piriyev',
   yas: 23
}, {
   ad: 'Ehmed',
   soyad: 'Memmedov',
   yas: 34
}, {
   ad: 'Sara',
   soyad: 'Qurbanova',
   yas: 40
}, {
   ad: 'Sevda',
   soyad: 'Ezizova',
   yas: 58
}, {
   ad: 'Qurban',
   soyad: 'Sadiqzade',
   yas: 60
}]

for(let j=0; j<5; j++){
   console.log(`AD: ${students[j]["ad"]} , Soyad: ${students[j]["soyad"]} , Yas: ${students[j]["yas"]}`)
}

//expected output
// Ad: Eli,Soyad:Piriyev,Yas:23
// Ad: Ehmed,Soyad:Memmedov,Yas:34