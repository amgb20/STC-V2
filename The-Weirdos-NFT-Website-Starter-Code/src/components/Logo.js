import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PushButton from './push_button.png';

console.log(PushButton);

const LogoText = styled.h1`
font-family: 'Akaya Telivigala', cursive;
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1); // when we hover it stands out
}
@media (max-width: 64em){
    font-size: ${props => props.theme.fontxxl};

}

`

const Logo = () => {
    return(
        <LogoText>
            <Link to="/">
             <img src={PushButton} alt="PushButton" width="100" height="100"/>
            </Link>
        </LogoText>
    )
}

export default Logo