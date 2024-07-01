// console.log(fetch("text.txt"))
// WE can read text data using
// callbacks
// new Promise
// async / await
// using then and catch
// fetch("text.txt").then(res => {
//   if (!res.ok) throw Error(res.statusText);
//   return res.text();
// })
// .then((data) => console.log(data))
// .catch((err) => console.log(err))



const result = document.querySelector(".results");
async function renderData() {
  try {
    const response = await fetch("text.txt");
    if (!response.ok) throw Error(response.statusText)

    const data = await response.text();
    result.textContent = data;
  } catch (error) {
    console.log(error);
  }
}
// renderData();



