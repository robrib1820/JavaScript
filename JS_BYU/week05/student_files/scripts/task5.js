/* Lesson 5 */
/* IF/ELSE IF */
// Step 1: Declare and initialize a new variable to hold the current date
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
const data = new Date();
const dayOfWeek = data.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
message = "";
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message = "Hang in there!"
    console.log(message);
} else {
    message = "Woohoo!  It is the weekend!";
    console.log(message);
}
/* SWITCH, CASE, BREAK */
// Step 1: Declare a new variable to hold another message
anotherMessage = "";
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch(dayOfWeek) {
    case 0:
        anotherMessage = "Sunday";
        console.log(anotherMessage);
        break
    case 1:
        anotherMessage = "Monday";
        console.log(anotherMessage);
        break
    case 2:
        anotherMessage = "Tuesday";
        console.log(anotherMessage);
        break
    case 3:
        anotherMessage = "Wednesday";
        console.log(anotherMessage);
        break
    case 4:
        anotherMessage = "Thursday";
        console.log(anotherMessage);
        break
    case 5:
        anotherMessage = "Friday";
        console.log(anotherMessage);
        break
    case 6:
        anotherMessage = "Saturday";
        console.log(anotherMessage);
        break
    default:
        console("ERROR: Try again!")
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").innerHTML = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").innerHTML = anotherMessage;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let listOfTemples = []
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function outputTemples(templesList) {
    const templeDiv = document.querySelector("#temples");
    templesList.forEach(temple => {
        const article = document.createElement("article");
        const templeNameH3 = document.createElement("h3");
        const templeLocationH4 = document.createElement("h4");
        const dedicatedH4 = document.createElement("h4");
        const imageUrl = document.createElement("img");
        
        imageUrl.setAttribute("src", temple.imageUrl);
        imageUrl.setAttribute("alt", temple.templeName);
        //console.log("temple", temple); good practice to check the variable sof my object to access later
        templeNameH3.innerText = temple.templeName;
        templeLocationH4.innerText = temple.location;
        dedicatedH4.innerText = temple.dedicated;
        imageUrl.innerHTML = temple.imageUrl;
        article.append(templeNameH3);
        article.append(templeLocationH4);
        article.append(imageUrl);
        article.append(dedicatedH4);
        templeDiv.append(article);
    });
};
// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
// output(listOfTemples);
const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";
let results = null;
async function getTemples(url) {
    const response = await fetch(url);
    listOfTemples = await response.json()
    console.log(listOfTemples);
    outputTemples(listOfTemples);
    }
getTemples(url);
// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    document.querySelector("#temples").textContent = "";
}
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
    reset()
    const sortedTemples = listOfTemples.sort(compare);
    outputTemples(sortedTemples);
}

function compare(temple1, temple2) {
    const option = document.querySelector("#sortBy").value;
    if (option === "templeNameAscending") {
        if(temple1.templeName > temple2.templeName) {
            return 1
        } else if (temple1.templeName < temple2.templeName) {
            return -1
        } else {
            return 0 
        }
            
    } else {
        if (temple1.templeName < temple2.templeName) {
            return 1
        } else if (temple1.templeName > temple2.templeName) {
                return -1
        } else {
            return 0 
        }
    }
    }

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);


/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
