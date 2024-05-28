function callbackHell(callback){
    setTimeout(() => {
        const data = "Inside (callbackHell) function"
        console.log(data)
        callback(data)
    }, 2000)
}

function firstFunc(data, callback){
    setTimeout(() => {
        const processedData = `${data} - Processed First`
        console.log(`Inside (firstFunc) Function`)
        callback(processedData)
    }, 1000)
}


function secondFunc(data, callback){
    setTimeout(() =>{
        const processedData =  `${data} - Processed Second`
        console.log("Inside (secondFunc) Function")
        callback(processedData)
    }, 1500)
}
// callback hell
// callbackHell((data) =>{
//     firstFunc(data, (processedData1) => {
//         secondFunc(processedData1, (processedData2) =>{
//             console.log(`Final result of all fun: ${processedData2}`)
//         } )
//     })
// })

// Callback is not always asynchronous
console.warn("Start")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((n) => console.log(n + 1))
console.warn('End')