import React,{ useContext, useState} from 'react'
import CatchedPokemon from './CatchedPokemon';
import CatchedPokemonContext from './CatchedPokemonContext';
import Pokemon from './Pokemon';



export default function CatchedPokemons() {
    const [pokemons,setPokemons] = useContext(CatchedPokemonContext);
    



    if(pokemons.length === 0){
        return <div>
            Nothing been catched
        </div>
    }
    else if(pokemons.length > 0){
        return pokemons.map((pokemon) =>(
            <Pokemon pokemon={pokemon}/>
            ));
        }
        
}
