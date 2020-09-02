import React from 'react'

import MainChecks from './MainChecks'

const Filter = ({ countries, searchFilter, handleFilterSearch }) => {

    const filteredCountries = () => {
        return countries.filter(country =>
            country.name.toLowerCase().includes(searchFilter.toLowerCase()))
    }

    return (
        <div>
            <form>
                <div>Find countries <input onChange={handleFilterSearch}></input></div>
            </form>
            <MainChecks
                filteredCountries={filteredCountries()} />
        </div>
    )
}

export default Filter