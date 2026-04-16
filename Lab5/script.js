
// Create an object
let person = {
    firstName: "Zainu",
    lastName: "Khan",
    age: 22
};

// Get table reference
let table = document.getElementById("table");

// Loop through object keys and values
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = key;
        cell2.innerHTML = person[key];
    }
}
// Task 2 ========================================================================

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate() {
  const value1 = parseInt(num1.value);
  const value2 = parseInt(num2.value);
  result.value = value1 + value2;
}

num1.addEventListener("input", calculate);
num2.addEventListener("input", calculate);

// Task 3 =====================================================================
