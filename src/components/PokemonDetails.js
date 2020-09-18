import React, { useEffect, useState} from 'react'
import axios from 'axios';


function PokemonDetails(props){
    const url = props.location.state.urlString;
    const [pokemonDetails, setPokemonDetails] =  useState([]);
    const [image, setImage] = useState(String);
    const [weight,setWeight] = useState(Number);
    const [height, setHeight] = useState(Number);


    useEffect(() => {

        axios(url)
        .then(res=> setPokemonDetails(res.data,
            setImage(res.data.sprites.front_default),        
            setWeight(res.data.weight),
            setHeight(res.data.height))
    )},[]);  
  
        const pokemon = pokemonDetails;

        return (
            <React.Fragment>
                <img src={image}/>
                <h1>Name : {pokemon.name}</h1>
                <p> its weight: {weight}</p>
                <p>its height : {height}</p>
            </React.Fragment>
        )
    }


export default PokemonDetails
