import React, { useState } from 'react';

import AddPerson from './components/AddPerson';
import PersonsListWithFilter from './components/PersonsListWithFilter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

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