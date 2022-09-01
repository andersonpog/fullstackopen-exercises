import StatisticLine from "./StatisticLine"

const Statistics = ({good,neutral,bad}) => {
    if(good+neutral+bad===0)
        return(
            <p>No feedback given</p>
        )
    
    return(
            <table>
            <tbody>
            <StatisticLine text="good" value={good}/>
            <StatisticLine text="neutral" value={neutral}/>
            <StatisticLine text="bad" value={bad}/>
            <StatisticLine text="all" value={good+neutral+bad}/>
            <StatisticLine text="average" value={(good-bad)/(good+neutral+bad)}/>
            <StatisticLine text="positive" value={(good*100)/(good+neutral+bad)+ " %"}/>
            </tbody>
            </table>
    )

}

export default Statistics