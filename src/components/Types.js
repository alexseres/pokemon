import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Types(props){
        const [types, setTypes] = useState([]);
        useEffect(()=>{
        axios('https://pokeapi.co/api/v2/type')
        .then(res=> setTypes(res.data.results))
        });
        return types.map((type) =>(
        <h1>{type.name}</h1>
        ));
}

export default Types
