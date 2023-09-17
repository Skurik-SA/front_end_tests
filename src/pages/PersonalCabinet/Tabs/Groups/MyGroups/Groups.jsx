import "./Groups.css"
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../../NavigationLine/NavigationLine";
import {useEffect, useState} from "react";
import {set_navbar_link} from "../../../../../redux/store/slices/slice_Navbar";
import {useDispatch, useSelector} from "react-redux";
import DuoContent from "../../../DuoContent/DuoContent";
import DuoContentLeftPart from "../../../DuoContent/DuoContentLeftPart";
import DuoContentRightPart from "../../../DuoContent/DuoContentRightPart";
import styles from "../../Templates/CreateTemplate/CreateTemplate.module.css";
import Search from "../../../../../components/Search/Search";
import FilterInput from "../../../../../components/FilterInput/FilterInput";
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
                        {/*Upper Panel*/}
                        <div>
                            <h2>{groupById.group_title}</h2>
                            {teachers
                                ?
                                <div style={{fontSize: "18px", textDecoration: "underline", fontWeight: '200'}}>
                                    {teachers.map((t, i) => <div>Учитель: {t}</div>)}
                                </div>
                                :
                                <></>
                            }
                        </div>
                        <DivideLineMono/>
                        <div className="split_content_left">
                            {groupById.participants.length > 0
                                ?
                                <div className="students_column">
                                    <div className="title_labels">
                                        <div>Ученики: </div>
                                        <button className="add_button">
                                            <label className="add_label">
                                                Добавить
                                            </label>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="add_svg">
                                                <rect x="13.4551" y="2.58942" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(90 13.4551 2.58942)" fill="white"/>
                                                <rect x="2.74805" y="10.8995" width="18.8101" height="2.66667" rx="1.33333" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                    {groupById.participants.map((p, index) =>
                                        <>
                                            {p.role === 'Учитель'
                                                ?
                                                <></>
                                                :
                                                <div >
                                                    <div className="person_row" key={index}>
                                                        <section className="fio_section">
                                                            <div>
                                                                {p.last_name} <> </>

                                                                {p.first_name} <> </>

                                                                {p.sur_name}
                                                            </div>
                                                        </section>
                                                        <div className="del_button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect x="6.33008" y="4.44543" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(45 6.33008 4.44543)" fill="white"/>
                                                                <rect x="4.63477" y="17.893" width="18.8101" height="2.66667" rx="1.33333" transform="rotate(-45 4.63477 17.893)" fill="white"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                            }
                                        </>
                                    )}
                                </div>
                                :
                                <div style={{marginLeft: "20px"}}>
                                    Выберите группу
                                </div>
                            }
                            {groupById.participants.length > 0
                                ?
                                <div className="tests_column">
                                    <div className="title_labels">
                                        <div>Тесты: </div>
                                        <button className="add_button">
                                            <label className="add_label">
                                                Добавить
                                            </label>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="add_svg">
                                                <rect x="13.4551" y="2.58942" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(90 13.4551 2.58942)" fill="white"/>
                                                <rect x="2.74805" y="10.8995" width="18.8101" height="2.66667" rx="1.33333" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                    {groupById.participants.map((p, index) =>
                                        <>
                                            <div className="person_row" key={index}>
                                                <section className="fio_section">
                                                    <div>
                                                        title_label
                                                    </div>
                                                </section>
                                            </div>
                                        </>
                                    )}
                                </div>
                                :
                                <></>
                            }
                        </div>
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
                            <button className="button_creation">
                                Новая группа
                            </button>
                        </div>

                    </DuoContentRightPart>
                </DuoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Groups;