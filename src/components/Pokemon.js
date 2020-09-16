import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Details from './PokemonDetails';
import {Link} from 'react-router-dom'
import axios from 'axios';


class Pokemon extends Component {
    state = {
        url:this.props.pokemon.url,
        image: String
    }

    componentDidMount = () => {
        axios.get(this.props.pokemon.url)
        .then(res=> this.setState({image:res.data.sprites.front_default}))  //can change
    }

    render() {
        const {name} = this.props.pokemon;
        const {url} = this.props.pokemon;
        const urlNoProtocol = url.replace(/^https?\:\/\//i, "");
        const imageUrl =this.state.image;
        return (
            <div>
                <img src={imageUrl}></img>
                <Link to={{pathname: urlNoProtocol, state:{urlString: url}}}>{name}</Link> 
                
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon:PropTypes.object.isRequired,
    
}

export default Pokemon
