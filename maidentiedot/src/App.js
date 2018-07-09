import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./components/Countries";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCountries: [],
      filteredCountries: [],
      filter: ""
    };
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

  componentDidMount() {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      this.setState({ allCountries: response.data });
    });
  }

  render() {
    return (
      <div>
        <div>
          <form>
            find countries:
            <input name="filter" onChange={this.handleChange} />{" "}
          </form>
        </div>

        <Countries list={this.state.filteredCountries} />
      </div>
    );
  }
}

export default App;
