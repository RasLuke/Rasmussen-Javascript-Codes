// Create a constructor function for creating dog objects
function Dog(name, appearance, show, description, mySound) {
    this.name = name;
    this.appearance = appearance;
    this.show = show;
    this.description = description;
    this.mySound = mySound;
    // Add a new property
    this.canTalk = false;
    // Add a method to the object
    this.myGreeting = function () {
        return `Hello, my name is ${this.name}, ${this.mySound}. I starred in the TV show ${this.show}. My character was a ${this.appearance} ${this.description}.`;
    };
}

// Create a new dog object using the constructor function
var myDogConst = new Dog("Big Dog", "Unknown breed", "2 Stupid Dogs", "One of the main characters, larger in size compared to Little Dog", "I sound very intimidating because of my size");
