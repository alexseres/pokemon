import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';



class Pokemons extends Component {
    render() {
       
        return this.props.pokemons.map((pokemon) =>(
            <Pokemon pokemon={pokemon}/>
        ));

     
    }
}



Pokemons.propTypes = {
    pokemons:PropTypes.array.isRequired
}

export default Pokemons
