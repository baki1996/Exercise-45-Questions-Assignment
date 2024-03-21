//equality and unequality
var myName = "Bakhtawar";
console.log(myName == "Bakhtawar"); //true       equal to
console.log(myName !== "bakhtawar"); //true       not equal to
//  numberics
var mynumber = 10;
console.log(mynumber == 10); //true
console.log(mynumber !== 10); //true
console.log(mynumber > 5); //true        greater than
console.log(mynumber < 5); //false       less than
console.log(mynumber <= 5); //false       less than or equal to
console.log(mynumber >= 5); //true        greater than or equal to
// and && ==== or ||(pipe)
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5); //false
//true stat     false stat 
console.log(num1 > 9 || num2 < 5); //true
//true stat     false stat       
var myArray = [2, 3, "Bakhtawar"];
var myString = "Rida";
console.log(Array.isArray(myArray)); //true
console.log(Array.isArray(myString)); //false
