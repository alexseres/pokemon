import React,{useState, useEffect,useContext} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {Link} from 'react-router-dom'
import CatchedPokemons from './CatchedPokemons';
import CatchedPokemonContext from './CatchedPokemonContext';


export default function CatchedPokemon(props) {
    


   
    const url = props.pokemon.url;
    const [image, setImage] = useState(String); 
    useEffect(()=>{
        axios(url)
        .then(res=>setImage(res.data.sprites.front_default))

    },[]); 
    
    const {name} = props.pokemon;
    const urlNoProtocol = url.replace(/^https?\:\/\//i, "");
    const obj = props.pokemon;
    debugger;
    return (
        <StyledDivCard class="card">
            <img src={image}></img>
            <StyledDivContainer>
                <Link to={{pathname: urlNoProtocol, state:{urlString: url}}}>{name}</Link> 
                <p>ok</p>
            </StyledDivContainer>
        </StyledDivCard>
    )
}


const StyledDivCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover{
        box-shadow:0 8px 16px 0 rgba(0,0,0,0.2);
    }

`
const StyledDivContainer = styled.div`
    padding: 2px 16px;
`


