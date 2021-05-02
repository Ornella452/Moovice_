import React from 'react';
import { Table } from 'react-bootstrap';

function Popup({ selected, closePopup}) {
    return (
        <div>
            <section className="popup">
                <div className="content container">
                    <h2>{selected.Title} <span>({selected.Year})</span></h2>
                    <p className="rating"> Rating: {selected.imdbRating} </p>
                    <div className="plot d-flex align-content-end flex-wrap">
                        <img src={selected.Poster} alt="film" className="card card-img"/>
                        <p>{selected.Plot}</p>
                        
                    </div>
                    <Table striped bordered hover variant="dark" className="mb-4">
                    <thead>
                        <tr>
                        <th>Runtime</th>
                        <th>Genre</th>
                        <th>Awards</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{selected.Runtime}</td>
                        <td>{selected.Genre}</td>
                        <td>{selected.Awards}</td>
                        </tr>
                    </tbody>
                    </Table>
                    <button className="close" onClick={closePopup}>
                        Close
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Popup;
