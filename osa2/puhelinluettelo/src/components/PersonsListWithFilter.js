import React from 'react'

import PersonsList from './PersonsList'

const PersonsListWithFilter = (props) => {

    const searchPerson = () => {
        if (props.search === '')
            return props.persons
        else
            return props.persons.filter(person =>
                person.name.toLowerCase().includes(props.search.toLowerCase()))
    }

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