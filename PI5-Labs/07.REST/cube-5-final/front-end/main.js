
async function postData(url, data)  {

  const response = await fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json' ,
            },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('http://localhost:4500/api/cubes/', {name:'cube2' , description:'dffsdfsd', level:5})
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });