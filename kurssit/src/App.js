import React from "react";
import Kurssi from "./components/Kurssi";

const App = ({ kurssit }) => {
  const Kurssit = () => {
    return (
      <div>
        {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi} />)}
      </div>
    );
  };

  const Opetusohjelma = () => {
    return (
      <div>
        <h1>Opetusohjelma</h1>
        <Kurssit />
      </div>
    );
  };

  return (
    <div>
      <Opetusohjelma kurssit={kurssit} />
    </div>
  );
};

export default App;
