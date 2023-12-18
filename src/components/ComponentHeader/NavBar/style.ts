import styled from "styled-components"

export const NavBar = styled.nav`

    overflow: hidden;

    section{
        gap: 40px;
        display: flex;
        align-items: center;
    }
    

    section .Nav{
        list-style-type: none;
        gap: 40px;
        display: flex;
        li{
            font-weight: bold;
            font-size: 1.5rem;
        }
    }

    .participe{
        display: flex;
        font-weight: bold;
        font-size: 1.5rem; 
        color: black;
        background-color: white;
        height: 2.8rem;
        width: 10rem;
        border-radius: 0.6rem;
        text-decoration: none;
        align-items: center;
        justify-content: center;
    }

    .menuHamburger{
        display: none;
    }

    > svg{
        position: absolute;
        top: 1rem;
        right: 1em;
        cursor: pointer;
    }

    

    @media (max-width: 850px) {
        .menuHamburger{
            display: initial;
        }
        .MenuNormal{
            display: none;
        }
    }
`