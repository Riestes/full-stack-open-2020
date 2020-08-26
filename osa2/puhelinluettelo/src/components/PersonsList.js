import React from 'react'

const PersonsList = ({ persons }) => {
    return (
        <div>
            <ul>
                {persons.map(person =>
                    <p key={person.name}>
                        {person.name} {person.number}
                    </p>
                )}
            </ul>
        </div>
    )
}

export default PersonsList