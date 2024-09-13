const box = document.querySelector(".box");
const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".inputs");


const render = async (data) => {
    box.innerHTML = data.map(
      (item) => ` <div class="box_2">
      <h1 class = "title">${item.title}</h1>
      <button data-id="${item.id}" class="btn_del">delete</button>
      <button data-edit = "${item.id}" class= "btn_edit">edit</button>
      </div>
    `
    ).join("");
  };
  
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3000/new_products");
      const data = await res.json();
      await render(data);
    } catch (error) {
        return error.message
    }
  };
  
  getData();
  
  box.addEventListener("click", async (e) => {
    const deleteItem = e.target.dataset.id;
    if (deleteItem) {
      try {
        const res = await fetch(`http://localhost:3000/new_products/${deleteItem}`, {
          method: "DELETE",
        });
        await getData(res);
      } catch (error) {
        return error.message
    }
    }
  });
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let obj = {};
    for (let i of inputs) {
      obj[i.name] = i.value;
      i.value = "";
    }
    try {
      const res = await fetch("http://localhost:3000/new_products", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(obj),
      });
      await getData(res);
    } catch (error) {
        return error.message
    }
  });
  