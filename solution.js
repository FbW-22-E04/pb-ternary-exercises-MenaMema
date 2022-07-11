const isDog = true;
console.log(isDog == true ? "pat, pat, good dog" : "find me a dog to pat");

const speedLimit = 50;
const yourSpeed = 45;
console.log(
  yourSpeed > speedLimit
    ? "you're going too fast!"
    : "you are driving below the speed limit, Oma"
);

const age = 29;
console.log(age < 16 ? "serve butter beer" : "serve beer");

const isStudent = true;
console.log(isStudent === true ? "Ticket cost €5,00" : "Ticket cost €12,00");

const okMarie = "cake";
console.log(okMarie === "cake" ? "Let them eat cake" : "Oh, bother");

const num1 = 30;
const num2 = 939;
const num3 = 40.9;

console.log(num1 % 2 === 0 ? `${num1} is even` : `${num1} is odd`);
console.log(num2 % 2 === 0 ? `${num2} is even` : `${num2} is odd`);
console.log(num3 % 2 === 0 ? `${num3} is even` : `${num3} is odd`);
