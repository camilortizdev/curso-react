
const todos = [
  { Text: "Cortar cebolla", completed: false},
  { Text: "Tomar el curso de intro con react", completed: false},
  { text: "Llorar", completed: false},
]

function App() {
  return (
    <>
    <TodoCounter />
    <h2>Has completado 2 de 3 TODOs</h2>
    <TodoSearch />
    <input placeholder="Cebolla"></input>
    <TodoList>
      {todos.map(todo=>(
        <TodoItem />
      ))}
    </TodoList>
    <CreateTodoButton />
    <button>+</button>
    </>
  );
}

export default App;
