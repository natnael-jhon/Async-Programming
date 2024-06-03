function checkNum(no){
  return new Promise((resolve, reject) => {
    no % 2 == 0 ? resolve(`${no} is even`) : reject(`${no} is odd`)
  })
}
// checkNum(4).then(mis => console.log(`win: ${mis}`)).catch(function(mis){`err: ${mis}`})

// refactoring the previous code from the callbackhell fun using promises

function fetchData(){
  return new Promise((resolve) => {
    setTimeout(() =>{
      const data = `Inside (callbackhell)`
      console.log(data)
      resolve(data)
    }, 2000)
  })
}

function firstFunc(data){
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data1`
      console.log(`Inside (firstFunc)`)
      resolve(processedData)
    }, 2000);
  })
}

function secondFunc(data){
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = `${data} - Processed data2`
      console.log(`Inside (Second func)`)
      resolve(processedData)
    }, 1500);
  })
}

fetchData().then(n => firstFunc(n)).then(n1 => secondFunc(n1))
.then(n2 => console.log(`${n2} final func`)).catch((err) => console.log(err))