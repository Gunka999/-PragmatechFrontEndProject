// a b və c ədədləri verilir. a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.
let a=5;
let b=9;
let c=10;
// if (c-a>c-b) {
//    console.log(`${b} ${c} ${a} -ye nisibeten daha yaxindir`)
// }else if(c-a<c-b){
//    console.log(`${a} ${c} ${b} -ye nisibeten daha yaxindir`)
// }
if (c - a > c - b) {
   console.log(`b data yaxindi`)
} else {
   console.log(`c daha  yaxindir`)
}


// x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir)
let x=5;
console.log(typeof(x));

// verilən x ədədinin rəqəmlərini ekrana çap edən proqram yazın

let n = 12345;
let l = n.toString();
let p ;
for (var i = l.length - 1; i >= 0; i--) {
    p=n%10;
    n=n-p;
    n=n/10;
    console.log(p);
}


// verilən 4 ədədi böyükdən kiçiyə doğru ekrana çap edən program yazın

// 1-ci variant
let d = 8;
let f =2;
let g =6;
let h =3;
let arr =[d , f, g, h];
arr.sort((a, b) => a - b);
console.log(arr);

// 2-ci variant


// 3 reqem olsaydi bu qaydada ederdim
let result_min;
let result_max;
result_min = Math.min(f,g,h);
result_max = Math.max(f,g,h);
g=(f+g+h)- result_min - result_max;
f=result_min;
h=result_max;
console.log(f , g , h);


// verilən kəsirli ədədin (nümumə: 4.234) tam hissəsi ilə kəsirli hissəsini ayrı ayrı ekrana çap edən program yazın

let u = 4.234;
let result;
let result_2;
result = Math.floor(u);
result_2=u-result;

console.log(result);
console.log(result_2);

// 3 nöqtənin koordinatları verilir.Bu verilən koordinatlara görə a nöqtəsinə ən yaxın nöqtəni tapan proqram yazın
// a_x=120,a_y=200
// b_x=230,b_y=400
// c_x=210,c_y=345


let AX =120;
let AY=200;
let BX =230;
let BY=400;
let CX=210;
let CY=345;

let AB =Math.sqrt(Math.pow((AX-BX),2)+ Math.pow((AY-BY),2));
let AC=Math.sqrt(Math.pow((AX-CX),2)+ Math.pow((AY-CY),2));

if (AB>AC) {
   console.log(`C noqtesi A noqtesine daha yaxindir.`);
}else if(AB<AC){
   console.log(`B noqtesi A noqtesine daha yaxindir.`);
}else if(AB==AC){
   console.log(`B ve C noqtesi A noqtesine eyni mesafededir`);
}else{
   console.log(`Mesafe hesablana bilmedi`)
}