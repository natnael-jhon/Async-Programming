function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("user data retrieved fromt he server.");
    }, 4000);
  });
}

async function getUserData() {
  try {
    const data = await fetchDataFromServer();
    console.log(data);
    console.log("Remaining time");
  } catch (error) {
    console.log(error);
  }
}

// getUserData();

// Refactoring the previous code

function callbackHell() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `Inside (callback hell)`;
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data`;
      console.log("Inside (firstFunc) function");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed Second`
      console.log("inside (second func) function")
      resolve(processedData)
    }, 1500);
  });
}


async function allRun(){
  try {
    const data = await callbackHell();
    const processedData1 = await firstFunc(data)
    const processedData2 = await secondFunc(processedData1)
    console.log(processedData2)
  } catch (error) {
      console.log(`ERR: ${error}`)
  }
}

allRun()