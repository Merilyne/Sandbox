/****************** YOUR NAME: 

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.

*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
let modelName ='XYZ';
let  duration = 0;


/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function recalculate() {
    // Find the calculated-cost span element
    let costLabel = document.getElementById("calculated-cost");
    let totalCost;
    if (modelName === "XYZ") {
        totalCost = duration * 100; // Example calculation for XYZ model
    } else if (modelName === "CPRG") {
        totalCost = duration * 213; // Example calculation for CPRG model
    }
    
    // Update the innerHTML of the calculated-cost element with the new total cost
    costLabel.innerHTML = totalCost;
}







/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    // modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

// Get the model text span element and button element by their IDs
let modelText = document.getElementById('model-text');
let modelButton = document.getElementById('model-button');
// Function to change the model
function changeModel() {
    // Check the current value of modelName and update accordingly
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }
    
    // Call a function to recalculate total cost based on the new model
    recalculateTotalCost();
}

// Uncomment the following line to have the function run automatically when the button is clicked
modelButton.addEventListener("click", changeModel);

// Example function to recalculate total cost (you would implement this based on your actual logic)
function recalculateTotalCost() {
    // Example logic for recalculating total cost based on the model
    // Replace this with your actual logic for calculating total cost
    console.log('Total cost recalculated:', totalCost);
}






/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// INSERT YOUR CODE HERE
const changeDurationButton = document.getElementById('changeDurationButton');
function changeDuration() {
    // Get the duration-text span element
    const durationText = document.getElementById('durationText');

    // Prompt the user for a new duration
    let newDuration = prompt('Enter a new duration (in minutes):');

    // Update the innerHTML of the duration-text span element
    durationText.innerHTML = newDuration + ' minutes'; // Assuming durationText displays in this format

    recalculate(); // You need to define this function elsewhere in your code
}

changeDurationButton.addEventListener('click', changeDuration);