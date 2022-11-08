import {useState} from 'react'
import Filter from './Filter'
import Persons from './Persons'
import PersonForm from './PersonForm'

function App() {

  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', phone:'54321287'}
  ])

  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleNameFilterChange = (event) => {
    setNameFilter(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if(persons.some( person => person.name === newName ))
      window.alert(`${newName} already in list`)
    else
    {
      setPersons(persons.concat({name: newName, phone: newPhone}))
      setNewName('')
      setNewPhone('')
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
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App;
