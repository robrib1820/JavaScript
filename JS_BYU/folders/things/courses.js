const aCourse = {
    code: "CSE121",
    name: "Javascript language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T",
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A",
        }

    ]
}

function setCourseInfo(Course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = Course.name;
    coursecode.textContent = Course.code;
}

function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");