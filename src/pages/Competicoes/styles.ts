import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Main = styled.main`
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-position: top right, bottom left;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    list-style-type: none;
`

export const Corpo = styled.body`
    height: 100rem;
    background-image: url('/competidora.png');
    background-repeat: no-repeat;
    background-position: left top;
`

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    div#Titulo{
        color: ${colors.blue};
        display: flex;
        flex-direction: column;
        margin: 1rem;
        padding: 0 4rem;
        @media (min-width: 1060px){
            transition-duration: 0ms;
        }
    }
    img {
        height: 25rem;
        padding: 1rem;
        @media (max-width: 1060px){
            padding: 3rem 1rem;
            margin-top: 2rem;
            height: 30rem;
        }
    }
    h1 {
        font-family: "Shrikhand";
        font-size: 4rem;
    }
    h2 {
        font-family: "Alatsi";
        font-size: 2rem;
    }
`