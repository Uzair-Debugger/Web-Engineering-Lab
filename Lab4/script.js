
// Task 2
// let num1 = parseInt(prompt("Enter num1 "));
// let num2 = parseInt(prompt("Enter num2 "));

// let result = num1 + num2
// alert("The sum is " + result);


// Task 3
// let y = 2;
// let x;

// const out = document.getElementById("task3");

// x = y + 1;
// out.innerHTML += "x = y + 1 → " + x + "<br>";

// x += y;
// out.innerHTML += "x += y → " + x + "<br>";

// x -= y;
// out.innerHTML += "x -= y → " + x + "<br>";

// x *= y;
// out.innerHTML += "x *= y → " + x + "<br>";

// x /= y;
// out.innerHTML += "x /= y → " + x + "<br>";

// Task 4

// function sumAndMean() {

//     num1 = parseInt(prompt("Enter num1 "))
//     num2 = parseInt(prompt("Enter num2"))
//     num3 = parseInt(prompt("Enter num3"))
//     var result = num1 + num2 + num3;
//     alert(`The sum is: ${result} and Average is: ${result/3}`)

// }
// sumAndMean();

// Task 5

// const dropDown = document.getElementById('dropDown');
// const options = ['Toyota', 'BMW', 'Mercedes'];

// for (let x = 0; x < options.length; x++) {
//   const option = document.createElement('option');
//   option.text = options[x];
//   option.value = options[x];
//   dropDown.add(option);
// }


//Task 6
/*
const table = document.getElementById('table');
const tbody = document.createElement('tbody');

// 1. Setup the headers based on the prompt's requirements
const tableData = [
  'Registration No', 
  'Name', 
  'Web Eng', 
  'Comp Prog', 
  'OOP', 
  'DSA', 
  'AI', 
  'Obtained Marks', 
  'Final Grade'
];

const trHeader = document.createElement('tr');
tableData.forEach(header => {
  const th = document.createElement('th');
  th.innerText = header;
  trHeader.appendChild(th);
});
tbody.appendChild(trHeader);

// 2. Prompt user for details and parse numbers for calculation
const id = prompt("Enter Registration No: ");
const name = prompt("Enter Name: ");
const semester = prompt("Enter Semester: ");

const webEng = parseFloat(prompt("Enter Web Engineering marks (out of 100): ")) || 0;
const compProg = parseFloat(prompt("Enter Computer Programming marks (out of 100): ")) || 0;
const oop = parseFloat(prompt("Enter OOP marks (out of 100): ")) || 0;
const dsa = parseFloat(prompt("Enter DSA marks (out of 100): ")) || 0;
const ai = parseFloat(prompt("Enter Artificial Intelligence marks (out of 100): ")) || 0;


const obtainedMarks = webEng + compProg + oop + dsa + ai;
const percentage = (obtainedMarks / 500) * 100;

// Grade cal
let grade = 'F';
if (percentage >= 85) {
    grade = 'A';
} else if (percentage >= 75) {
    grade = 'B';
} else if (percentage >= 65) {
    grade = 'C';
} else if (percentage >= 50) {
    grade = 'D';
}

const trData = document.createElement('tr');
const data = [id, name, webEng, compProg, oop, dsa, ai, obtainedMarks, grade];

data.forEach(value => {
  const td = document.createElement('td');
  td.innerText = value;
  trData.appendChild(td);
});

tbody.appendChild(trData);
table.appendChild(tbody);
*/

// Task 7


// let num1 = parseInt(prompt("Enter num1 "));
// let operator = prompt("Enter operator ");
// let num2 = parseInt(prompt("Enter num2 "));

// if (operator == "+") {
//     let result = num1 + num2;
//     alert("The sum is " + result);
// } else if (operator == "-") {
//     let result = num1 - num2;
//     alert("The difference is " + result);
// } else if (operator == "*") {
//     let result = num1 * num2;
//     alert("The product is " + result);
// } else if (operator == "/") {
//     let result = num1 / num2;
//     alert("The quotient is " + result);
// } else {
//     alert("Invalid operator");
// }
