function begin() {
    // Prompting the user for their first name
    var Fname = prompt("Please enter your first name:");

    // Displaying a welcome message with the user's name
    alert("Hello " + Fname + ", welcome!");

    // Creating a constant to store the value of Pi
    const piValue = 3.1415926;

    // Asking the user for their favorite number
    var myFavNum = prompt("What is your favorite number?");

    // Converting the user input to a number
    myFavNum = parseFloat(myFavNum);

    // Calculating the area of a circle using the user's favorite number as the radius
    var myArea = piValue * Math.pow(myFavNum, 2);

    // Displaying the contents of each variable to the webpage
    var resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "Hello " + Fname + ", you entered " + myFavNum + " as your favorite number. ";
    resultDiv.innerHTML += "If that was the radius of a circle, the area would be " + myArea.toFixed(6) + ".";
}
