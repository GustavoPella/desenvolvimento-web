import { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputText, setInputText] = useState("");

  function adicionarTarefa() {
    const texto = inputText.trim();
    if (texto === "") return;

    const novaTarefa = {
      id: Date.now(),
      text: texto,
    };

    setTarefas([...tarefas, novaTarefa]);
    setInputText("");
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") adicionarTarefa();
  }

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Digite uma missão..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span>{tarefa.text}</span>
            <button className="btn-remover" onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;