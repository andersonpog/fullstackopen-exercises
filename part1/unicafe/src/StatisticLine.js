const StatisticLine = ({text,value}) => {
    return (
        <tr>
            <th>{text}</th>
            <th>{value}</th>
        </tr>
    )
}

export default StatisticLine