import React from "react";

const Country = props => {
  if (props.list.length === 1) {
    return (
      <div>
        <h1>{props.list[0].name}</h1>
        <p>capital: {props.list[0].capital}</p>
        <p>population: {props.list[0].population}</p>
        <div>
          <img
            src={props.list[0].flag}
            alt="country flag"
            height="42"
            width="80"
          />
        </div>
      </div>
    );
  }
  if (props.list.length > 10) {
    return <div>too many matches, specify another filter</div>;
  } else {
    return (
      <div>
        {props.list.map(country => <p key={country.name}>{country.name}</p>)}
      </div>
    );
  }
};

export default Country;
