//Practice level 1 
//qstn 1
//declare variable and assign after declaration
let a,b,c;
a=3;
b=2;
c=a+b;

alert(c);
//qstn 2
// Variable of my choice and storing value of different data  types
let hello="hello its me!!";
let home_no= 78;
let combine = "i Am home!";
console.log(hello);
console.log(home_no);
console.log(combine);

//Qstn 3 
//Take two inputs using prompt()
let m=prompt('enter your first name');
let n=prompt('enter your second name');
let o= m+n;
console.log(o); 

//Qstn 4
//Warnings and error in the console
let p="Something happens!!";
console.warn("There is danger ahead!");
console.error("error");

//Qstn 5
//Dynamically typed language is in index


//Practice level 2
//Qstn 1
//addition multiply divide using prompt
const x= prompt('enter the first number');
const y= prompt('enter the second number');
const sum= x+y;
console.log("sum is " ,sum);
const sub = x-y;
console.log("subtraction is" ,sub);
const mult = x*y;
console.log("multiply is " ,mult);
const div =x/y;
console.log("division is" ,div);

//Qstn 2
//Declare 5 variables using let and using var
let w,e,f,g,h;
var v,q,r,t,u;
console.log(w,e,f,g,h);
console.log(v,q,r,t,u);

//Qstn 3
//create conzstant with same name and fix the mistake
//constant create with same name!
//We cannot create the constant with the same name if we do so an error occur<br>
//In order to fix the problem we have to rename it with different name..
const hi= 'sushmita';
const hy ='i am a girl';
console.log(hi);
console.log(hy);

//qstn 4
let i,j;
i=4;
j=3;
s=i+j;
console.log(s);

//Practice level 3
//qstn 1 parse float and parse integer
let num1=parseInt(10.33);

let num2=parseFloat(3.4);
console.log(num1 , num2);

//qstn 2 + unary operator in string and its output must be 1000
let rem='999';
rem++;
console.log(rem);

//qstn 3 -unary opertaor in string
let umm="88";
umm--;
console.log(umm);

//qstn 4 type of 
let ter="hello";
let fix=98;
console.log (typeof(ter,fix));


//qstn 5
let mr='Ram said,"Programming is a fun"';
console.log(mr);

