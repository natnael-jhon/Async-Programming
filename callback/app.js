document.querySelector("button").addEventListener("click", () => {
  document.querySelector("title").innerText = "Callback function";
});
// EXAMPLE 1

// function hello(callback) {
//     console.log("hello");
//     callback();
// }

// function hereIsYourOrder(callback){
//     console.log("here is your order");
//     callback();
// }
// function comeAgain(){
//     console.log("Come again");
// }

// hello(hereIsYourOrder(comeAgain))
// hello(() => {
//     hereIsYourOrder(() => {
//         comeAgain()
//     })
// })

// EXAMPLE 2


function adder(callback, x, y){
    let total = x + y;
    callback(total)
}

function consoleLog(t){ // it doesnt matter what we add to consoleLog(value) 
    return t;
}

adder(displayPage, 3, 4)

function displayPage(result){
    document.querySelector("h1").innerText = result;
}