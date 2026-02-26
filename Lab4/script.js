var newLine = function () {
    document.write("<h1>This is heading 1</h1>")
}

// Task 2
/*
 let num1 = 5
        let num2 = 10
        add(num1,num2);

        function add(num1, num2){
            document.write("The addition of ",num1," and ", num2 ," is: ",num1+num2)
        }
*/

// Task 3
// var array = ['', '*', '/', '+', '-'];
// array.forEach(function (value) {
//     let x = 0;
//     let y = 3;
//     let result;
//     if (value) {
//         // use eval to compute the expression dynamically
//         result = eval(x + value + y);
//     } else {
//         result = "no operator";
//     }
//     document.write("x " + value + " y....Result = " + result + "<br>");
// });

// Task 4


// function popups() {

//     num1 = parseInt(prompt("Enter num1 "))
//     num2 = parseInt(prompt("Enter num2"))
//     num3 = parseInt(prompt("Enter num3"))
//     var result = num1 + num2 + num3;
//     alert("The sum is ", result, "and avg is ", result / 3)

// }
// popups();

// Task 5
/*
const dropDown = document.getElementById('dropDown');
const options = ['Toyota', 'BMW', 'Mercedes'];

for (let x = 0; x < options.length; x++) {
  const option = document.createElement('option');
  option.text = options[x];
  option.value = options[x];
  dropDown.add(option);
}
*/

//Task 6



const table = document.getElementById('table');
const tbody = document.createElement('tbody');
const tableData = ['Registration No', 'Name', 'OOP', 'DSA', 'Database'];


const trHeader = document.createElement('tr');
tableData.forEach(header => {
  const th = document.createElement('th');
  th.innerHTML = header;
  trHeader.appendChild(th);
});
tbody.appendChild(trHeader);

const id = prompt("Enter Registration No: ");
const name = prompt("Enter Name: ");
const oop = prompt("Enter OOP marks: ");
const dsa = prompt("Enter DSA marks: ");
const db = prompt("Enter DB marks: ");

const trData = document.createElement('tr');
const data = [id, name, oop, dsa, db];
data.forEach(value => {
  const td = document.createElement('td');
  td.innerHTML = value;
  trData.appendChild(td);
});

tbody.appendChild(trData);

table.appendChild(tbody);