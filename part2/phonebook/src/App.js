import {useEffect, useState} from 'react'

import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Message from './components/Message'

import personService from './services/persons'

function App() {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState('')
  const [typeMessage, setTypeMessage] = useState('')

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
    .then( response => {
      setPersons(persons.filter(person => person.id!==parseInt(event.target.value)))
      if(response===200){
        setMessage(`Person removed with succes.`)
        setTypeMessage('success')
        setTimeout(() => {
          setMessage('')
          setTypeMessage('')
        },5000)
      }
      if(response===404){
        setMessage(`Person not present on the server anymore.`)
        setTypeMessage('fail')
        setTimeout(() => {
          setMessage('')
          setTypeMessage('')
        },5000)
      }
    })
  }

  const addName = (event) => {
    event.preventDefault()
    if(persons.some( person => person.name === newName ))
    {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`))
      {
        personService.update(persons.find(person => person.name===newName).id, {name: newName, number: newPhone})
        .then(response => setPersons(persons.map(person => person.id!==parseInt(response.id) ? person : response)))

        setNewName('')
        setNewPhone('')

        setMessage(`${newName} number updated with succes.`)
        setTypeMessage('success')
        setTimeout(() => {
          setMessage('')
          setTypeMessage('')
        },5000)
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

        setMessage(`Added ${newName} with succes.`)
        setTypeMessage('success')
        setTimeout(() => {
          setMessage('')
          setTypeMessage('')
        },5000)
      })
    }
  }

  const personsToShow = persons.filter( person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameFilter={nameFilter} handleNameFilterChange={handleNameFilterChange} />
      <Message message={message} type={typeMessage} />
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
