//RESUELVE LOS EJERCICIOS AQUÍ

// 1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [, ana] = empleados;

// 2
const [{ email: emailLuis }] = empleados;

// 3
let a = 5;
let b = 3;
[a, b] = [b, a];

// 4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

// 5
const sumEveryOther = (...nums) => nums.reduce((acc, num) => acc + num, 0);

// 6
const addOnlyNums = (...args) =>
    args.filter(arg => typeof arg === "number").reduce((acc, num) => acc + num, 0);

// 7
const countTheArgs = (...args) => args.length;

// 8
const combineTwoArrays = (arr1, arr2) => [...arr1, ...arr2];

// 9
const onlyUniques = (...args) => [...new Set(args)];

// 10
const combineAllArrays = (...arrays) => [].concat(...arrays);

// 11
const sumAndSquare = (...nums) => nums.reduce((acc, num) => acc + num ** 2, 0);
