import { useForm } from "react-hook-form";

const onSubmit = (data: any) => {
  console.log(data);
}

const TodoForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="New todo"
        {...register("name")} 
      />
      <input type="submit" />
    </form>
  );
};

export default TodoForm;
