//Functions

function nameOfFunction(){
    //function body
    console.log("Hello Function");
}

nameOfFunction();


function add(a=10,b=1) {
    console.log((a+b));
}

add();
add(2,10);
add(24,60);
add(42,71);


/* let number1= parseInt (prompt("Enter a number: "));
let number2= parseInt (prompt("Enter a number: "));


add(number1,number2);    */

/*function checkNumber(x){
    if (x==0) {
        return "The number is zero";
    }
    else if (x>0) {10
        return "The number is positive";
    }
    else{
        return"The number is negative";
    }
}

let number3 = parseInt(prompt("Enter a number:  "));
console.log(checkNumber(number3));

*/



/*function checkNumbers(a,b,c) {
    console.log("Max " + Math.max(a,b,c));
}

let value1= parseInt(prompt("Enter first number"));
let value2= parseInt(prompt("Enter second number"));
let value3= parseInt(prompt("Enter third number"));

checkNumbers(value1,value2,value3);
*/



/*

function faktoryel(sayi,sonuc,i){
    for (i = 1; i <= sayi; i++) {
      sonuc=sonuc*i;
        
    }
    console.log(sonuc);
}

let sonuc=1,i;
let sayi= parseInt(prompt("Enter number"));

faktoryel(sayi,sonuc);
*/

let str = prompt("Bir string giriniz");
let str2 = "";
function ters(){
for (var i = str.length - 1; i >= 0; i--) {
  str2 += str[i];
}
return str2;
}
console.log(ters(str2));