import React from 'react'

function ResultData({ result, openPopup }) {
    return (
        <div className="result" onClick={() => openPopup(result.imdbID)}>

            <img src={result.Poster} alt="film" className="card"/>
            <h3 className="card">{result.Title}</h3>
            
        </div>
    )
}

export default ResultData;
