import "./MyTemplates.css"
import NavigationLine from "../../../NavigationLine/NavigationLine";
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import MonoContent from "../../../MonoContent/MonoContent";
import DivideLineMono from "../../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import Search from "../../../../../components/Search/Search";
import CreateBlueButton from "../../../../../components/Buttons/CreateBlueButton/CreateBlueButton";
import RowModule from "../../../../../components/RowModule/RowModule";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
// import {LOAD_CUSTOM_TEMPLATES} from "../../../../../redux/saga/actions_Saga/actions_saga";
import FilterInput from "../../../../../components/FilterInput/FilterInput";
import {set_navbar_link} from "../../../../../redux/store/slices/slice_Navbar";
import {useNavigate} from "react-router-dom";
import {clear_data} from "../../../../../redux/store/slices/slice_CreateTemplates";
import {delete_custom_template, sort_templates} from "../../../../../redux/store/slices/slice_CustomTemplates";
import FiltersHeader from "../../../../../components/FiltersHeader/FiltersHeader";
import {LOAD_PERSONAL_CUSTOM_TEMPLATES} from "../../../../../redux/saga/tests/saga_LoadPersonalCustomTemplates";
import {COPY_TEMPLATE} from "../../../../../redux/saga/tests/saga_CopyTemplate";
import {DELETE_TEMPLATE} from "../../../../../redux/saga/tests/saga_DeleteTemplate";

const MyTemplates = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const templates = useSelector(state => state.CustomTemplatesData.custom_templates)

    const options_order = [
        {
            value: 'По алфавиту',
            id: 0,
        },
        {
            value: 'В обратном порядке',
            id: 1,
        },
        {
            value: 'По дате создания',
            id: 2,
        },
        {
            value: 'По дате обновления',
            id: 3,
        },
    ]
    const [filter_order, setFilter_Order] = useState(options_order[3])
    const changeFilter_Order = (value) => {
        setFilter_Order(value)
        dispatch(sort_templates({id: value.id}))
    }

    const options_groups = [
        {
            value: "Все группы",
            id: -1
        },
        ...useSelector(state => state.UserData.groups).map(
            group => {
                 return {
                        value: group.title,
                        id: group.id
                    }
            })
    ]
    const [filter_group, setFilter_Group] = useState(options_groups[0])

    const changeFilter_Group = (value) => {
        setFilter_Group(value)
    }

    const [filterInput, setFilterInput] = useState("")
    const filteredData = templates.filter(template => {
        if (filter_group.id === -1) {
            return (template.title + " " + template.group_id).toLowerCase().includes(filterInput.toLowerCase())
        }
        else {
            if (template.group_id === filter_group.id) {
                return (template.title + " " + template.group_id).toLowerCase().includes(filterInput.toLowerCase())
            }
            else if (filter_group.id === -1) {
                return (template.title + " " + template.group_id).toLowerCase().includes(filterInput.toLowerCase())
            }
        }
    })

    const copyRow = (id) => {
        dispatch({type: COPY_TEMPLATE, payload: id})

        console.log("Копировать!!")
    }

    const editRow = (template_id) => {
        dispatch(clear_data())
        navigate(`/cabinet/my_templates/edit/${template_id}`)
        console.log("Редактировать!")
    }
    const deleteRow = (id) => {
        dispatch({type: DELETE_TEMPLATE, payload: id})
        dispatch(delete_custom_template(id))
        console.log("Удалить!")
    }

    const clearFilters = () => {
        setFilterInput("")
        setFilter_Order(options_order[3])
        dispatch(sort_templates({id: 3}))
        setFilter_Group(options_groups[0])
    }

    useEffect(() => {
        // Диспатч ниже загрузит абсолютно все шаблоны
        // dispatch({type: LOAD_CUSTOM_TEMPLATES})

        // Диспатч ниже загрузит только шаблоны пользователя
        dispatch({type: LOAD_PERSONAL_CUSTOM_TEMPLATES, user_id: localStorage.getItem('user_id')})

        dispatch(set_navbar_link(
            [
                {
                    link: 'cabinet/personal_data',
                    link_name: 'Личный кабинет | ',
                    active: false,
                },
                {
                    link: 'cabinet/my_templates',
                    link_name: 'Мои шаблоны',
                    active: false,
                }
            ]
        ))
    }, [])

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine tab_id={4}></NavigationLine>
                <MonoContent>
                    <div className="myTemplatesWrapper_upperBlock">
                        <Search
                            style_params={{marginLeft: '16px', width: "30%"}}
                            value={filterInput}
                            onChange={(e) => {
                                e.preventDefault()
                                setFilterInput(e.target.value)
                            }}
                        />
                        <CreateBlueButton
                            button_params={{marginRight: '16px'}}
                            link_to={'/cabinet/my_templates/create'}
                        >
                            Создать новый шаблон
                        </CreateBlueButton>
                    </div>
                    <DivideLineMono/>
                    <div className="myTemplates_ContentWrapper">
                        <div className="myTemplates_TemplateWrapper">
                            <section className="subButtonsToFilter">
                                <label className="subButtonsToFilter_label">
                                    Найдено: {filteredData.length}
                                </label>
                            </section>
                            {filteredData.map((template, index) =>
                                <RowModule
                                    key={index}
                                    index_row={index + 1}
                                    width_style={{width: "97%"}}
                                    template_name={template.title}
                                    template_group={template.group_title}
                                    // template_tasks_count={template.tasks_amount + " заданий"}
                                    template_tasks={template.tasks_description}
                                    template_id={template.id}


                                    copyHandler={copyRow}
                                    editHandler={editRow}
                                    deleteHandler={deleteRow}
                                    isTemplate={true}
                                />
                            )}
                        </div>

                        <div className="myTemplates_FiltersWrapper">
                            <FiltersHeader clearFilters={clearFilters}/>
                            <FilterInput placeholder={"Сортировка"}
                                         position={"up"}
                                         options={options_order}
                                         callbackFunc={changeFilter_Order}
                                         keyWord={"Сортировать: "}
                                         IsDefaultValue
                            >
                                {filter_order.value}
                            </FilterInput>
                            <FilterInput placeholder={"Все группы"}
                                         position={"down"}
                                         options={options_groups}
                                         callbackFunc={changeFilter_Group}
                                         IsDefaultValue
                            >
                                {filter_group.value}
                            </FilterInput>
                        </div>
                    </div>

                </MonoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default MyTemplates;