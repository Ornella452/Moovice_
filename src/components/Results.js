import React from 'react';
import Result from './ResultData';
import { Alert } from 'react-bootstrap';

function Results({ results, openPopup }) {
    return (
        <div>
            <section className="results col-m-3">
                {results === undefined ?
                    <Alert variant="warning" className="alert"> The movie is not found !</Alert>
                    : results.map(result => <Result key={result.imdbID} result={result}
                        openPopup={openPopup} />)
                }
            </section>


        </div>
    )
}

export default Results
