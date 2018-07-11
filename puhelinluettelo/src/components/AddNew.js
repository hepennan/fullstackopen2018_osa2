import React from "react";

const AddNew = ({ handler }) => {
  return (
    <div>
      <h2>Lisää uusi</h2>
      <form onSubmit={handler.addPerson}>
        <div>
          nimi:
          <input
            name="name"
            id="name"
            value={handler.state.newName}
            onChange={handler.handleChange}
          />
        </div>
        <div>
          numero:
          <input
            name="number"
            id="number"
            value={handler.state.newNumber}
            onChange={handler.handleChange}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
