import {useDispatch, useSelector} from "react-redux";
import Todo from "../../components/todo/Todo";
import {changeTodoInputAction, addTodoAction} from "../../redux/actions";


export default function TodosPage() {
    const dispatch = useDispatch();
    const {todoValue, todos} = useSelector(state => state)

    const changeInput = (e) => {
        dispatch(changeTodoInputAction(e.target.value))
    }

    const addTodo = () => {
        dispatch(addTodoAction(todoValue))
    }

    return (
        <>
            <input type="text" placeholder="todo" onChange={changeInput} value={todoValue}/>
            <button onClick={addTodo}>add todo</button>

            {
                todos.map(todo => <Todo todoInfo={todo}/>)
            }
        </>
    )
}

