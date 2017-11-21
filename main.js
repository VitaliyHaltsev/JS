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

p = 20; // global scope

function F1(a) {
     // lexicalEnvironment = { a: 5 }
     // F2.scope = Global Scope = window
    console.log(a);
    F2(29);
    console.log(a);



    function F2(b) {
        // lexicalEnvironment = { b: 29 }
        // F2.scope = F1.lexicalEnvironment = { a: 5 }

        console.log(a + b + p);

        a += 10;
        p = p + 50;
    }
}

F1(5);

// 1. lexicalEnvironment определяется во время вызова функции (с передачей аргументов)
// 2. ссылка scope определяется во время описание функции (т.е. её создании)











// ------------------------------------------------

// 3) Замыкание
// https://myrusakov.ru/javascript-closures.html
// http://es6-features.org
// http://learn.javascript.ru/function-declaration-expression
// Замыкание - функция вместе со всеми переменными, которые ей доступны.


// разбор

y = 500;

function F11() {
    var p = 5,
        d = 50;

    function F22(a) {
        var x = 10;
        debugger;
        return p + a;
    }

    
    return F22(10);
}


// var result = F11();
// console.log(result);