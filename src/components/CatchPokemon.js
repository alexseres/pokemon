import React,{useContext, useState} from 'react'
import CatchedPokemonContext from './CatchedPokemonContext'



export default function CatchPokemon(props) {
    const [pokemons, setPokemons] = useContext(CatchedPokemonContext);

    const checkAndAdd = () =>{
        if(pokemons.includes(props.pokemon)){
            debugger;
            alert("it is already catched")
        }else{
            setPokemons([...pokemons, props.pokemon])
        }

    }
    
    return (
        <div>
            <button onClick={checkAndAdd} value="catch">Catch it</button>
        </div>
    )
}
 