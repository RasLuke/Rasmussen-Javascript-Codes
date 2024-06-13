//// Create a constructor function for creating dog objects
function Dog(name, appearance, show, description, mySound, canTalk) {
    this.name = name;
    this.appearance = appearance;
    this.show = show;
    this.description = description;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Modify the method to display whether the dog can talk
    this.myGreeting = function () {
        if (this.canTalk) {
            return `Hello, my name is ${this.name}, ${this.mySound}. I starred in the TV show ${this.show}. My character was a ${this.appearance} ${this.description}. I can talk!`;
        } else {
            return `Hello, my name is ${this.name}, ${this.mySound}. I starred in the TV show ${this.show}. My character was a ${this.appearance} ${this.description}. I cannot talk.`;
        }
    };
}

// Create dog objects
var dogs = [
    new Dog("Scooby-Doo", "Great Dane", "Scooby-Doo, Where Are You!", "The titular character, brown with black spots", "Ruh-roh!", true),
    new Dog("Big Dog", "Old English Sheepdog", "2 Stupid Dogs", "The quiet but mighty dog, a big grey shaggy guy.", "...", true),
    // Add more dogs here
];

// Display dog properties
for (var i = 0; i < dogs.length; i++) {
    console.log(`\nDog ${i + 1}:`);
    for (var prop in dogs[i]) {
        console.log(`${prop}: ${dogs[i][prop]}`);
    }
}

// Prompt the user to select a dog
var userInput = prompt("Please select a dog by typing its name:");

// Find the selected dog
var selectedDog = null;
for (var j = 0; j < dogs.length; j++) {
    if (dogs[j].name === userInput) {
        selectedDog = dogs[j];
        break;
    }
}

// Display the selected dog's information
var dogInfoDiv = document.getElementById('dogInfo');
var dogImage = document.getElementById('dogImage');

// Show the image of the dog
dogImage.style.display = 'block';

if (selectedDog) {
    // Set the text content with line breaks after breed info
    dogInfoDiv.innerHTML = selectedDog.myGreeting().replace('Unknown breed', 'Unknown breed. <br>');
} else {
    dogInfoDiv.innerText = "Error: The selected dog doesn't exist.";
}
