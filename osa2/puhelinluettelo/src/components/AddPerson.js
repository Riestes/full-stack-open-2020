import React from 'react'

const AddPerson = (props) => {

    // Add new person and number to the array
    // If person name already added, shows alert and won't add duplicate name
    const addPerson = (event) => {
        event.preventDefault()

        if (props.persons.find(person => person.name === props.newName)) {
            alert(`${props.newName} already exists in the phonebook!`)
        } else {
            const personObject = {
                name: props.newName,
                number: props.newNumber,
            }
            props.setPersons(props.persons.concat(personObject))
        }
    }

    return (
        <form onSubmit={addPerson}>
            <div>name: <input value={props.newName} onChange={props.handleNameChange} /></div>
            <div>number: <input value={props.newNumber} onChange={props.handleNumChange} /></div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default AddPerson