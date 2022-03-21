import React from 'react';

const FilmCard = (props) => {
    return (
        <>
            <main className="container">
                <section className="row justify-content-center mt-5">
                    <div className="col-md-6" key={`user-card-${props.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <div><img className="moviePosters" src={props.film.image} className="card-img-top" /></div>
                                <hr/>
                                <h4 className="card-title">{props.film.title}</h4>
                                <hr />
                                <p className="card-text"><span className="text-muted">Produced by </span>{props.film.producer}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Directed by </span>{props.film.director}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Released in </span>{props.film.release_date}</p>
                                <hr />
                                <p className="card-text"><span className="text-muted">Rotten Tomato Score </span>{props.film.rt_score}</p>
                                <hr />
                                <p className="card-text">{props.film.description}</p>
                                <a target="_blank" href={"https://ghibliapi.herokuapp.com/films/" + props.film.id}>API Resource Link</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default FilmCard;