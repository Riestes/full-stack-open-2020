import React from 'react'

import Countries from './MainChecks'

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
            <Countries
                filteredCountries={filteredCountries()} />
        </div>
    )
}

export default Filter