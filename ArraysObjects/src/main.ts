let stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1984;
guitars.unshift("jim");

let test = [];
let bands: string[] = [];
bands.push("van halen");

//tuple
let myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

//OBJECTS
let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop2 = false;


interface Guitarist {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh : Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'ou812']
}


let jp : Guitarist = {
    name: 'Jimmie',
    // active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp


const greetGuitarist = (guitarist: Guitarist) => {
return  `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(jp));
