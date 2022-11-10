import {useEffect, useState} from 'react'
import axios from 'axios'
import Countries from './Countries'

function App() {

  const [countries, setCountries] = useState([])
  const [countryFilter, setCountryFilter] = useState('')
  // const [countriesToShow, setCountriesToShow] = useState([])

  useEffect (() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      setCountries(response.data)
    })
  },[])

  // useEffect( () => {
  //   setCountriesToShow(countryFilter ? countries.filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase())) : [])
  // },[countryFilter, countries])

  const handleCountryFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }

  const countriesToShow = countryFilter ? countries.filter(country => country.name.common.toLowerCase().includes(countryFilter.toLowerCase())) : []
  // console.log(countriesToShow)
  // countriesToShow.length>10 ? console.log("tem muito") : console.log("ai sim")
  return (
    <>
      find countries: <input
      value={countryFilter}
      onChange={handleCountryFilterChange}
      />
      {countriesToShow.length>0 ? <Countries countries={countriesToShow} /> : <></>}
    </>
  )
}

export default App;
