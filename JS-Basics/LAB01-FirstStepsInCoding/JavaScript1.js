function solve() {
  console.log("Hello SoftUni");

}

solve();
function printNumber() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(7);
    console.log(8);
    console.log(9);
    console.log(10);
}

printNumber();

function squareArea(input) {
    let a = Number(input[0]);
    let area = a * a;;
    console.log(area); 
}

squareArea(["5"]);

function greetings(input){
    let name = input[0];
    console.log(`Hello, ${name}!`);
}

greetings(["Andy"]);

function concatenateDate(input) {
    console.log("I am firstName> <lastName>, a <age>-ears old person from <town>.");
  
}

concatenateDate(['Andrey', 'Gabov', 23, 'Sofia'])

function usdToBgn(input){
    let dollar = Number(input[0]);
    // $1 = 1.79549 lv.
    // $2 = 2 * 1.79549 lv. and etc.

    let leva = dollar * 1.79549;
    console.log(leva);
}

usdToBgn(["12.5"]);

function inchesToCm(input){
  let  = Number(input[0]);
  // 1 inch = 2.54 cm.
  // 2 inches = 2 * 2.54 cm. and etc.

  let inch = cm * 2.54;
  console.log(cm);
}

inchesToCm(["5"]);
