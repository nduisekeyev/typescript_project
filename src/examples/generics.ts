// TypeScript Generics

/**
 * TypeScript generics are a powerful feature that allows you
 * to write flexible and reusable code by parameterizing types and functions.
 * While generics may seem straightforward at first,
 * they offer a world of possibilities for creating more robust and efficient software.
 * In this article, we will explore some amazing tricks you can perform with TypeScript generics.
 */

// 1. Generate a type from the function’s return type

/**
 * Ever happened that you have a typescript function that
 * returns a complex object and you wanted to use that “type” for the custom object being returned?
 */

const testFunction = () => {
  return {
    a: Math.random(),
    b: 'test',
    c: true,
  };
};

// We can get this type into a type variable using the following syntax from testFunction()
type fnDataType = ReturnType<typeof testFunction>;

export function GetDataType(): fnDataType {
  return {
    a: 2,
    b: 'wow',
    c: false,
  };
}

GetDataType();

// 2. Conditional types

// Define a conditional type CheckString which evaluates to string if T extends string, otherwise number.
type CheckString<T> = T extends string ? string : number;

function checkStringValue(value: string): CheckString<typeof value> {
  return value;
}

function checkNumberValue(value: number): CheckString<typeof value> {
  return value;
}

// Test the functions with specific values and store the results in variables.
const stringValue = checkStringValue('hello'); // 'String Type'
const numberValue = checkNumberValue(42); // 'Non-String Type'
console.log('stringValue', stringValue);
console.log('numberValue', numberValue);

function processInput<isStringType>(input: isStringType): void {
  if (input) {
    console.log('Input is a string:', input);
  } else {
    console.log('Input is not a string.');
  }
}

// Example usage
processInput('Hello, World!'); // Output: Input is a string: HELLO, WORLD!
processInput(42);

// 3. Mapped Types in TypeScript

/**
 * Mapped types allow you to create new types based on existing ones
 * by iterating over the keys of an object.
 * They are particularly useful when working with data transformations or validations:
 */

// Define a generic type MakeOptional, which makes all properties of T optional.
type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};

interface Person {
  name: string;
  age: number;
}

type OptionalPerson = MakeOptional<Person>;

export function GetPerson(): OptionalPerson {
  return { name: 'John', age: 25 };
}
