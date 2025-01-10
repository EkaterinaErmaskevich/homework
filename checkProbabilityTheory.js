var min = 100;
var max = 1000;
var cycles = 8;
var evenCount = 0;
var oddCount = 0;
var randomNumber = 0
var ratioEven = 0
var ratioOdd = 0

function checkProbabilityTheory() {
    ratioEven = evenCount / countNumbers * 100
    ratioOdd = oddCount / countNumbers * 100
}

function isEven(randomNumber) {
    if (randomNumber % 2 == 0)
        evenCount += 1;
    else
        oddCount += 1;
}

function getRandomInt(min, max, cycles) {
    min = Math.ceil(min);
    max = Math.floor(max);

    randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;

}

var countNumbers = 0
while (countNumbers < cycles) {
    countNumbers += 1
    getRandomInt
    isEven(randomNumber)
    checkProbabilityTheory(countNumbers,evenCount,oddCount)

};


console.log("Кількість згенерованих чисел : " + countNumbers)
console.log("Кількість парних чисел : " + evenCount);
console.log("Кількість непарних чисел : " + oddCount);
console.log("Відсоток парних чисел : " + ratioEven + "%");
console.log("Відсоток непарних чісел: " + ratioOdd + "%")
