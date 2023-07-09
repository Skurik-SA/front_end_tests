import "./StatisticData.css"

const StatisticData = ({data}) => {
    return (
        <>
            <div className="statistic_wrapper">
                <div className="statistic_group">
                    <hr/>
                    Группы
                    <hr/>
                </div>
                <div className="statistic_table">
                    {data.map(person => <div>Человек {person}</div>)}
                </div>
            </div>
        </>
    )
}

export default StatisticData;