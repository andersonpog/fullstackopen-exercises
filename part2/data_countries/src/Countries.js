import Country from "./Country";

const Countries = ({countries}) => {
    return ( 
        <>
            {countries.length>10 ? <p>Too many matches, specify another filter</p> : 

            countries.length >1 ?        
            <>
            {countries.map( country => <Country key={country.name.common} country={country} show={false} />) }
            </>
            : 
            <Country country={countries[0]} show={true} />
            
            }
        </>
     )
}
 
export default Countries;