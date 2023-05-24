const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
  });
console.log(`The total is ${pointsTotal}`);
const gpa = pointsTotal / gpaPoints.length;
console.log(`The gpa is ${gpa}`);

const fruitsArray = ["watermelon", "peach", "apple", "tomato", "grape"]

const newArray = fruitsArray.filter((fruit) => fruit.length <= 6);
console.log(`From my array, the fruits that have 6 characters or minus are:  ${newArray}`);

const numbs = [12, 34, 21, 54];
const luckNumber = 21;
const n = numbs.indexOf(luckNumber);
const n1 = numbs.indexOf(54);
console.log(n);
console.log(n1);