import "./GroupsData.css"
import {useDispatch, useSelector} from "react-redux";
import {LOAD_GROUP_DATA} from "../../../redux/saga/auth/saga_GroupDataByID";

const GroupsData = ({data}) => {

    const userGroups = useSelector(state => state.UserData.groups)
    const groupById = useSelector(state => state.PersonalGroupData.data)

    const dispatch = useDispatch()
    const get_data_by_group = (id) => {
        dispatch({type: LOAD_GROUP_DATA, id})
    }

    return (
        <>

            <div className="groups_data_wrapper">
                <div className="groups_left_wrapper">

                    {groupById.participants.length > 0
                        ?
                        <>
                            <div>
                                Редактировать
                            </div>
                            {groupById.participants.map((p, index) =>
                            <div className="person_row">
                                <div>
                                    {p.last_name}
                                </div>
                                <div>
                                     {p.first_name}
                                </div>
                                <div>
                                    {p.sur_name}
                                </div>
                                <div>
                                    {p.role}
                                </div>
                            </div>
                                )}
                        </>
                        :
                        <div>
                            Выберите группу
                        </div>
                    }
                </div>
                <div className="groups_right_wrapper">
                    <div className="meta_fields">
                        <input className="input_style" placeholder={"Поиск"}/>
                        <div className="new_button">
                            Новая группа
                        </div>
                    </div>
                    <hr className="hr_style"/>
                    <div className={"row_wrapper"}>
                        {userGroups && userGroups.map((g, index) =>
                            <div key={index}
                                 className="group_row"
                                 onClick={() => {
                                     get_data_by_group(g.id)
                                 }}
                            >
                                {g.title}
                            </div>
                        )

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupsData;

