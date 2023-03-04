import {getUsersAction, sayHelloAction} from "../../redux/actions";
import {useDispatch,useSelector} from "react-redux";
import {useEffect} from "react";



function UsersPage () {

    const {title} = useSelector(state => state.titleReducer())
    const {users} = useSelector(state => state.usersReducer())

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersAction())
    },[])
    return(
        <>

            <h1>Users list</h1>
            <h2>{title}</h2>
            <button onClick={() => dispatch(sayHelloAction())}>say hello after 3sec</button>

            <ul>
                {
                    users.map(user => <li>{user.name}</li>)
                }
            </ul>


        </>
    )
}

export default UsersPage;
