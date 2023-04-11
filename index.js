// Write your solution in this file!
const employee = {
    name : `Bob`,
    streetAddress : `123 ABC Ave`,
}

function updateEmployeeWithKeyAndValue() {
  let newEmployee = {...employee, name: `Sam`, streetAddress: `11 Broadway`}
    return newEmployee
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress) {
    employee[streetAddress] = "12 Broadway"
    return employee
  }

  function deleteFromEmployeeByKey() {
    let newEmployee = {...employee, name: undefined}
      return newEmployee
  }

  beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function destructivelyDeleteFromEmployeeByKey(employee,name) {
    employee[name] = undefined
    return employee
  }