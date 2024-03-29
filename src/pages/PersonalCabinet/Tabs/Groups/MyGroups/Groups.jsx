import "./Groups.css"
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../../NavigationLine/NavigationLine";
import {Fragment, useEffect, useState} from "react";
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
import Portal from "../../../../../components/Portal/Portal";
import ModalAddStudents from "../../../../../components/ModalWindows/ModalAddStudents/ModalAddStudents";
// import {delete_one_students} from "../../../../../redux/store/slices/slice_PersonalGroup";
import AreYouSureTo from "../../../../../components/ModalWindows/AreYouSureToDelete/AreYouSureTo";
import ModalAddTemplates from "../../../../../components/ModalWindows/ModalAddTemplates/ModalAddTemplates";
import {LOAD_PERSONAL_CUSTOM_TEMPLATES} from "../../../../../redux/saga/tests/saga_LoadPersonalCustomTemplates";
import CreateNewGroupWindow from "../../../../../components/ModalWindows/CreateNewGroupWindow/CreateNewGroupWindow";
import {
    GENERATE_TESTS_BY_TEMPLATE_TO_ALL_GROUP
} from "../../../../../redux/saga/tests/saga_GenerateTestsByTemplateToAllGroup";
import {GET_STUDENTS_DATA} from "../../../../../redux/saga/tests/saga_GetStudentsData";
import {delete_one_students} from "../../../../../redux/store/slices/slice_PersonalGroup";
import DuoContentMobileRightPart from "../../../DuoContent/DuoContentMobileRightPart";
import SelectGroupMobile from "../../../../../components/ModalWindows/SelectGroupMobile/SelectGroupMobile";

