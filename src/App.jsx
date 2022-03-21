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
        setFilmsLoaded(false);
        setPeopleLoaded(true);
    };

    const getFilms = async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films')
        const data = await response.json();
        setFilms(data);
        setPeopleLoaded(false);
        setFilmsLoaded(true);
    };

    if (peopleLoaded) {
        return (
            <><div className="d-flex flex-direction-row align-items-center" id="TotoroDiv">
                <img id="TotoroPic" src={Totoro} />
            </div>
                <div className="d-flex flex-direction-row align-items-center  mt-3" id="ButtonDiv">
                    <button id="peopleBtn" className="btn btn-primary mt-3" onClick={getPeople}>People</button>
                    <button id="filmsBtn" className="btn btn-primary mt-3" onClick={getFilms}>Films</button>
                </div>
                {people.map(person => <PeopleCard person={person} key={person.id} />)}
            </>
        )
    } else if (filmsLoaded) {
        return (
            <><div className="d-flex flex-direction-row align-items-center" id="TotoroDiv">
                <img id="TotoroPic" src={Totoro} />
            </div>
                <div className="d-flex flex-direction-row align-items-center  mt-3" id="ButtonDiv">
                    <button id="peopleBtn" className="btn btn-primary mt-3" onClick={getPeople}>People</button>
                    <button id="filmsBtn" className="btn btn-primary mt-3" onClick={getFilms}>Films</button>
                </div>
                {films.map(film => <FilmCard film={film} key={film.id} />)}
            </>
        )
    } else {
        return (
            <><div className="d-flex flex-direction-row align-items-center" id="TotoroDiv">
                <img id="TotoroPic" src={Totoro} />
            </div>
                <div className="d-flex flex-direction-row align-items-center  mt-3" id="ButtonDiv">
                    <button id="peopleBtn" className="btn btn-primary mt-3" onClick={getPeople}>People</button>
                    <button id="filmsBtn" className="btn btn-primary mt-3" onClick={getFilms}>Films</button>
                </div>
                <main className="container">
                    <section className="row justify-content-center mt-5">
                        <div className="col-md-6">
                            <div className="card shadow my-2">
                                <div className="card-body">
                                    <h4 className="d-flex flex-direction-row align-items-center" id="frontPageCardTitle">Studio Ghibli API Lab</h4>
                                    <p className="card-text">This labs shows off my understanding of fetching data through API's and conditional rending items on a page through React :)</p>
                                    <p className="text-muted">Check out more cool projects at https://github.com/ReidMcLain</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default App;