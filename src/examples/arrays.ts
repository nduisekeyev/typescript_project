const array: number[] = [2, 3, 4];

// Add elements to the beginning
const arrayOne: number[] = [1, ...array];

// effective way instead of using .unshift()

console.log('arrayOne', arrayOne);

const arrayTwo = [2, 3, 4];

// Add elements to the end
arrayTwo.push(1);

// Reverse the array if order matters
arrayTwo.reverse();

console.log('arrayTwo', arrayTwo); // Output: [1, 2, 3, 4]
