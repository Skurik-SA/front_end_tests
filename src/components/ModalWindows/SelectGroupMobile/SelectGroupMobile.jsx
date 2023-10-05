import styles from "./SelectGroupMobile.module.css"
import Search from "../../Search/Search";
import FiltersHeader from "../../FiltersHeader/FiltersHeader";
import FilterInput from "../../FilterInput/FilterInput";
import {Fragment} from "react";
import GroupsPlate from "../../GroupsPlate/GroupsPlate";
import {GET_STUDENTS_DATA} from "../../../redux/saga/tests/saga_GetStudentsData";
import Portal from "../../Portal/Portal";
import CreateNewGroupWindow from "../CreateNewGroupWindow/CreateNewGroupWindow";
import {useDispatch} from "react-redux";

const SelectGroupMobile = (props) => {
    const {
        onClose,
        filterInput,
        setFilterInput,
        clearFilters,
        filteredGroups,
        get_data_by_group,
        setIsOpenNewGroup,
        isOpenNewGroup,
        exp_styles,
    } = props

    const dispatch = useDispatch()

    return (

            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '20px'}}>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5[px'}}>
                    {filteredGroups.map(group =>
                        <Fragment key={group.id}>
                            <GroupsPlate
                                onClick={() => {
                                    get_data_by_group(group.id)
                                    dispatch({type: GET_STUDENTS_DATA, group_id: group.id})
                                    onClose()
                                }}
                            >
                                {group.title}
                            </GroupsPlate>
                        </Fragment>
                    )}
                </div>
                <button className="button_creation" onClick={() => {
                    setIsOpenNewGroup(true)
                }}>
                    Новая группа
                </button>
                <Portal open={isOpenNewGroup} onClose={() => setIsOpenNewGroup(false)} style={{  boxShadow:
                        "0 0 100px 0 rgba(0,0,0,0.75)", background: '#EAEEFF'
                }}>
                    <CreateNewGroupWindow onClose={() => setIsOpenNewGroup(false)}/>
                </Portal>
            </div>

    )
}

export default SelectGroupMobile;