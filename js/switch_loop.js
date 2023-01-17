//Conditinal statments if - else if - else
let a =0;
switch(a>5){
    case false:
        console.log("a 5 ten buyuk degil");
        break;
    case true:
        console.log("a 5 ten buyuk");
        break;
    default:
        console.log("default");
        break;
}

let newDate = new Date();
console.log("new date: " + newDate.getDate());


switch(newDate.getDay()){
    case 1:
        console.log("pazartesi");
        break;
    case 2:
        console.log("Sali");
        break;
    case 3:
        console.log("carsamba");
        break;
    case 4:
        console.log("Persembe");
        break;
    case newDate=5:
            console.log("Cuma");
            break;
     case 6:
        console.log("cumartesi");
        break;
    case 0:
        console.log("pazar");
        break;
    default:
        console.log("default");
        break;
}


//LOOOOOOOPS

let i=1, n =5;

//while,do &&while,for

/*while(i<=n){
    console.log("While loop"+i);
    i++;
}
*/

/*let sum=0;
let number= parseInt (prompt("Enter a number: "));

while(number>=0){
    sum=number+sum
    number= parseInt (prompt("Enter a number: "));
    
}
console.log("toplam: "+ (sum));
*/

do{

} while(i<=n)

//for loop

for(let i3=1; i3<=5; ++i){
    console.log("for loop:"+i3);
    break;
}





for (let a = 0; a<=50; a++) {
    if(a % 2 == 0){
        console.log(a);
    }
    
}


let cars=["a","b","c"]
for (let b = 0; b <=cars.length; b++) {
    console.log(cars[b]);
    
}


let kalan,tbs =0;
let sayi= parseInt (prompt("Enter a number: "));

for (let i = 0; i < sayi; i++) {
    kalan=sayi%1

    
}

let z=Math.floor(Math.random()*100);
let tahmin= parseInt (prompt("Enter a number: "));
while(true){
    if(tahmin=z){
        console.log("tebrikler");
        break;
    }
    else if(tahmin<z){
        console.log("daha buyuk");
    }
    else if(tahmin>z){
        console.log("daha kucuk");
    }
    else{
        break;
    }
}

