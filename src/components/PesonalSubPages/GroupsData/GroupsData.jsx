import "./GroupsData.css"

const GroupsData = ({data}) => {

    const arr = [1, 2, 3, 4, 5, ]

    return (
        <>
            <div className="groups_data_wrapper">
                <div className="groups_left_wrapper">
                    <div>data</div>
                </div>
                <div className="groups_right_wrapper">
                    <div className="meta_fields">
                        <input/>
                        <div className="new_button">
                            Новая группа
                        </div>
                    </div>
                    <div className={"row_wrapper"}>
                        {arr.map((a, index) =>
                            <div key={index}
                                 className="group_row"
                            >
                                Группа {a}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupsData;

