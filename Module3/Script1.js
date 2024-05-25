// Task 1: Displaying whether numbers from 0 to 10 are odd or even
document.write("<h2>Odd or Even Numbers from 0 to 10:</h2>");
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write("Count " + i + " is even<br>");
    } else {
        document.write("Count " + i + " is odd<br>");
    }
}

// Task 2: Asking user for a number between 5 and 20 and using it in a Do While loop
let myNum;
do {
    myNum = parseInt(prompt("Enter a number between 5 and 20:"));
} while (myNum < 5 || myNum > 20);

document.write("<h2>Counting from 1 to " + myNum + ":</h2>");
let counter = 1;
do {
    document.write("Count: " + counter + "<br>");
    counter++;
} while (counter <= myNum);

// Task 3: Storing subjects in an array and displaying them using foreach()
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

document.write("<h2>Subjects:</h2>");
document.write("<p>Using forEach():</p>");
subjects.forEach(function (subject) {
    document.write(subject + "<br>");
});

document.write("<p>Separated by commas:</p>");
document.write(subjects.join(", "));
