import React, { useState, useEffect } from 'react';
import axios from 'axios'

import AddPerson from './components/AddPerson';
import PersonsListWithFilter from './components/PersonsListWithFilter';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  // Get beginning persons data from server p3001 (db.json)
  // and add to persons[]
  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
      <h2>add a new</h2>
      <AddPerson
        setPersons={setPersons}
        handleNameChange={handleNameChange}
        handleNumChange={handleNumChange}
        persons={persons}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <PersonsListWithFilter
        handleSearchChange={handleSearchChange}
        search={search}
        persons={persons}
      />
    </div>
  )
}

export default App