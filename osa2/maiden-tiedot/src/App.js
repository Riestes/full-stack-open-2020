import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './components/Filter'

function App() {

  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  const url = 'https://restcountries.eu/rest/v2/all'

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterSearch = (event) => {
    setSearchFilter(event.target.value)
  }

  return (
    <div>
      <Filter
        countries={countries}
        searchFilter={searchFilter}
        handleFilterSearch={handleFilterSearch}
      />
    </div>
  )

}

export default App;
