import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.div`
    padding: 4rem 0;
    color: ${colors.azul};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1 {
        font-family: "Shrikhand";
        font-size: 4rem;
    }
    h2 {
        font-family: "Alatsi";
        font-size: 2rem;
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
    div#Titulo {
        color: ${colors.blue};
        display: flex;
        flex-direction: column;
        margin: 1rem;
        padding: 0 4rem;
        @media (min-width: 1060px){
            transition-duration: 0ms;
        }
    }
`

export const Main = styled.body`
    div#Botoes {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    padding: 1rem;
    [data-aos="Anima"] {
        @media (min-width: 1060px){
            opacity: 0;
            filter: blur(5px);
            transform: translateY(100%);
            transition: all;

            &.aos-animate {
                opacity: 1;
                filter: blur(0);
                transform: translateY(0);
                transition-duration: 2000ms;
            }
        }
    }

    [data-aos="Esquerda"] {
        @media(max-width: 1200px){
            opacity: 0;
            filter: blur(5px);
            transform: translateX(-100%);
            transition: all;

            &.aos-animate {
                opacity: 1;
                filter: blur(0);
                transform: translateX(0);
                transition-duration: 2000ms;
            }
        }
    }

    [data-aos="Direita"] {
        @media(max-width: 1200px){
            opacity: 0;
            filter: blur(5px);
            transform: translateX(100%);
            transition: all;

            &.aos-animate {
                opacity: 1;
                filter: blur(0);
                transform: translateX(0);
                transition-duration: 2000ms;
            }
        }
    }

`

export const Botao = styled.div`
    display: flex;
    flex-direction: column;
    border: solid ${colors.laranjaC} 0.5rem;
    border-radius: 1rem;
    padding: 2rem;
    a {
        text-decoration: none;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    h3 {
        text-decoration: none;
        color: ${colors.branco};
        font-family: "Shrikhand";
        font-size: 1.5rem;
        
    }
    img#Img {
        height: 15rem;
        padding: 1rem;
    }
    div#Nome {
        display: flex;
        flex-direction: row;
        background-color: ${colors.azul};
        border-radius: 1rem;
        align-items: center;
        justify-content: center;
    }
    img#Seta {
        height: 1rem;
        padding: 0 0.5rem;
    }
`