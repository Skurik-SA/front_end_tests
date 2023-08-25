import "./Groups.css"
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../../NavigationLine/NavigationLine";
import MonoContent from "../../../MonoContent/MonoContent";
import {useEffect, useState} from "react";
import {set_navbar_link} from "../../../../../redux/store/slices/slice_Navbar";
import {useDispatch, useSelector} from "react-redux";
import DuoContent from "../../../DuoContent/DuoContent";
import DuoContentLeftPart from "../../../DuoContent/DuoContentLeftPart";
import DuoContentRightPart from "../../../DuoContent/DuoContentRightPart";
import styles from "../../Templates/CreateTemplate/CreateTemplate.module.css";
import Search from "../../../../../components/Search/Search";
import FilterInput from "../../../../../components/FilterInput/FilterInput";
import TaskTypePlate from "../../../../../components/TaskTypePlate/TaskTypePlate";
import {LOAD_GROUP_DATA} from "../../../../../redux/saga/auth/saga_GroupDataByID";
import GroupsPlate from "../../../../../components/GroupsPlate/GroupsPlate";
import FiltersHeader from "../../../../../components/FiltersHeader/FiltersHeader";
import DivideLineMono from "../../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";

const Groups = () => {

    const userGroups = useSelector(state => state.UserData.groups)
    const groupById = useSelector(state => state.PersonalGroupData.data)
    const teachers = useSelector(state => state.PersonalGroupData.teacher_fio)

    const [filterInput, setFilterInput] = useState("")
    const filteredGroups = userGroups.filter(group => {
        return (group.title).toLowerCase().includes(filterInput.toLowerCase())
    })

    const dispatch = useDispatch()
    const get_data_by_group = (id) => {
        dispatch({type: LOAD_GROUP_DATA, id})
    }

    const clearFilters = () => {
        setFilterInput("")
    }

    useEffect(() => {
        dispatch(set_navbar_link(
            [
                {
                    link: 'cabinet/personal_data',
                    link_name: 'Личный кабинет | ',
                    active: false,
                },
                {
                    link: 'cabinet/groups_new',
                    link_name: 'Группы',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={2}></NavigationLine>
                <DuoContent>
                    <DuoContentLeftPart>
                        <div>
                            <h2>{groupById.group_title}</h2>
                            <div style={{fontSize: "18px", textDecoration: "underline", fontWeight: '200'}}>
                                {teachers.map((t, i) => <div>Учитель: {t}</div>)}
                            </div>
                        </div>
                        <DivideLineMono/>
                        {groupById.participants.length > 0
                            ?
                            <>
                                <div>
                                    Редактировать
                                </div>
                                {groupById.participants.map((p, index) =>
                                    <div className="person_row" key={index}>
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
                    </DuoContentLeftPart>
                    <DuoContentRightPart>
                        <div className={styles.CreateTemplateRight_inputs}>
                            <div className={styles.CreateTemplateRight_filters}>
                                <Search
                                    style_params={{width: "100%"}}
                                    value={filterInput}
                                    onChange={(e) => {
                                        e.preventDefault()
                                        setFilterInput(e.target.value)
                                    }}
                                />
                                <div style={{width: "100%"}}>
                                    <FiltersHeader clearFilters={clearFilters}/>
                                </div>
                                <FilterInput placeholder={"Выберите предмет"} position={"up"}  />
                                <FilterInput placeholder={"Выберите тематику"} position={"down"}  />
                            </div>
                            <div className={styles.CreateTemplateLeft_taskTypesWrapper}>
                                {filteredGroups.map(group =>
                                    <GroupsPlate
                                        key={group.id}
                                        onClick={() => {
                                            get_data_by_group(group.id)
                                        }}
                                    >
                                        {group.title}
                                    </GroupsPlate>
                                )}
                            </div>
                        </div>

                    </DuoContentRightPart>
                </DuoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Groups;