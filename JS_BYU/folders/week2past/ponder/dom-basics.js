const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!"
document.body.appendChild(newParagraph);

const newImage = document.createElement("img")
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "Description of an image");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);
/*
const newSection = document.createElement("section");
newSection.innerHTML = "<section><h2>CSE 121b</h2></section>";
document.body.appendChild(newSection);
const para = document.createElement("p");
para. innerHTML = "<p>Welcome to JavaScript Language</p>"
document.body.appendChild(para);
*/
const newSection = document.createElement("section");
newSection.innerHTML = ("<h2>CSE 121b</h2><p>Welcome to JavaScript Language</p>");
document.body.appendChild(newSection);
// I can use textContent as well
document.querySelector(".green").innerHTML = "MODIFIED CODE USING A PROPERTIE";
//to change an element I can user setAttribute as well

