function main(data, criteria) {

    // Convert the data to array of objects
    let employeeArr = JSON.parse(data);
    // get the criteria key and value

    let [key, value] = criteria.split('-');
    let employeeFilter = employeeArr.filter(emp => emp[key] === value);

    // Print the matching employees 
    employeeFilter.forEach((emp, i) => {
        console.log(`${i}. ${emp.first_name} ${emp.last_name} - ${emp.email}`)
    })

}

main(`[{
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
  }, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
  },
  {
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
  }]`,
    'gender-Female');