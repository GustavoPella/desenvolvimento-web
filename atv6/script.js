const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  li.appendChild(checkbox);
  li.appendChild(span);

  list.appendChild(li);

  input.value = "";
});

list.addEventListener("click", (event) => {
  const li = event.target.closest("li");

  if (!li) return;

  if (event.target.tagName === "INPUT") {
    li.classList.toggle("completed");
  } else {
    li.remove();
  }
});