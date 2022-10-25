'use strict'
//1
let x = 1;
let y = 2;

let res1 = ""+x+y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 =  y>x// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = x<y// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = 'x'*y// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // "number"

// 2
let num = prompt(' number ?');
if (num %2==0){
    alert('Number is even');
}else{
    alert('Number is odd');
};
if(num%7==0){
    alert('Number is multiple 7');
}else{
    
    alert('Number is not multiple 7');
    
};
 
//3
let arr=[7,'hi',true,null];
alert(arr.length);
let a=prompt('any number?');
arr.push(a);
alert(arr[4]);
arr.shift();
alert(arr);

//4
let cityres="";
let cities = ["Rome", "Lviv", "Warsaw"]; 
for(let i=0; i < cities.length; i += 1){
    cityres += cities[i]+'*';
};
console.log(cityres);

// 5

let age=prompt('are u 18?');
if  (age >=18)
{ alert('u are full grown');

}else {
    alert('Oh u are kiddo');
}

// 6
let a= +prompt('?');
let b= +prompt('?');
let c= +prompt('?');
if(a >0 && b>0&&c>0 || b> a+c){
if((a*a) == (b*b)+(c*c)||(c*c) == (b*b)+(a*a)||(b*b) == (a*a)+(c*c)||(a==3 ||4)&&(b==4 || 3)&& c==5){
console.log('triangle is right')
}else{
console.log('triangle is not right');
};
let pp= (a+b+c)/2;
let area;
area=Math.sqrt(pp*(pp-a)*(pp-b)*(pp-c));
console.log(area.toFixed(3));
}else{
alert('incrrect data');
};

//7



let date = new Date();
let time = date.getHours();

if(time <5 || time >23){
  
 alert('Доброї ночі');
 
} else if (time>=5 || time <=11) {
    
    alert('Доброго ранку');
       
 } else if (time>=12 || time <=17){
 
    alert('Доброго дня');
 }else if(time>=18 || time <=23){
     
    alert('Доброго вечора');
         
}


