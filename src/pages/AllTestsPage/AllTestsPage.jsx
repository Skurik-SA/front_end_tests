import BoxMultipleInput from "../../components/Inputs/BoxMultipleInput/BoxMultipleInput";
import {useEffect, useState} from "react";
import "./AllTestsPage.css"
import TemplateRow from "../../components/TemplateRow/TemplateRow";
import {useFetching} from "../../components/hooks/useFetching";
import axios from "axios";



const AllTestsPage = () => {

    const [tests, setTests] = useState([])

    const [fetchData, isLoading, fetchError] = useFetching(async () => {
        const {data} = await axios.get(`http://127.0.0.1:8000/api/test_template`
        )
        let responseData = []
        for (let i = 0; i < data.length; i++) {
            responseData.push({
                id: data[i].id,
                title: data[i].title,
                group_id: data[i].group_id,
                owner_id: data[i].owner_id,
                tasks: data[i].tasks,
                tasks_amount: data[i].tasks_amount
            })
        }
        setTests(responseData)
    })

    useEffect(() => {
        fetchData()
        console.log(tests)

    }, [])

    return (
        <>
            <div className="CustomTemplateContent">
                <div className="TemplateHeaderContent">
                    <div>
                        Мои тесты:
                    </div>
                    <div>
                        <input className="searchInput" placeholder="Поиск"/>
                    </div>
                </div>
                <div className="TemplateRows">
                    {isLoading
                        ?
                        <div>Загрузка</div>
                        :
                        <>
                        {tests.map(test =>
                            <TemplateRow key={test.id}
                                         test_title={test.title}
                                         group={"Группа " + test.group_id}
                                         tasks_amount={10}
                                         test={test}
                                         custom={false}
                                         generate={true}/>
                        )}
                        </>

                    }
                </div>
            </div>
        </>
    )
}
export default AllTestsPage;