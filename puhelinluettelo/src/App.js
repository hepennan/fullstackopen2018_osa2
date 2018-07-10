import React from "react";
import FilterByName from "./components/FilterByName";
import AddNew from "./components/AddNew";
import personService from "./services/persons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      newName: "",
      newNumber: "",
      filter: ""
    };
    this.addPerson = this.addPerson.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addPerson = event => {
    event.preventDefault();
    const names = this.state.persons.map(person => person.name);
    if (names.indexOf(this.state.newName) === -1) {
      const newPerson = {
        name: this.state.newName,
        number: this.state.newNumber
      };
      personService.create(newPerson).then(newPerson => {
        this.setState({
          persons: this.state.persons.concat(newPerson),
          newName: "",
          newNumber: ""
        });
      });
    }
  };

  handleChange = event => {
    if (event.target.name === "name") {
      this.setState({
        newName: event.target.value
      });
    }
    if (event.target.name === "number") {
      this.setState({
        newNumber: event.target.value
      });
    }
    if (event.target.name === "filter") {
      this.setState({
        filter: event.target.value
      });
    }
  };

  componentDidMount() {
    personService.getAll().then(response => {
      this.setState({ persons: response });
    });
  }

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <FilterByName handler={this} />
        <AddNew handler={this} />

        <h2>Numerot</h2>

        {this.state.persons
          .filter(
            n =>
              n.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) > -1
          )
          .map(p => (
            <p key={p.name}>
              {" "}
              {p.name} {p.number}
            </p>
          ))}
      </div>
    );
  }
}

export default App;
