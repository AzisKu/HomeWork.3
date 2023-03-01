
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction,changeTodoInputAction, changeStatusAction } from '../redux/actions';

export const Number = () => {
    const { count, numberValue } = useSelector((state) => state);
    const dispatch = useDispatch();
    const handleChangeNumber = (e) => {
        dispatch(addTodoAction(e.target.value));
    };
    const handleClear = () => {
        dispatch(changeStatusAction());
    };
    const onAddNumber = () => {
        dispatch(addTodoAction(numberValue));
    };
    return (
        <>
            <input
                type="number"
                value={numberValue}
                placeholder={`Choose number`}
                onChange={handleChangeNumber}
            />
            <button onClick={handleClear}>Clear</button>
            <button onClick={onAddNumber}>Add</button>
            <br />
            <br />
            {count === null ? <p>You didn't choose number</p> : count}
        </>
    );
};