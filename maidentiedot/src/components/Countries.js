import React from "react";

const Countries = ({ list }) => {
  if (list.length === 1) {
    return (
      <div>
        <h1>{list[0].name}</h1>
        <p>capital: {list[0].capital}</p>
        <p>population: {list[0].population}</p>
        <div>
          <img src={list[0].flag} alt="country flag" height="42" width="80" />
        </div>
      </div>
    );
  }
  if (list.length > 10) {
    return <div>too many matches, specify another filter</div>;
  } else {
    return (
      <div>{list.map(country => <p key={country.name}>{country.name}</p>)}</div>
    );
  }
};

export default Countries;
