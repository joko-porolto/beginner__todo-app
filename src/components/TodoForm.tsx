import { SubmitHandler, useForm } from "react-hook-form";
import { Istate as ItodosArray } from "../App";

interface Iprops {
  todosArray: ItodosArray["todosArray"];
  setTodosArray: React.Dispatch<
    React.SetStateAction<ItodosArray["todosArray"]>
  >;
}

type Tform = {
  todo: string
}

const TodoForm: React.FC<Iprops> = () => {
  const { register, handleSubmit, reset } = useForm<Tform>();

  const addTodo: SubmitHandler<Tform> = data => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <input
        type="text"
        placeholder="New todo"
        {...(register("todo", { required: true }))}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
