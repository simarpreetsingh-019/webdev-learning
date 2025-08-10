const url = "https://dogapi.dog/api/v2/breeds";

// let promise = fetch(url);
// console.log(promise);

const getFacts = async () => {
  let response = await fetch(url);
  console.log(response);
  console.log("Response.status = ", response.status);
  console.log("Response.statusText = ", response.statusText);
  console.log("Response.URL = ", response.url);
  console.log("Response.type = ", response.type);

  console.log("lets see the json data now using response.json");
  let factData = await response.json();
  console.log("Raw data = ", factData);
  console.log("length of Data array = ", factData["data"].length);
  console.log("First element of data array = ", factData["data"][0]);
  console.log("Dog[0]'s name = ", factData["data"][0].attributes.name);


  console.log(factData["data"][0].attributes.description);

};

getFacts();

