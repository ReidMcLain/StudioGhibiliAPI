import React, { useState } from 'react'
import PeopleCard from './components/people';
import FilmCard from './components/films';
import Totoro from './assets/SGLogo.png'

const App = () => {

    const [people, setPeople] = useState([]);
    const [peopleLoaded, setPeopleLoaded] = useState(false);
    const [films, setFilms] = useState([]);
    const [filmsLoaded, setFilmsLoaded] = useState(false);

    const getPeople = async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/people')
        const data = await response.json();
        setPeople(data);
        setPeopleLoaded(true);
    };

    const getFilms = async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const data = await response.json();
        setFilms(data);
        setFilmsLoaded(true);
    };

    if (peopleLoaded) {
        return (
            people.map(person => <PeopleCard person={person} key={person.id} />)
        )
    } else if (filmsLoaded) {
        return (
            films.map(film => <FilmCard film={film} key={film.id} />)
        )
    } else {
        return (
            <><div className="d-flex flex-direction-row align-items-center" id="TotoroDiv">
                <img id="TotoroPic" src={Totoro} />
            </div>
                <div className="d-flex flex-direction-row align-items-center" id="TotoroDiv">
                    <button onClick={getPeople}>People</button>
                    <button onClick={getFilms}>Films</button>
                </div>
            </>
        )
    }
}

export default App;