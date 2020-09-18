import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import styled,{ThemeProvider} from 'styled-components'
import ThemeToggler from "./ThemeToggler";
import ThemeContext from 'C:/Users/Alex/OneDrive/Desktop/React/pokemon/src/components/ThemeContext';
import AppTheme from 'C:/Users/Alex/OneDrive/Desktop/React/pokemon/src/components/Colors';
 



function Header() {
    const importedTheme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[importedTheme];
    const headerStyle = {
        background: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign:'center',
        padding: '10px',
        display:"flex",
        justifyContent:'space-between',
        alignItems: "center"
    }
    const linkStyle = {
        color: `${currentTheme.textColor}`,
        textDecoration: 'none'
    }

    return (
        <ThemeProvider theme={theme}>
            <header style={headerStyle}> 
                <Title primary>Pokemon</Title>
                <Link style={linkStyle} to="/pokemons">Pokemons</Link>|
                <Link style={linkStyle} to="/types"> Types</Link>|
                <Link style={linkStyle} to="/catched-pokemons"> CatchedPokemons</Link>
                <ThemeToggler/>
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


export default Header;
