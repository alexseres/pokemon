import React, {useState} from 'react';

import Header from './components/layout/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Pokemons from './components/Pokemons';
import PokemonDetails from './components/PokemonDetails';
import Types from './components/Types';

import ThemeContext from './components/ThemeContext';
import Main from './Main';



function App(props){
  const themeHook = useState("light");

  
    //let id = 1;
    return (
      <ThemeContext.Provider value ={themeHook}>
        <Router>
          <div className="App">
            <div className="container">
              <Header/>

              <Route exact path="/" render={props =>(
                <React.Fragment>
                  <Main/>
                </React.Fragment>
              )}/>
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
      </ThemeContext.Provider>
    );
}


export default App;


