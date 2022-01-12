import { useState } from "react";
import TodoForm from "./components/TodoForm";

interface Istate {
  todosArray: {
    todo: string;
    isDone: boolean;
  }[];
}

function App() {
  const [todosArray, setTodosArray] = useState<Istate["todosArray"]>([]);

  return (
    <div>
      <TodoForm todosArray={todosArray} setTodosArray={setTodosArray} />
    </div>
  );
}

export type { Istate };
export default App;
