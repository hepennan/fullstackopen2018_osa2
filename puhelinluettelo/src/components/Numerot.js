import React from 'react';

const Numerot = ({handler}) =>{
    return(
      <div>
      <h2>Numerot</h2>
      <table>
        <tbody>
          {handler.state.persons
            .filter(
              person =>
                person.name
                  .toLowerCase()
                  .indexOf(handler.state.filter.toLowerCase()) > -1
            )
            .map(person => (
              <tr key={person.name}>
                <td> {person.name}</td>
                <td> {person.number} </td>
                <td>
                  <form>
                    <button
                      type="button"
                      onClick={() => handler.removePerson(person)}
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
    )
  }

  export default Numerot;