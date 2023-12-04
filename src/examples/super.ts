// In TypeScript, the super() keyword

/**
 * is used to call the constructor of the parent class.
 * When a class extends another class, it inherits the properties and methods of the parent class.
 * The super() call allows you to invoke the constructor of the parent class
 * within the constructor of the child class.
 */

class Animal {
  constructor(public name: string) {}

  makeSound() {
    console.log('Some generic sound');
  }
}

class Dog extends Animal {
  constructor(
    name: string,
    public breed: string,
  ) {
    super(name); // Call the constructor of the parent class

    // Additional initialization specific to Dog class
    this.breed = breed;
  }

  makeSound() {
    console.log('Woof! Woof!');
  }
}

const myDog = new Dog('Buddy', 'Golden Retriever');
console.log(myDog.name); // Access property from the parent class
myDog.makeSound(); // Calls the overridden method in the child class
