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
      newPerson: {
        name: "",
        number: ""
      }
    };
    this.addNumber = this.addNumber.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addNumber = event => {
    event.preventDefault();
    const names = this.state.persons.map(person => person.name);
    if (names.indexOf(this.state.name) === -1) {
      const person = this.state.newPerson;
      const persons = this.state.persons.concat(person);
      const newPerson = {
        name: "",
        number: ""
      };
      this.setState({
        persons: persons,
        newPerson: newPerson
      });
    }
  };

  handleChange = event => {
    if (event.target.name === "name") {
      const uusi = {
        name: event.target.value,
        number: this.state.newPerson.number
      };

      this.setState({
        newPerson: uusi
      });
    } else {
      const uusi2 = {
        name: this.state.newPerson.name,
        number: event.target.value
      };

      this.setState({
        newPerson: uusi2
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <form onSubmit={this.addNumber}>
          <div>
            nimi:
            <input
              name="name"
              id="name"
              value={this.state.newPerson.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            numero:
            <input
              name="number"
              id="number"
              value={this.state.newPerson.number}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>

        <h2>Numerot</h2>
        {this.state.persons.map(p => (
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
