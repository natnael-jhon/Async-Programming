const result = document.querySelector(".results")
async function renderData() {
  try {
    const response = await fetch("data.json")
    if(!response.ok) throw Error(response.statusText)
    const data = await response.json();
    console.log(data)
    result.textContent = data.name;
    result.textContent = data.age;
  } catch (error) {
    console.log(error)
  }
}

renderData()