import {useEffect, useState} from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

import personService from './services/persons'

function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(()=>{
    personService
    .getAll()
    .then(response => setPersons(response))
  },[])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const handleDelete = (event) => {
    if(window.confirm(`delete ${persons.find(person => person.id===parseInt(event.target.value)).name}?`))
    personService
    .remove(event.target.value)
    .then( ()=> setPersons(persons.filter(person => person.id!==parseInt(event.target.value))))
  }

  const addName = (event) => {
    event.preventDefault()
    if(persons.some( person => person.name === newName ))
    {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
      {
        personService.update(persons.find(person => person.name===newName).id, {name: newName, number: newPhone})
        .then(response => setPersons(persons.map(person => person.id!==parseInt(response.id) ? person : response)))
      }
    }
    else
    {
      personService
      .create({name: newName, number: newPhone})
      .then(response=> {
        setPersons(persons.concat(response))
        setNewName('')
        setNewPhone('')
      })
    }
  }

  const personsToShow = persons.filter( person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <h2>Add new</h2>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newPhone={newPhone} 
        handlePhoneChange={handlePhoneChange} 
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App;
