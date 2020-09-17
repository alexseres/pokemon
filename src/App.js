import React, {useEffect, useState} from 'react';
import './App.css';
import Header from './components/layout/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'
import Pokemons from './components/Pokemons';
import PokemonDetails from './components/PokemonDetails';
import Types from './components/Types';


 function App(props){


  
  
    //let id = 1;
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/pokemons" render={props =>(
              <React.Fragment>
                  <Pokemons/>
              </React.Fragment>
            )}/>
            <Route path={`/pokeapi.co/api/v2/pokemon/:id`} component={PokemonDetails}></Route>
            <Route path="/types" render={props => (
              <React.Fragment>
                <Types/>
              </React.Fragment>
            )}/>
          </div>  
        </div>
      </Router>
    );
}


export default App;
