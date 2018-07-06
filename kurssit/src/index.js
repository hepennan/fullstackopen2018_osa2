import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const kurssit = [
    {
      nimi: "Half Stack -sovelluskehitys",
      id: 1,
      osat: [
        {
          nimi: "Reactin perusteet",
          tehtavia: 10,
          id: 1
        },
        {
          nimi: "Tiedonvälitys propseilla",
          tehtavia: 7,
          id: 2
        },
        {
          nimi: "Komponenttien tila",
          tehtavia: 14,
          id: 3
        }
      ]
    },
    {
      nimi: "Node.js",
      id: 2,
      osat: [
        {
          nimi: "Routing",
          tehtavia: 3,
          id: 1
        },
        {
          nimi: "Middlewaret",
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ];

  const Otsikko = ({ kurssi }) => {
    return <h1>{kurssi.nimi}</h1>;
  };

  const Sisalto = ({ kurssi }) => {
    return <div>{kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)}</div>;
  };

  const Osa = ({ osa }) => {
    return (
      <p>
        {osa.nimi} {osa.tehtavia}
      </p>
    );
  };

  const Yhteensa = ({ kurssi }) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const tehtavat = kurssi.osat.map(osa => osa.tehtavia);
    const tehtavatYhteensa = tehtavat.reduce(reducer);
    return (
      <div>
        <p>yhteensä {tehtavatYhteensa} tehtävää</p>
      </div>
    );
  };

  const Kurssi = ({ kurssi }) => {
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto kurssi={kurssi} />
        <Yhteensa kurssi={kurssi} />
      </div>
    );
  };

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

ReactDOM.render(<App />, document.getElementById("root"));
