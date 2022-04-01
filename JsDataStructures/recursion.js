
// (function(num) {
//    console.log(num);
//    let nextNum = num - 1;

//    if (nextNum > 0) {
//       arguments.callee(nextNum)
//    }

//    // sadəcə burda kod yazmağınıza icaze verilir
//    // teleb olunan 1-100 arasındakı ədədlərin ekrana cap edilməsini təmin etməkdir
//    // while for və digər loop expressionları istifadə etmək olmaz
// })(3);


(function(eded) {
   console.log(eded);
   let NovbetiEded = eded + 1;
   
   if (NovbetiEded <100) {
      arguments.callee(NovbetiEded)
   }

   // sadəcə burda kod yazmağınıza icaze verilir
   // teleb olunan 1-100 arasındakı ədədlərin ekrana cap edilməsini təmin etməkdir
   // while for və digər loop expressionları istifadə etmək olmaz
})(0);



let i = 1;


function DoSomething() {
    console.log(i)

    if (i < 100) {
        i++
        DoSomething()
    }
}
DoSomething() 

// sadəcə burda kod yazmağınıza icaze verilir
//    // teleb olunan 1-100 arasındakı ədədlərin ekrana cap edilməsini təmin etməkdir
//    // while for və digər loop expressionları istifadə etmək olmaz
// })(3);


(function() {


   // sadəcə burda kod yazmağınıza icaze verilir
   // teleb olunan 1-100 arasındakı ədədlərin ekrana cap edilməsini təmin etməkdir
   // while for və digər loop expressionları istifadə etmək olmaz
})();