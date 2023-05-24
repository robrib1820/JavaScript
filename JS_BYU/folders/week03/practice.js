//Activity 1
const steps = ["one", "two", "three"]
const stespHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stespHtml.join();

//Activity 2

const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {""
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade ==="B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(grades)
//Activity 3

const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

//Activity 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
    return word.length < 6;
})

//Activity 5
const myArray =  [12, 34, 21, 54];
const luckyNumber = 21;
const luckyIndex = index.indexOf(luckyNumber);