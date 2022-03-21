import React from 'react';

const PeopleCard = (props) => {
    return (
        <>
        <main className="container">
            <section className="row justify-content-center mt-5">
                    <div className="col-md-6" key={`user-card-${props.id}`}>
                        <div className="card shadow my-2">
                            <div className="card-body">
                                <h4 className="card-title">{props.person.name}</h4>
                                <hr/>
                                <p className="card-text"><span className= "text-muted">Gender </span>{props.person.gender}</p>
                                <hr/>
                                <p className="card-text"><span className= "text-muted">Age </span>{props.person.age}</p>
                                <hr/>
                                <p className="card-text"><span className= "text-muted">Hair Color </span>{props.person.hair_color}</p>
                                <hr/>
                                <p className="card-text"><span className= "text-muted">Eye Color </span>{props.person.eye_color}</p>
                                <a target="_blank" href={"https://ghibliapi.herokuapp.com/people/" + props.person.id}>API Resource Link</a>
                            </div>
                        </div>
                    </div>
            </section>
        </main>
        </>
    )
}

export default PeopleCard;