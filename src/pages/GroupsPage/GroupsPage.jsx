import {useDispatch, useSelector} from "react-redux";
import "./GroupsPage.css"
import {fetchCustomers} from "../../redux/store/asyncAction/customers";
import {decrementCreator, incrementCreator} from "../../redux/store/actionCreators/countActionCreator";
import {addCustomerAction, deleteCustomerAction} from "../../redux/store/actionCreators/customerActionCreators";


const GroupsPage = () => {

    const dispatch = useDispatch()
    const customers = useSelector(state => state.customers.customers)
    const counter = useSelector(state => state.count.count)

    const addCash = (cash) => {
        dispatch({type:"ADD_CASH", payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type:"GET_CASH", payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const deleteCustomer = (customer) => {
        dispatch(deleteCustomerAction(customer.id))
    }


    return (
        <>
            <div className="ContentWrap">
                Groups Page
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
                <button onClick={() => getCash(Number(prompt()))}>Снять деньги</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
                <button onClick={() => dispatch(incrementCreator())}>увеличить</button>
                <button onClick={() => dispatch(decrementCreator())}>уменьшить</button>
            </div>
            {customers.length > 0
                ?
                <div className="UsersWrap">
                    {customers.map(customer =>
                        <div onClick={() => deleteCustomer(customer)}>
                            {customer.name}
                        </div>
                    )}
                </div>
                :
                <div className="UsersWrap">
                    Клиенты отсутствуют
                </div>
            }
            <div>
                {counter}
            </div>
        </>
    )
}

export default GroupsPage;