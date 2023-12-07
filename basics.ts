// Primitives: number, string, boolian
// More complex types: arrays, objects
// Function type, parameters

// Primitives
let age: number;
age = 39;

let userName: string | string[];
userName: 'Mila';

let isDeveloper: boolean;
isDeveloper = true;

// More complex types:
let hobbies: string[];
hobbies = ['Sports', 'Cooking', 'Beauty'];

type Person = {
  name: string;
  age: number;
};
let person: Person;

person = {
  name: 'Mila',
  age: 40,
};

let people: Person[];
// Type inference
// let course = 'React';
// course = 12334

// Union types
let course: string | number = 'React';
course = 12334;
// Type aliases

// Functions & types
function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3, 4];
const updatetArray = insertAtBeginning(demoArray, -1);
