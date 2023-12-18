import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    once: false, 
    mirror: true
});

export const Main = styled.nav`
    background-image: url("/arteT.png"), url("/arteB.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    background-position: top right, bottom left;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

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

export const Top = styled.ul`
    padding: 4rem 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    @media (max-width: 1060px){
        flex-direction: column;
    }
    align-items: center;
    justify-content: center;
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

export const Participe = styled.ul`
    list-style-type: none;
    padding: 4rem 0;
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;

    @media(max-width: 1200px){
        flex-direction: column;
    }

    h3 {
        font-family: "Shrikhand";
        font-size: 2.5rem;
        padding-bottom: 1rem;
        text-align: center;
        color: ${colors.blue};
    }
    p {
        font-family: "Alatsi";
        font-size: 1.5rem;
        text-align: center;
        color: ${colors.blue};
        @media(max-width: 1200px){
            margin: 0 5rem;
        }
    }
    img {
        width: 20rem;
        margin: 1rem;
    }
    div{
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    [data-aos="Part"] {
        @media(min-width: 1200px){
            opacity: 0;
            filter: blur(5px);
            transform: translateX(-100%);
            transition: all;

            &.aos-animate {
                opacity: 1;
                filter: blur(0);
                transform: translateX(0);
            }
        }
    }

    :nth-child(2){
        @media(min-width: 1200px){
            transition-delay: 350ms;
        }
    }
    :nth-child(3){
        @media(min-width: 1200px){
            transition-delay: 700ms;
        }
    }

`

export const Patrocinio = styled.li`
    margin: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

`

export const Voluntario = styled.li`
    margin: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`

export const Corrida = styled.li`
    margin: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`