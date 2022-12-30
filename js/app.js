let a=5;
console.log(a);

//Arrays
let cars=["Audi", "BMW", "Tofas"];

console.log(cars[0]);

//let cars = new Array("Audi", "BMW", "Tofas"); AYNISI

///////////////////////////////////////////////////////////////////////////////
/*
cars.pop(); en son eleman silinir | last element will be removed

cars.push("Volvo"); sona istedigimiz elemani ekler | added to last of the list

cars.shift();  ilk eleman silinir | first element will be removed

delete cars[2]; tam olarak silinmez bu yuzden kullanamamaya calis

cars.unshift("Volvo"); ilk siraya eleman ekler | added as first element

sort=alfabetik siraya gore siralar
reverse=ters cevirir

*/

const newCars=["Audi", "BMW", "Tofas"]; //bir seyler ekleyebiliriz ama bu ucluyu silemeyiz.Bu uclu cok guclu
//const olarak atanirsa degistirilemez const=constant=sabit


//Dates

const d = Date();
console.log("Current date:  "+d);

//ISO Date type (YYY-MM-DDTHH:MM:SSZ)
//captilal T is a seperator date and tame
const newDate=new Date("2006-07-13T12:00:00");
console.log("newdate:  "+newDate);


//math

console.log(Math.PI);

console.log(Math.round(Math.PI));

//math.ceil ->her zaman yukariya dogru yuvarlar      math.floor->her zaman asagiya yuvarlar


console.log(Math.pow(3,3));
console.log(Math.random());
console.log(Math.floor(Math.random()*100));
console.log(Math.floor(Math.random()*11));

//3 ile 7 arasinda random deger veren kod

console.log(Math.floor(Math.random() * 5 + 3));//0ile 1 arasi *5  0 ile 4 arasi +3 3 ile 7


console.log(Math.floor(Math.random() * 5 + 4));
