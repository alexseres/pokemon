import React, { Component } from 'react'
import axios from 'axios';


class PokemonDetails extends Component {
    
    
    // constructor(url){
    //    this.state.url = url; 
    // }
    
    state = {
        pokemonDetails:[],
        image: String,
        weight: Number,
        height: Number
    }

    componentDidMount = () => {
        const url = this.props.location.state.urlString;
        axios.get(url)
        .then(res=> this.setState({
            pokemonDetails:res.data,
            image:res.data.sprites.front_default,
            weight: res.data.weight,
            height: res.data.height
        }))  //can change

    }
    
    render() {
        const pokemon = this.state.pokemonDetails;
        const imageUrl = this.state.image;
        const weight = this.state.weight;
        const height = this.state.height;

        return (
            <React.Fragment>
                <img src={imageUrl}/>
                <h1>Name : {pokemon.name}</h1>
                <p> its weight: {weight}</p>
                <p>its height : {height}</p>
            </React.Fragment>
        )
    }
}

export default PokemonDetails
