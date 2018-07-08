import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: "Arto Hellas",
          number: "1234567"
        },
        {
          name: "Helena",
          number: "1234567"
        }
      ],
      newName: "",
      newNumber: "",
      filter: ""
    };
    this.addNumber = this.addNumber.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addNumber = event => {
    event.preventDefault();
    const names = this.state.persons.map(person => person.name);
    if (names.indexOf(this.state.newName) === -1) {
      const newPerson = {
        name: this.state.newName,
        number: this.state.newNumber
      };
      const persons = this.state.persons.concat(newPerson);
      this.setState({
        persons: persons,
        newName: "",
        newNumber: ""
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

  render() {
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <form>
          <div>
            rajaa näytettäviä
            <input name="filter" onChange={this.handleChange} />
          </div>
        </form>
        <h2>Lisää uusi</h2>
        <form onSubmit={this.addNumber}>
          <div>
            nimi:
            <input
              name="name"
              id="name"
              value={this.state.newName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            numero:
            <input
              name="number"
              id="number"
              value={this.state.newNumber}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>

        {this.state.persons
          .filter(n => n.name.indexOf(this.state.filter) > -1)
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
