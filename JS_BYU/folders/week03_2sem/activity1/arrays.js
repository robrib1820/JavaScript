const myArray = ["one", "two", "three"];

const array = myArray.map(function (item) {
    return `<li>${item}</li>`;
});
document.getElementById("myList").innerHTML = array.join("");