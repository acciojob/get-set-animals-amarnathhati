//complete this code
class Animal {
    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
