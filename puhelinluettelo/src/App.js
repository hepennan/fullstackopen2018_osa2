import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [{ name: "Arto Hellas" }],
      newName: ""
    };
  }

  addNumber = event => {
    event.preventDefault();
    const names = this.state.persons.map(person => person.name);
    if (names.indexOf(this.state.newName) === -1) {
      const person = {
        name: this.state.newName
      };
      const persons = this.state.persons.concat(person);
      this.setState({
        persons: persons,
        newName: ""
      });
    }
  };

  handleChange = event => {
    this.setState({ newName: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>

        <form onSubmit={this.addNumber} onChange={this.handleChange}>
          <div>
            nimi: <input value={this.state.newName} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        {this.state.persons.map(person => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    );
  }
}

const Person = ({ person }) => {
  return (
    <div>
      <p>{person.name}</p>
    </div>
  );
};

export default App;
