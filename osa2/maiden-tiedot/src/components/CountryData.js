import React from 'react'

const CountryData = ({ singleCountry }) => {

    return (
        <div>
            <h1>{singleCountry.name.toUpperCase()}</h1>
            <p>Capital: {singleCountry.capital}</p>
            <p>Population: {singleCountry.population}</p>
            <h3>Languages</h3>
            <ul>
                {singleCountry.languages.map(language =>
                    <li key={language.name}>
                        {language.name}
                    </li>
                )}
            </ul>
            <img src={singleCountry.flag} alt="Flag" height="100"></img>
        </div>
    )
}

export default CountryData