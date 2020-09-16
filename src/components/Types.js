import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Types extends Component {

    
    
    render() {

        return this.props.types.map((type) =>(
        <h1>{type.name}</h1>
        ));
            
        
    }
}

Types.propTypes = {
    types: PropTypes.array.isRequired
}

export default Types
