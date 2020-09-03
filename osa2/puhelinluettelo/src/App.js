import React, { useState, useEffect } from 'react';

//import AddPerson from './components/AddPerson';
//import PersonsListWithFilter from './components/PersonsListWithFilter';
import PersonsList from './components/PersonsList'

import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  // GET ALL PERSONS
  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const searchPerson = () => {
    if (search === '')
      return persons
    else
      return persons.filter(person =>
        person.name.toLowerCase().includes(search.toLowerCase()))
  }

  // ADD PERSON
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    const duplicateName = persons.some(person => person.name === newName)

    // CHECK DUPLICATE NAMES
    if (duplicateName) {
      const person = persons.find(person => person.name === newName)
      const personWithNewNum = { ...person, number: newNumber }
      const id = person.id

      if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(id, personWithNewNum)
          .then((returnedPerson) => {
            setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
          })
          .catch(error => {
            console.log(error)
          })
      }
    } else {
      // IF NO DUPLICATE NAMES, ADD NEW PERSON
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  const handleDelete = id => {
    const person = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>filter shown with <input onChange={handleSearchChange}></input></div>
      </form>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {searchPerson().map((person, i) =>
          <PersonsList
            key={i}
            person={person}
            handleDelete={handleDelete}
          />
        )}
      </ul>
    </div>
  )
}

export default App