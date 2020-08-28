import React, { useState } from 'react'
import CountryData from './CountryData'

const CountriesList = ({ filteredCountries }) => {

    const [singleCountry, setSingleCountry] = useState('')

    if (singleCountry) {
        return <CountryData singleCountry={singleCountry} />
    }

    return (
        <div>
            <ul>
                {filteredCountries.map(country =>
                    <p key={country.name}>
                        {country.name}
                        <button onClick={() => setSingleCountry(country)}>show</button>
                    </p>
                )}
            </ul>
        </div>
    )
}

export default CountriesList