const Groups = () => {

    const userGroups = useSelector(state => state.UserData.groups)
    const studentsAccData = useSelector(state => state.UserData.students_data)
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



    const [isOpenStudents, setIsOpenStudents] = useState(false)
    const [isOpenTemplates, setIsOpenTemplates] = useState(false)
    const [isOpenAreYouSure, setIsOpenAreYouSure] = useState(false)
    const [isOpenNewGroup, setIsOpenNewGroup] = useState(false)
    const [isOpenStudentsAccInfo, setIsOpenStudentsAccInfo] = useState(false)
    const [isOpenGroupsMobile, setIsOpenGroupsMobile] = useState(false)

    const [stToDel, setStToDel] = useState(null)

    const del_st = (id, modOp) => {
        setIsOpenAreYouSure(modOp)
        setStToDel(id)
    }

    useEffect(() => {
        dispatch({type: LOAD_PERSONAL_CUSTOM_TEMPLATES, user_id: localStorage.getItem('user_id')})
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
                            <h2>
                                <DuoContentMobileRightPart onClick={() => setIsOpenGroupsMobile(true)}>
                                    {groupById.group_title}
                                </DuoContentMobileRightPart>
                            </h2>
                            {teachers
                                ?
                                <div style={{fontSize: "18px", textDecoration: "underline", fontWeight: '200'}}>
                                    {teachers.map((t, i) => <div key={i}>Учитель: {t}</div>)}
                                </div>
                                :
                                <></>
                            }
                        </div>
                        <DivideLineMono/>
                        <Portal open={isOpenStudents} onClose={() => setIsOpenStudents(false)} style={{  boxShadow:
                            "0 0 100px 0 rgba(0,0,0,0.75)", background: '#dadada'
                        }}>
                            <ModalAddStudents onClose={() => setIsOpenStudents(false)}/>
                        </Portal>

                        <Portal open={isOpenTemplates} onClose={() => setIsOpenTemplates(false)} style={{  boxShadow:
                                "0 0 100px 0 rgba(0,0,0,0.75)", background: '#dadada'
                        }}>
                            <ModalAddTemplates group_id={groupById.id} onClose={() => setIsOpenTemplates(false)}/>
                        </Portal>

                        <Portal open={isOpenStudentsAccInfo} onClose={() => setIsOpenStudentsAccInfo(false)} style={{  boxShadow:
                                "0 0 100px 0 rgba(0,0,0,0.75)", background: '#EAEEFF'
                        }}>
                            <div style={{display: 'flex', flexDirection: 'column', gap: '10px', width: '50vw', height: '50vh', overflow: 'auto'}}>
                                {studentsAccData && studentsAccData.length > 0 && studentsAccData.map((student, index) =>
                                    <div key={index}>
                                        <div style={{fontSize: '1.3rem'}}>{index + 1}. {student.fio}</div>
                                        <div style={{paddingLeft: '30px'}}>Логин: {student.login} </div>
                                        <div style={{paddingLeft: '30px'}}>Пароль: {student.password} </div>
                                    </div>
                                )}
                            </div>
                        </Portal>

                        <div className="split_content_left">
                            {groupById.participants.length > 0
                                ?
                                <div className="students_column">
                                    <div className="title_labels">
                                        <div style={{cursor: "pointer"}} onClick={() => setIsOpenStudentsAccInfo(true)}>Ученики: </div>
                                        <button className="add_button" onClick={() => setIsOpenStudents(true)}>
                                            <label className="add_label">
                                                Добавить
                                            </label>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="add_svg">
                                                <rect x="13.4551" y="2.58942" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(90 13.4551 2.58942)" fill="white"/>
                                                <rect x="2.74805" y="10.8995" width="18.8101" height="2.66667" rx="1.33333" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <Portal open={isOpenAreYouSure}
                                            onClose={() => setIsOpenAreYouSure(false)}
                                            style={{
                                                boxShadow: "0 0 100px 0 rgba(0,0,0,0.75)",
                                                background: '#dadada',
                                                marginLeft: '20px',
                                                marginRight: '20px'
                                            }}
                                    >
                                        <AreYouSureTo onClickNO={() => setIsOpenAreYouSure(false)}
                                                      onClickYES={() => {
                                                          dispatch(delete_one_students({index: stToDel}))
                                                          setIsOpenAreYouSure(false)
                                                      }}>
                                            Вы уверены, что хотите удалить этого ученика?
                                        </AreYouSureTo>
                                    </Portal>
                                    {groupById.participants.map((p, index) =>
                                        <Fragment key={p.id}>
                                            {p.role === 'Учитель'
                                                ?
                                                <></>
                                                :
                                                <div >
                                                    <div className="person_row">
                                                        <section className="fio_section">
                                                            <div>
                                                                {p.last_name} <> </>

                                                                {p.first_name} <> </>

                                                                {p.sur_name}
                                                            </div>
                                                        </section>

                                                        <div className="del_button" onClick={() => del_st(index, true)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect x="6.33008" y="4.44543" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(45 6.33008 4.44543)" fill="white"/>
                                                                <rect x="4.63477" y="17.893" width="18.8101" height="2.66667" rx="1.33333" transform="rotate(-45 4.63477 17.893)" fill="white"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>

                                            }
                                        </Fragment>
                                    )}
                                </div>
                                :
                                <div style={{marginLeft: "20px"}}>
                                    <DuoContentMobileRightPart onClick={() => setIsOpenGroupsMobile(true)}>
                                        Выберите группу
                                    </DuoContentMobileRightPart>
                                </div>
                            }
                            <div className="tests_column">
                                {groupById.group_title === ""
                                    ?
                                    <>
                                    </>
                                    :
                                    <div className="title_labels">
                                        <div>Тесты: </div>
                                        <button className="add_button" onClick={() => {
                                            setIsOpenTemplates(true)
                                        }}>
                                            <label className="add_label"  >
                                                Добавить
                                            </label>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="add_svg">
                                                <rect x="13.4551" y="2.58942" width="19.0336" height="2.66667" rx="1.33333" transform="rotate(90 13.4551 2.58942)" fill="white"/>
                                                <rect x="2.74805" y="10.8995" width="18.8101" height="2.66667" rx="1.33333" fill="white"/>
                                            </svg>
                                        </button>
                                    </div>
                                }

                                {groupById.templates_title && groupById.templates_title.map((tt, index) =>
                                    <Fragment key={index}>
                                        <div className="person_row">
                                            <section className="fio_section">
                                                <div>
                                                    {tt}
                                                </div>
                                            </section>
                                            <button className={"gen_button"} onClick={() => {
                                                dispatch({type: GENERATE_TESTS_BY_TEMPLATE_TO_ALL_GROUP,
                                                    data: {
                                                        group_id:  groupById.id,
                                                        template_id: groupById.templates_id[index],
                                                        user_id: Number(localStorage.getItem("user_id"))
                                                    }
                                                })
                                            }}>
                                                Сгенерировать
                                            </button>
                                        </div>
                                    </Fragment>
                                )}
                            </div>
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
                                    <Fragment key={group.id}>
                                        <GroupsPlate
                                            onClick={() => {
                                                get_data_by_group(group.id)
                                                dispatch({type: GET_STUDENTS_DATA, group_id: group.id})
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

                    </DuoContentRightPart>
                    <Portal open={isOpenGroupsMobile} onClose={() => setIsOpenGroupsMobile(false)} style={{  boxShadow:
                            "0 0 100px 0 rgba(0,0,0,0.75)", background: '#EAEEFF', width: '300px', height: '500px'
                    }}>
                        {/*<CreateNewGroupWindow onClose={() => setIsOpenGroupsMobile(false)}/>*/}
                        <SelectGroupMobile onClose={() => setIsOpenGroupsMobile(false)}
                                        filterInput={filterInput}
                                        setFilterInput={setFilterInput}
                                        clearFilters={clearFilters}
                                        filteredGroups={filteredGroups}
                                        get_data_by_group={get_data_by_group}
                                        setIsOpenNewGroup={setIsOpenNewGroup}
                                        isOpenNewGroup={isOpenNewGroup}
                                        exp_styles={styles}
                        />
                    </Portal>
                </DuoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default Groups;