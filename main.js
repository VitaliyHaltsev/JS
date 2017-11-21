// 1) функции, параметры, return
// function Sum(a, b, c) {
//     // var res = a + b; // локальная переменная
//     if(!c){
//         c = 0;
//     }

//     return a + b + c;
// }

// var Div2 = function() {
//     console.log(2);
// }

// // Sum(10, 5); // a = 10;

// var result = Sum(2, 3) - Sum(3, 4, 8);
// // console.log(result);


// function sumAll() { // arguments = [7,9,4,3,5,3,523]
//     // call() bind() apply()
//     // console.log(arguments);

//     var sum = 0;

//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     console.log(sum);

//     return sum;
// }


// sumAll(2,3,42,1);
// sumAll(7,9,4,3,5,3,523); 
// sumAll();





m = 20;

function ff1(){
    
    console.log(m);

   
    ff2();
    function ff2(){
        console.log(m);
    }
}

// console.log(m);

// ff1();



// ------------------------------------------------

// 2) области видимости, lexicalEnvironment, global scope
// области видимости определяются только функциями
x = 10; // global
var y = 20;  // local, но также записывается в global

// console.log(window);

// function F(a, b, c) {
//     // lexicalEnvironment = { a: 2, b: 3, c: undefined, z: undefined }
//     console.log(a, b, c, z);
//     // debugger;

//     var z = 20;
//     z++;
//     // lexicalEnvironment = { a: 2, b: 3, c: undefined, z: 21 }
    
//     p = 30; // in global
    
//     return a + b + c;
// }

// F(2, 3);




// ------------------------------------------------

// p = 20; // global scope

// function F1(a) {
//      // lexicalEnvironment = { a: 5 }
//      // F2.scope = Global Scope = window
//     console.log(a);
//     F2(29);
//     console.log(a);



//     function F2(b) {
//         // lexicalEnvironment = { b: 29 }
//         // F2.scope = F1.lexicalEnvironment = { a: 5 }

//         console.log(a + b + p);

//         a += 10;
//         p = p + 50;
//     }
// }

// F1(5);

// 1. lexicalEnvironment определяется во время вызова функции (с передачей аргументов)
// 2. ссылка scope определяется во время описание функции (т.е. её создании)

// function doIt(x, y) { 
//     // lexicalEnvironment = { x: 6, y: undefined, g: undefined }
//     // doIt.scope => Global Scope
//     var g = 10;
//     // lexicalEnvironment = { x: 6, y: undefined, g: 10 }
// }

// var x = 20;

// function F1() {
//     var x = 50;
    
//     F2(x, 10);
// }

// function F2(x, y) { // F2.scope = Global Scope = window
//     console.log(x + y);
// }

// F1();
// F2(10);

// ------------------------------------------------

// 3) Замыкание
// https://myrusakov.ru/javascript-closures.html
// http://es6-features.org
// http://getinstance.info/articles/javascript/closures-in-javascript/
// http://learn.javascript.ru/function-declaration-expression
// Замыкание - функция вместе со всеми переменными, которые ей доступны.


// разбор

// y = 500;

// function F11() {
//     var p = 5,
//         d = 50;

//     console.log(y);

//     function F22(a) {
//         var x = 10;

//         function Sum(a, b) {
//             // debugger;

//             return a + b + d + x;
//         }
        
//         return p + a + y + Sum(2, 8);
//     }

    

    
//     return F22(10);
// }


// var result = F11();
// console.log(result);


function F1(a) {
    var x = a + 5;

    return function (b) {
        var f1_x = x;
        // console.log('in Sum:', a, b, x);
        if (x == 10) {
            x = 0;
        } else {
            x++;
        }
        // x = x == 10 ? 0 : x+1;

        return a + b + f1_x;
    };
}

var res = F1(1);

console.log(res(20));
console.log(res(20));
console.log(res(23));
console.log(res(24));
console.log(res(2));

// console.log(result);


// sychov.saveliy@gmail.com