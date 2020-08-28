import React from 'react'

import CountryData from './CountryData'
import CountriesList from './CountriesList'

const MainChecks = ({ filteredCountries }) => {

  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }
  else if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
    return <CountriesList filteredCountries={filteredCountries} />
  }
  else if (filteredCountries.length === 1) {
    return <CountryData singleCountry={filteredCountries[0]} />
  }
  else if (filteredCountries <= 0) {
    return <p>Countries not found, specify another filter</p>
  }
}

export default MainChecks