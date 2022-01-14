import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

interface Istate {
  todosArray: Itodo[];
}

interface Itodo {
  todo: string;
  isDone: boolean;
}

function App() {
  const [todosArray, setTodosArray] = useState<Istate["todosArray"]>([]);

  return (
    <div>
      <TodoForm todosArray={todosArray} setTodosArray={setTodosArray} />
      <TodoItems todosArray={todosArray} />
    </div>
  );
}

export type { Istate, Itodo };
export default App;
