// let promise = new Promise((resolve,reject) => {
//   console.log("I am promise");
//   reject("I am reject");
// });

// let promise2 = new Promise((resolve,reject) => {
//   console.log("I am promise2");
//   resolve("I am reseolved");
// });

const getPromise = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
    console.log("I am promise");
    reject("I am reject");
  }, 4000);
  });
};

// let testPromise = getPromise();

// testPromise.then((result) => {
//   console.log("Promise resolved success");
// });

// testPromise.catch((error) => {
//   console.log("promise Reject with error : ", error);
// });


const getPromise2 = () => {
  return new Promise((resolve,reject) => {
    
    setTimeout(() => {
      console.log("I am promise");
      resolve("I am successfully rejected");
    }, 3000);
  });
};

function api()
{
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Api data sent");
      resolve(200);
    }, 2000);
  });
}
async function getPromiseData()
{
  console.log("I am await func call 1");
  await api();
  console.log("I am await func call 2");
  await api();

  console.log("lets make another func call");
  await getPromise2();

  console.log("lets make another func call, rejection");
  await getPromise();
  
}

