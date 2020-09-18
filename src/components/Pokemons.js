import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import axios from 'axios';


function Pokemons(props){
        const [pokemons, setPokemons] = useState([]);
        useEffect(() => {
        console.log("stackoverflow")
        axios('https://pokeapi.co/api/v2/pokemon')
        .then(res=> setPokemons(res.data.results))
        },[]);

        return pokemons.map((pokemon) =>(
            <Pokemon pokemon={pokemon}/>
        ));
}


export default Pokemons
