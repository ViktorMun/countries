import  { useState, useEffect} from 'react';
import data from '../response/data.json'

const CountryList = () => {
 
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        console.log(data)
        setCountries(data)
      }, []);
  return (
    <>

<header>Global Overview of Countries</header>
     <table >
        <thead>
          <tr>
            <th>Flag</th>
            <th>Name</th>
            <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index} >
              <td><img className="flag" src={country.flags.png} alt={country.name.common} /></td>
              <td>{country.name.common}</td>
              <td>{country.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
</>)
};

export default CountryList