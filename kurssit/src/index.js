import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10,
                id: 1
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7,
                id: 2
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14,
                id: 3
            }
        ]
    }

    const Otsikko = () => {
        return (
            <h1>{kurssi.nimi}</h1>
        )
    }

    const Sisalto = () => {
        return (
            <div>
                {kurssi.osat.map(osa => <Osa key={osa.id} osa={osa} />)}
            </div>
        )
    }

    const Osa = ({ osa }) => {
        return (
            <p>{osa.nimi} {osa.tehtavia}</p>
        )
    }

    const Kurssi = () => {
        return (
            <div>
                <Otsikko />
                <Sisalto />
            </div>
        )
    }


    return (
        <div>
            <Kurssi kurssi={kurssi} />
        </div>
    )


}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


