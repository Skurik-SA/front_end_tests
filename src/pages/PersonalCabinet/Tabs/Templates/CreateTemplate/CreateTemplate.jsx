import styles from "./CreateTemplate.module.css"
import WrapperPersonalCabinet from "../../../WrapperPersonalCabinet/WrapperPersonalCabinet";
import NavigationLine from "../../../NavigationLine/NavigationLine";
import DuoContent from "../../../DuoContent/DuoContent";
import DuoContentLeftPart from "../../../DuoContent/DuoContentLeftPart";
import DuoContentRightPart from "../../../DuoContent/DuoContentRightPart";
import DivideLineMono from "../../../../../components/DivideLines/DivideLine_Mono/DivideLineMono";
import Search from "../../../../../components/Search/Search";
import FilterInput from "../../../../../components/FilterInput/FilterInput";
import {useSelector} from "react-redux";
import {useState} from "react";
import RowModule from "../../../../../components/RowModule/RowModule";

const CreateTemplate = () => {

    const user_groups = useSelector(state => state.UserData.groups).map(
        group => {
            return {
                value: group.title, id: group.id
            }
        })
    const [selectedGroup, SetSelectedGroup] = useState(null)
    const selectGroup = (value) => {
        SetSelectedGroup(value)
    }

    const [selectedSubject, setSelectedSubject] = useState(null)
    const Subjects = [
        {value: "Все предметы", id: "all_subjects"},
        {value: "Информатика", id: "inf"},
        {value: "Математика", id: "math"},
    ]
    const selectSubject = (value) => {
        setSelectedSubject()
    }

    const [selectedDifficulty, setSelectedDifficulty] = useState(null)
    const Difficulties = [
        {value: "Все сложности", id: "all_difficulties"},
        {value: "Простой уровень", id: "easy"},
        {value: "Средний уровень", id: "medium"},
        {value: "Сложный уровень", id: "hard"},
    ]
    const selectDifficulty = (value) => {
        setSelectedDifficulty(value)
    }

    const [selectedTopic, setSelectedTopic] = useState(null)
    const Topics = [
        {value: "Все задания", id: "all_tasks"},
        {value: "Числа в памяти компьютера", id: "numbers_in_computers_memory"},
        {value: "Графы", id: "graphs"},
        {value: "Логика", id: "logic"},
        {value: "Системы счисления", id: "number_systems"},
    ]
    const selectTopic = (value) => {
        setSelectedTopic(value)
    }

    return (
        <>
            <WrapperPersonalCabinet>
                <NavigationLine></NavigationLine>
                <DuoContent>
                    <DuoContentLeftPart>
                        <div className={styles.CreateTemplateLeft_wrapperInputs_row}>
                            <div className={styles.CreateTemplateLeft_wrapperLeftInput_column}>
                                <label className={styles.CreateTemplateLeft_labelInput}>
                                    Название шаблона
                                </label>
                                <input className={styles.CreateTemplateLeft_default} placeholder={"Введите название"}/>
                            </div>
                            <div className={styles.CreateTemplateLeft_wrapperRightInput_column}>
                                <label className={styles.CreateTemplateLeft_labelInput}>
                                    Группа
                                </label>
                                <div className={styles.CreateTemplateLeft_groupsSelector}>
                                    <FilterInput placeholder={"Выберите группу"} position={"down"} options={user_groups} callbackFunc={selectGroup}/>
                                </div>
                            </div>
                        </div>

                        <DivideLineMono/>
                        <RowModule
                            width_style={{width: "100%"}}
                        />
                    </DuoContentLeftPart>
                    <DuoContentRightPart>
                        <div className={styles.CreateTemplateRight_inputs}>
                            <div className={styles.CreateTemplateRight_filters}>
                                <Search style_params={{width: "100%"}}/>
                                <div>
                                    Фильтры:
                                </div>
                                <FilterInput placeholder={"Выберите предмет"} position={"up"} options={Subjects} callbackFunc={selectSubject}/>
                                <FilterInput placeholder={"Выберите сложность"} position={"mid"} options={Difficulties} callbackFunc={selectDifficulty}/>
                                <FilterInput placeholder={"Выберите тематику"} position={"down"} options={Topics} callbackFunc={selectTopic}/>
                            </div>
                            <div className={styles.CreateTemplateLeft_taskTypesWrapper}>
                                <div className={styles.CreateTemplateLeft_taskTypesPlate}>
                                        asd
                                        asd
                                        asd
                                </div>
                                <div className={styles.CreateTemplateLeft_taskTypesPlate}>
                                    asd
                                    asd
                                    asd
                                </div>
                            </div>
                        </div>

                    </DuoContentRightPart>
                </DuoContent>
            </WrapperPersonalCabinet>
        </>
    )
}

export default CreateTemplate;