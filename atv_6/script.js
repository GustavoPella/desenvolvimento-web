const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

// Adicionar tarefa
button.addEventListener("click", () => {
  const text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");

  // checkbox opcional
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = text;

  li.appendChild(checkbox);
  li.appendChild(span);

  list.appendChild(li);

  input.value = "";
});

// Delegação de eventos para remover ou marcar
list.addEventListener("click", (event) => {
  const li = event.target.closest("li");

  if (!li) return;

  // Se clicou no checkbox → marcar como concluída
  if (event.target.tagName === "INPUT") {
    li.classList.toggle("completed");
  } else {
    // Se clicou no item → remover
    li.remove();
  }
});