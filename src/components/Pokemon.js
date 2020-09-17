

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Details from './PokemonDetails';
import {Link} from 'react-router-dom'
import axios from 'axios';


export default function Pokemon(props) {
    const url = props.pokemon.url;
    const [image, setImage] = useState(String); 
    
    useEffect(()=>{
        axios(url)
        .then(res=>setImage(res.data.sprites.front_default))

    });
    
    const {name} = props.pokemon;
    //const {url} = this.props.pokemon;
    const urlNoProtocol = url.replace(/^https?\:\/\//i, "");
    const imageUrl =image;
    return (
        <div>
            <img src={imageUrl}></img>
            <Link to={{pathname: urlNoProtocol, state:{urlString: url}}}>{name}</Link> 
            
        </div>
    )
    
}

// state = {
//     url:this.props.pokemon.url,
//     image: String
// }
// componentDidMount = () => {
//     axios.get(this.props.pokemon.url)
//     .then(res=> this.setState({image:res.data.sprites.front_default}))  //can change
// }