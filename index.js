// Write your solution in this file!
var  employee = {
    name: "Jane",
    streetAddress: "123 Main St"
  };

  function updateEmployeeWithKeyAndValue(employee, key, value) {

    return {
      ...employee,
      [key]: value
    };
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {


       const updatedemployee=[key] .value
    return updatedEmployee;
        
      };


  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];

    return updatedEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {

    return employee[key];
  }