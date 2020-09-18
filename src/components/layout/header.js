import React from 'react'
import {Link} from 'react-router-dom';
import styled,{ThemeProvider} from 'styled-components'
 


function Header() {
    return (
        <ThemeProvider theme={theme}>
            <header style={headerStyle}> 
                <Title primary>Pokemon</Title>
                <Link style={linkStyle} to="/pokemons">Pokemons</Link> |
                <Link style={linkStyle} to="/types">Types</Link>
            </header>
        </ThemeProvider>
    )
}

const theme={
    primary:'orange',
    secondary: 'green',
    font:'sans-serif'
}

const Title = styled.h1`
    font-family: ${props => props.theme.font};
    font-size: 1.em;
    text-align:center;
    color:${(props) => (props.primary ?'palevioletred' : "pink")};

    &:hover{
        color:aqua
    }
`;






const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign:'center',
    padding: '10px'
}


const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}


export default Header;
