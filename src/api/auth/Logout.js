import axios from "axios";
import {useDispatch} from "react-redux";
import {delete_user_data} from "../../redux/store/slices/slice_User";


export const Logout = () => {

    const dispatch = useDispatch()

    const logoutBtn = () => {
        (async () => {
            try {
                const {data} = await
                    axios.post('http://localhost:8000/user/api/logout/',{
                            refresh_token:localStorage.getItem('refresh_token')
                        },{
                            headers: {'Content-Type': 'application/json'}
                        }, {
                            withCredentials: true}
                    );
                localStorage.clear();
                dispatch(delete_user_data())
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login'
            } catch (e) {
                console.log('logout not working', e)
            }
        })();
    }

    return (
        <div onClick={logoutBtn}>
            Выйти
        </div>
    )
}