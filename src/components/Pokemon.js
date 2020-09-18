import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Details from './PokemonDetails';
import {Link} from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components';


export default function Pokemon(props) {
    const url = props.pokemon.url;
    const [image, setImage] = useState(String); 
    
    useEffect(()=>{
        axios(url)
        .then(res=>setImage(res.data.sprites.front_default))

    },[]);
    

    const {name} = props.pokemon;
    //const {url} = this.props.pokemon;
    const urlNoProtocol = url.replace(/^https?\:\/\//i, "");
    const imageUrl =image;
    return (
        <StyledDivCard class="card">
            <img src={imageUrl}></img>
            <StyledDivContainer class="pokemonContainer">
                <Link to={{pathname: urlNoProtocol, state:{urlString: url}}}>{name}</Link> 
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

