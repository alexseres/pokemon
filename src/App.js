import React, {Component} from 'react';
import './App.css';
import Header from './components/layout/header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios'
import Pokemons from './components/Pokemons';
import PokemonDetails from './components/PokemonDetails';
import Types from './components/Types';


class App extends Component {
  state = {
      pokemons:[],
      types:[]
  }
  componentDidMount(){
  
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => this.setState({pokemons:res.data.results}))
    
    axios.get('https://pokeapi.co/api/v2/type')
    .then(res=> this.setState({types:res.data.results}))

  }

  
  render(){
    //let id = 1;
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/pokemons" render={props =>(
              <React.Fragment>
                  <Pokemons pokemons={this.state.pokemons}/>
              </React.Fragment>
            )}/>
            <Route path={`/pokeapi.co/api/v2/pokemon/:id`} component={PokemonDetails}></Route>
            <Route path="/types" render={propes => (
              <React.Fragment>
                <Types types={this.state.types}/>
              </React.Fragment>
            )}/>
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
