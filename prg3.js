//Swapping two numbers using third variable
let num1 = 25;
let num2 = 26;
let temp;

temp=num1;
num1=num2;
num2=temp;
console.log(`The value of num1 after swapping:${num1}`);
console.log(`The value of num2 after swapping:${num2}`);

//Swapping two numbers without using third variable
//Method1:
let a=4;
let b=66;
a=a+b;
b=a-b;
a=a-b;
console.log(`The value of a after swapping:${a}`);
console.log(`The value of b after swapping:${b}`);
//Method2:
[a,b]=[b,a];
console.log(`The value of a after swapping:${a}`);
console.log(`The value of b after swapping:${b}`);

