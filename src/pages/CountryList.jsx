import { useState, useEffect, useMemo } from "react";
import data from "../response/data.json";
import Table from "../components/Table";
import Input from "../components/Input";
import styled from "styled-components";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    setCountries(data);
  }, []);

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

  return (
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
        className="flag"
      />
      </StyledDesk>
    </>
  );
};

export default CountryList;

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
 background:#ffffff08;
 padding: 20px;
 border-radius: 12px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 min-height: 80vh;
 width: 100%;
`;