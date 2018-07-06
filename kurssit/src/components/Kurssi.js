import React from "react";

const Kurssi = ({ kurssi }) => {
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

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto kurssi={kurssi} />
      <Yhteensa kurssi={kurssi} />
    </div>
  );
};

export default Kurssi;
