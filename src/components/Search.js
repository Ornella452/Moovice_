import React from 'react'

function Search(props) {
    return (
        <div>
            <section className="searchbox-wrap">
                <input 
                type="text" 
                placeholder="Search the movie ?" 
                className="searchbox" 
                onChange={props.handleInput}
                onKeyPress={props.search}
                />
            </section>
            
        </div>
    )
}

export default Search
