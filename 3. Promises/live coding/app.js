function checkNum(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve(`${number} is an even number.`);
    } else {
      reject(`${number} is an odd number`);
    }
  });
}

// const sampelNumber = 3;
// checkNum(sampelNumber).then((message) => {
//   console.log(`Success: ${message}`)
// }).catch((error) => {
//   console.log(`Error: ${error} `)
// })

// Refactoring the code we used in callback hell using promises

function callbackHell(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = `Inside (callbackhell) function`;
      console.log(data);
      resolve(data);
    }, 2000);
  });
}

function firstFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data`;
      console.log("Inside (firstFunc) function");
      resolve(processedData);
    }, 2000);
  });
}

function secondFunc(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data`;
      console.log("Inside (secondFunc) function");
      resolve(processedData);
    }, 2000);
  });
}


callbackHell().then((data) => firstFunc(data)).then((processedData1) => secondFunc(processedData1)).then(processedData2 => console.log(`Final result of all function with promises: ${processedData2}`)).catch(error => console.log(`Error: ${error}`))