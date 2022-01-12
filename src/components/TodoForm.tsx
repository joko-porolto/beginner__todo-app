import { useForm } from "react-hook-form";
import { Istate as ItodosArray } from "../App";

interface Iprops {
  todosArray: ItodosArray["todosArray"];
  setTodosArray: React.Dispatch<React.SetStateAction<ItodosArray["todosArray"]>>;
}

type Iform = {
  todo: string;
};

const TodoForm: React.FC<Iprops> = () => {
  const { register, handleSubmit } = useForm<Iform>();

  const addTodo = handleSubmit(data => {
    console.log(data);
  })

  return (
    <form onSubmit={addTodo}>
      <input type="text" placeholder="New todo" {...register("todo")} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
