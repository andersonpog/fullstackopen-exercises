import { useState } from "react";

const Country = ({country,show}) => {
    
    const [showInfo, setShowInfo] = useState(show)

    const handleClick = () => setShowInfo(!showInfo)

    return (
        <>
        { showInfo ?
        <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>

        <h2>Languages:</h2>
        <ul>
            {Object.values(country.languages).map( lang => <li key={lang} >{lang}</li> )}
        </ul>
        <img src={country.flags.png} alt="flag"/>
        <div>
        <button onClick={handleClick} >hide</button>
        </div>
        </div> 
        : 
        <div>
            <p>{country.name.common}</p>
            <button onClick={handleClick} >show</button>
        </div>
        }
        </>
     )
}
 
export default Country;