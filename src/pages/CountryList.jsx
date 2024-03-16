import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Table from "../components/Table";
import Input from "../components/Input";
import styled from "styled-components";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      setError("Error fetching all countries");
    }
    setLoading(false);
  };

  const fetchCountry = async (countryCode) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha/${countryCode}`,
      );
      setCountry(response.data[0]);
    } catch (error) {
      setError("Error fetching country data");
    }
    setLoading(false);
  };

  const sortedFilteredCountries = useMemo(() => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    if (sortOption === "name") {
      return filteredCountries.sort((a, b) =>
        a.name.common.localeCompare(b.name.common),
      );
    } else if (sortOption === "population") {
      return filteredCountries.sort((a, b) => b.population - a.population);
    }

    return filteredCountries;
  }, [countries, searchQuery, sortOption]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };
  const handleCountryClick = async (country) => {
    console.log(country);
    fetchCountry(country.cca3);
  };

  return isLoading ? (
    <> Loading...</>
  ) : (
    <>
      <header>Global Overview of Countries</header>
      <Controls>
        <Input
          type="text"
          placeholder="Search by country name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <Select onChange={handleSortChange}>
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="population">Population</option>
        </Select>
      </Controls>
      <StyledDesk>
        <Table
          data={sortedFilteredCountries}
          th={["Flag", "Name", "Capital"]}
          onClickRow={handleCountryClick}
          className="flag"
        />
      </StyledDesk>

      {country && (
        <BlackScreen onClick={() => setCountry(null)}>
          <Popup>
            <button onClick={() => setCountry(null)}>×</button>
            <h2>{country.name.common}</h2>

            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
          </Popup>
        </BlackScreen>
      )}

      {error && <div className="error">{error}</div>}
    </>
  );
};

export default CountryList;

const BlackScreen = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background: #5d5d5de6;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;
const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const StyledDesk = styled.div`
  background: #ffffff08;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  min-height: 80vh;
  width: 100%;
`;
const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #dddddde6;
  color: black;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  z-index: 999;
  width: 90%;
  max-width: 600px;

  button {
    position: absolute;
    right: 10px;
    top: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
