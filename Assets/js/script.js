// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  //Empty array to push data into
  const employees = [];

  //Bool to keep track of adding more employees
  let add = true;

  //while loop to repeat the prompts until the cancel button is clicked
  while (add === true) {
    const firstNameInput = prompt("Enter employee's first name");
    const lastNameInput = prompt("Enter employee's last name");
    const salaryInput = prompt("Enter employee's salary");
    addMore = confirm("Would you like to add more employees?");
    
    //add the input data into employees array
    employees.push({
      firstName: firstNameInput,
      lastName: lastNameInput,
      salary: salaryInput,
    });
    //verify if the user wants to add more, or exit
    if (addMore === false) {
      add = false;
    }
  }

  return employees

};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let total = 0
  //calculate the sum of salaries
  for (let i=0; i< employeesArray.length; i++) {
    total = total + employeesArray[i].salary
  }
  console.log(total)

  //find the average salary

  //display the average
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  // getRandomEmployee(employees);

  // employees.sort(function(a,b) {
  //   if (a.lastName < b.lastName) {
  //     return -1;
  //   } else {
  //     return 1;
  //   }
  // });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
