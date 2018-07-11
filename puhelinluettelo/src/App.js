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

  //**method checks if person with name exists. If yes, its id is returned, otherwise -1 */
  personIdForName(name) {
    const person = this.state.persons.find(
      person => person.name.toLowerCase() === name.toLowerCase()
    );
    return(person!=null ? person.id : -1)
  }

  //**if person with name does not exist, it is added. Otherwise person's number is updated locally and on the server */
  addPerson = event => {
    event.preventDefault();
    const id = this.personIdForName(this.state.newName);
    if (id === -1) {
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
    } else {
      const replaceOldWithNew = window.confirm(
        this.state.newName.concat(
          " on jo luettelossa, korvataanko vanha numero uudella?"
        )
      );
      if (replaceOldWithNew) {
        const modifiedPerson = {
          name: this.state.newName,
          number: this.state.newNumber,
          id: id
        };

        const copyOfPersons = this.state.persons.map(person => {
          if (person.id === id) {
            person.number = this.state.newNumber;
          }
          return person;
        });
        this.setState({
          persons: copyOfPersons
        });

        personService.modify(modifiedPerson).then(response => {
          console.log(response.name, ' modified');
        });
      }
    }
  };

  removeLocal(personId){
    this.setState({
        persons : this.state.persons.filter(person => person.id !== personId)
    })
  }

  removePerson(person) {
    const saaPoistaa = window.confirm(
      "Poistetaanko ".concat(person.name).concat("?")
    );
    if (saaPoistaa) {
      personService.remove(person.id).then(() => {
        this.removeLocal(person.id)
        });
    }
  }

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
        <table>
          <tbody>
            {this.state.persons
              .filter(
                person =>
                  person.name
                    .toLowerCase()
                    .indexOf(this.state.filter.toLowerCase()) > -1
              )
              .map(person => (
                <tr key={person.name}>
                  <td> {person.name}</td>
                  <td> {person.number} </td>
                  <td>
                    <form>
                      <button
                        type="button"
                        onClick={() => this.removePerson(person)}
                      >
                        poista
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
