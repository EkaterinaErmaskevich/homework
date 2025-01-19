var str = "Happiness, Time, Task, Apple, Wonderful, Joyful";
var re=/ [^aA, ]{6,}/g;
var res = str.match(re);
console.log(res);