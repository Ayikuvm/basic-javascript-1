var nextYearVal = 1;
console.log("next year plus :", nextYearVal);
document.getElementById("demo").innerHTML = 2020 + nextYearVal;

let user = {
    name: "Metin",
    age: 28
};

function alertUser() {
    // เพิ่มการเว้นวรรคคำว่า user age ให้สวยงาม
    document.getElementById("userButton").innerHTML = "user name: " + user.name + " | user age: " + user.age;
}
console.log("%d is age of %s", user.age, user.name);

// ใช้ค่าจากตัวแปร user แทนการประกาศตัวแปร name ซ้ำ
let height = 6.2;
document.getElementById("metin").innerHTML = user.name + " is tall " + height;

// แก้ไข getMonth() ให้บวก 1 เสมอ เพื่อให้แสดงเดือนได้ถูกต้องตามปฏิทินจริง
let currentDate = new Date();
document.getElementById("timestamp").innerHTML = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear();

let numberArray = [4, 5, 6, 7, 8];
document.getElementById("numberArray").innerHTML = numberArray;

document.getElementsByClassName("number")[0].innerHTML = "1 2 3 4 5";

// document.write("document write in javascript file");