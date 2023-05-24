/* Lesson 2 */

/* VARIABLES */
// Step 1: declare and instantiate a variable to hold your name
const nam = "Robson Ribeiro"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = nam;

// Step 3: declare and instantiate a variable to hold the current year
const year = "2022"

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").innerHTML = year;

// Step 5: copy your image into the "images" folder

// Step 6: declare and instantiate a variable to hold the name of your picture
const image = "images/image1.png";


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", image);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const fav_Foods = ["Pizza", "Brazilian Barbecue", "Tequenhos", "Lasagna" ]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = fav_Foods;

// Step 3: declare and instantiate a variable to hold another favorite food
const food1 = "Burritos"

// Step 4: add the variable holding another favorite food to the favorite food array
fav_Foods.push(food1);
// Step 5: repeat Step 2
document.querySelector("#food").textContent = fav_Foods;

// Step 6: remove the first element in the favorite foods array
fav_Foods.shift();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = fav_Foods;

// Step 8: remove the last element in the favorite foods array
fav_Foods.pop();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = fav_Foods;


