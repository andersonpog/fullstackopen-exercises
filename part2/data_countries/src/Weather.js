import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({lat, lng}) => {

    const [temperature, setTemperature] = useState(0)
    const [iconCode, setIconCode] = useState('')
    const [wind, setWind] = useState(0)

    useEffect (()=>{
        axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5773397bdfa74702fcd51482151ef150`)
        .then(response => {
            setTemperature(response.data.main.temp)
            setIconCode(response.data.weather[0].icon)
            setWind(response.data.wind.speed)
        })
    })

    return ( 
        <>
        <p>temperature {temperature} Celsius</p>
        { iconCode!=='' ? <img src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`} alt={"icon"}/> : <></>}
        <p>wind {wind} m/s</p>
        </>
     )
}
 
export default Weather;