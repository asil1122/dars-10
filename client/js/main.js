const box = document.querySelector(".box");
const form = document.querySelector(".form");
const input = document.querySelector(".inputs");
import { getInfo, getPosts, getId } from "./service.js";



const renderInput = async () => {
  const data = await getPosts();
  box.innerHTML = data
    .map(
      (item) => `
      <div class="input_text_block">
      <h1 class="title_in">${item.title}</h1>
      <button class="input_inner_del" data-id="${item.id}">Delete</button>
      <button class="input_inner_btn a" data-id="${item.id}">Edit</button>
      </div>`
    )
    .join("");
};
renderInput();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  await getInfo({ title: input.value });
  input.value = "";

  renderInput();
});

box.addEventListener("click", async (e) => {
  const id = e.target.dataset.id;
  if (id) {
    await getId(id);
  }
  renderInput()
});
