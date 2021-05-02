import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [state, setState] = useState({
    s:"",
    result:[],
    selected:{}

  });
  const apiurl = "http://www.omdbapi.com/?apikey=2176c21d";
  const search = (e) => {
    if(e.key === 'Enter') {
        axios(apiurl + "&s=" + state.s)
        .then((data) => {
          let result = data.data.Search;
          setState(prevState => {
            return {...prevState, result}
          })
        })
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return {...prevState, s}
    })
  }

  const openPopup = id => {
    axios(apiurl + "&i=" + id)
    .then(({ data }) => {
      let result = data;
      console.log('result:', result)
      setState(prevState => {
        return {...prevState, selected : result}
      })
    });
  }

  const closePopup = () => {
   setState(prevState => {
     return {...prevState, selected: {} }
   })
  }


   return (
    <div className="App">
      <header className="">
        <h1>Movies</h1>
      </header>
      <main>
          <Search handleInput={handleInput} search={search}/>
          <Results results={state.result} openPopup={openPopup} />
          {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected}  closePopup={closePopup}/> : false }
      </main>
    </div>
  );
}

export default App;
