import { Itodo, Istate as Iprops } from '../App';

interface Iprops2 {
  data: Itodo;
}

const TodoItem: React.FC<Iprops2> = ({ data }) => {
  return (
    <div>
      <h1>{data.todo}</h1>
    </div>
  )
}

const TodoItems: React.FC<Iprops> = ({ todosArray }) => {
  return (
    <div>
      {todosArray.map((todo, key) => {
        return <TodoItem data={todo} key={key} />
      })}
    </div>
  )
}

export default TodoItems