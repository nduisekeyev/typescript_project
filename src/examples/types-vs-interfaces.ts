// Types vs Interfaces

// 1. Declaration Syntax:

/**
 * Type: The type keyword is used to create a type alias.
 * It allows you to create a new name for a type,
 * including primitive types, union types, intersection types, and more.
 */

type MyUnionType = string | number | boolean; // Union types cannot be implement or extended

type MyType = {
  name: string;
  age: number;
};

interface MyInterface {
  name: string;
  age: number;
}

function MyName(): MyUnionType {
  return 'Nomad Montreal';
}

function MyTypeGet(): MyType {
  return { name: 'John', age: 25 };
}

function MyInterfaceGet(): MyInterface {
  return { name: 'John Doe', age: 25 }; // Correct usage of MyInterface
}

console.log('My Union Type:', MyName());
console.log('My Type:', MyTypeGet());
console.log('My Interface:', MyInterfaceGet());

// 2. Extending/Implementing:

/**
 * Type: Types can be used with union (|) and intersection (&) operators to compose new types,
 * but they cannot be extended or implemented.
 */

type A = { foo: number };
type B = { bar: string };
type C = A & B; // Intersection

export function TypeIntersection(): C {
  return { foo: 25, bar: 'some bar' };
}

/**
 * Interface: Interfaces can be extended and can also be used
 * to describe the structure that a class should have using the implements keyword.
 */

interface AFace {
  foo: number;
}

interface BFace {
  bar: string;
}

interface CFace extends AFace, BFace {} // Extending

export function InterfaceExtend(): CFace {
  return { foo: 33, bar: 'Old bar' };
}

// Using classes
class Person implements MyInterface {
  // Gives an error if using MyUnionType
  name = 'John ';
  age = 25;
}

export const person = new Person();

// 3. Declaration Merging:

/**
 * Type: Types do not support declaration merging.
 * If you define two types with the same name, it will result in an error.
 *
 * Interface: Interfaces support declaration merging.
 * If you declare an interface with the same name multiple times,
 * TypeScript will merge the declarations into a single interface definition.
 *
 */

interface Car {
  brand: string;
}

interface Car {
  model: string;
}

// Merged interface
// interface Car {
//   brand: string;
//   model: string;
// }

export function GetCar(): Car {
  return { brand: 'toyota', model: 'camry' };
}

// 4. Compatibility

/**
 * Type: Types can be used in a wider range of scenarios,
 * including union types, mapped types, and more advanced type manipulation.
 *
 * Interface: Interfaces are typically used for defining object shapes
 * and are more commonly used in scenarios like class implementations and extending interfaces.
 */

// More Examples ...

// Primitive types

type Address = string;

type NullOrUndefined = null | undefined;

export function GetAddres(): Address | NullOrUndefined {
  return undefined;
}

// Union types

type Transport = 'Bus' | 'Car' | 'Bike' | 'Walk';

export function GetTransport(): Transport {
  return 'Car';
}

interface CarBattery {
  power: number;
}
interface Engine {
  type: string;
}
type HybridCar = Engine | CarBattery;

export function GetHybridCar(): HybridCar {
  return { power: 322, type: 'horse power' };
}

// Function Types

type AddFn = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number;
}

// Using the 'AddFn' type
export const addFunction: AddFn = (num1, num2): number => {
  return num1 + num2;
};

// Using the 'IAdd' interface
export const addInterfaceFunction: IAdd = (num1: number, num2: number): number => {
  return num1 + num2;
};
