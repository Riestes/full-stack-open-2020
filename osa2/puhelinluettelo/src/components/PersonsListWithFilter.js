import React from 'react'

import PersonsList from './PersonsList'

const PersonsListWithFilter = (props) => {

    // Compare array names to your search input to find all similarities
    // If search field is empty, return list of all persons
    const searchPerson = () => {
        if (props.search === '')
            return props.persons
        else
            return props.persons.filter(person =>
                person.name.toLowerCase().includes(props.search.toLowerCase()))
    }

    // Returns filter input with the person list
    return (
        <div>
            <form>
                <div>filter shown with <input onChange={props.handleSearchChange}></input></div>
            </form>
            <PersonsList persons={searchPerson()} />
        </div>
    )
}

export default PersonsListWithFilter