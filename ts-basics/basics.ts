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
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3, 4];
const updatetArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3,]
const stringsArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatetArray[0].split('');

// type Description = {
//   name: string;
// };

// type Car = {
//   id: string;
//   price: number;
//   description?: Description;
// };

type Description = {
  name: string;
};

interface Car {
  id: string;
  price: number;
  description?: Description;
}

interface Toyota extends Car {
  color: 'red' | 'yellow' | 'black' | 'magenda';
}

const car: Car = { price: 2, id: 'asda', description: { name: 'asda' } };

const toyota: Toyota = { color: 'red', price: 21, id: '2asd' };

const func = (): Toyota[] => [
  { color: 'red', price: 21, id: '2asd' },
  { color: 'yellow', price: 21, id: '2asd' },
];

const cars = func();

cars.find((car) => car.color === 'yellow');

interface BMW<T> extends Car {
  color: T;
}

const bmw: BMW<'green'> = { color: 'green', price: 21, id: '2asd' };

const bmw2: BMW<'dark'> = { color: 'dark', price: 21, id: '2asd' };

const rand = { f: 'asd' } as { f: number };

interface F<T> {
  f: number | T;
}

const rand1: { f: number } = { f: '1' };

const rand2: F<string> = { f: '1' };

const rand3: F<undefined> = { f: 1 };

type A = number;
type B = number;

const d: A | B = 1;

export interface Nasdasd {}

// const func2 = (onlyRedCars: BMW<'red'>): BMW<'red' | 'yellow'>[] => [
//   { color: 'red', price: 21, id: '2asd' },
//   { color: 'yellow', price: 21, id: '2asd' },
// ];

// const newLocal = func2({ color: 'yellow', price: 2, id: 'asd' });

const func2 = (toyota: Toyota): Toyota[] => [
  { color: 'red', price: 21, id: '2asd' },
  { color: 'yellow', price: 21, id: '2asd' },
];

const newLocal = func2({ color: 'yellow', price: 2, id: 'asd' });

type G = {
  // arr: string[] | undefined | null | null[];
  // do: any;
  do2: unknown;
};

const r: G = {
  do2: {},
};

// r.do2.asda

// const colorForMyCar: Toyota['color'] = 'red';

const paint1 = (asd: Toyota['color']) => asd;

const paint2 = (asd: Toyota['color']) => asd;

() => paint1('red') + paint2('yellow');
