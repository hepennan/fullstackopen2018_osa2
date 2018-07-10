import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Country from "./components/Country";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const filtered = this.state.allCountries.filter(
      country =>
        country.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >
        -1
    );

    this.setState({
      filteredCountries: filtered,
      filter: event.target.value
    });
  };

  selectCountry (countryName) {
    const filtered = this.state.allCountries.filter(
      country =>
        country.name.toLowerCase().indexOf(countryName.toLowerCase()) >
        -1
    );

    this.setState({
      filteredCountries: filtered,
      filter: countryName
    });
  }

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      this.setState({ allCountries: response.data });
    });
  }

  Countries = props => {
    if (props.list.length === 1) {
      return <Country list={props.list} />;
    }
    if (props.list.length > 10) {
      return <div>too many matches, specify another filter</div>;
    } else {
      return (
        <div>
          {props.list.map(country => <p key={country.name} onClick= {() => this.selectCountry(country.name)}>{country.name}</p>)}
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div>
          <form>
            find countries:
            <input name="filter" onChange={this.handleChange} />{' '}
          </form>
        </div>

        <this.Countries list={this.state.filteredCountries} />
      </div>
    );
  }
}



export default App;
