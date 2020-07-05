'use strict';
alert('Welcom');
var userName = prompt('Please type your name');   
alert('Hello' + userName);
console.log("The user's name is "+ userName);
var userAge = prompt('What is your age');
alert('Your age is ' + userAge);
console.log("The user's age is "+ userAge);
var txt;
var human = confirm("Are you a human?");
if (human == true) {
  txt = "Thank You";
} else {
  txt = "relly??!! NOT A HUMAN!!!";
}
document.write('<h3>' + txt + '</h3>');