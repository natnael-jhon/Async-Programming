// ********** Synchronous Code
function myFunc(){
  console.log("Inside function")
}
// console.log("Begin")
// myFunc()
// console.log("End")



// ********** Asynchronous Code
console.log("Start")
setTimeout(function() {
  console.log("setTimeout For 2s")
}, 2000)
console.log("End")