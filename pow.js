let a = 3
let b = 5
function pow(a, b) { 
let result = a;
if (b===0)
  result = 1;

  else
  for (let i =1; i < b; i++) {
    result *= a;
  }
  return result;
}
console.log ("Результат зведення " + a + " у ступінь " + b + " : "+ pow(a,b))