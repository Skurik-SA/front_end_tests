import {useDispatch, useSelector} from "react-redux";
import "./GroupsPage.css"
import {fetchCustomers} from "../../redux/store/asyncAction/customers";
import {addCustomerAction, deleteCustomerAction} from "../../redux/store/actionCreators/customerActionCreators";
import DotedLoader from "../../components/Loaders/DotedLoader/DotedLoader";


const GroupsPage = () => {

    const dispatch = useDispatch()
    const customers = useSelector(state => state.customers.customers)
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
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button onClick={() => dispatch(fetchCustomers())}>Получить клиентов из базы</button>
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
            <div className="loader_style">
                {/*<Loaders/>*/}
                <DotedLoader/>
            </div>
        </>
    )
}

export default GroupsPage;