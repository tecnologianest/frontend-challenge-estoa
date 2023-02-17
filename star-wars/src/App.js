import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from 'react-bootstrap/esm/Container';
import Spinner from 'react-bootstrap/Spinner';
import People from './components/People';
import Home from './components/Home';
import Films from './components/Films';
import './App.css';

function App() {

  /* CREATING CONSTS TO RETURN API DATA */
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    /* FETCH CHARACTERS FROM API INTO CONSTS */
    async function fetchPeople() {
      const results = [];
      let url = 'https://swapi.dev/api/people/?format=json';
      let data = await url.json();

      if (data['next'] != null)
      {
        do {
          const res = await fetch(url);
          const data = await res.json();
          url = data.next;
          results.push(...data.results);
        } while(url)  
      }
      setPeople(data.results);
  }

    /* FETCH FILMS FROM API INTO CONSTS */
    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
    }

    /* CALLS THE ASYNC FUNCTIONS */
    fetchPeople();
    fetchFilms();
    setLoad(false);
  }, []);


  return (
    <>
      <Router>
        <Header />
        <Container>
          {load ? (
            <div className='loading'>
              <Spinner animation="border" role="status" className='spinner'>
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/people' element={<People data={people}/>}></Route>
              <Route exact path='/films' element={<Films data={films}/>}></Route>
            </Routes>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
