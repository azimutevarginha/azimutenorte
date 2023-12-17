import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    once: false, 
    mirror: true
});

export const Main = styled.nav`
    padding: 1rem;
    height: 100%;
    padding-top: 2rem;
    background-color: ${colors.branco};
    background-image: url("/triangulos.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    @media(max-width: 1180px){
        background-image: url("/Triangulinhos.png");
    }
    ul {
        list-style-type: none;
    }
    ul#main {
        display: flex;
        margin: 1rem;
        flex-direction: column;
        background-image: url("/Pistinha.png");
        background-position: right center;
        background-repeat: no-repeat;
        align-items: center;
        justify-content: center;
        @media(max-width: 1180px){
            margin: 3rem;
            background-image: url("/Pista.png");
            background-position: center;
        }
        @media(max-width: 840px){
            background-image: none;
        }
    }
    ul#texto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: ${colors.azul};
        margin: 2rem;
        h3 {
            font-family: "Shrikhand";
            font-size: 2.5rem;
            padding-bottom: 1rem;
        }
        p {
            font-family: "Alatsi";
            font-size: 1.5rem;
        }
    }
    ul#cont {
        justify-content: center;
        align-items: center;
        display: flex;
        @media(max-width: 1180px){
            flex-direction: column;
        }
        li#Texto {
            @media(max-width: 1180px){
                order: 1;
            }
        }
        li#Img{
            @media(max-width: 1180px){
                order: 2;
            }
        }
        div {
            @media(max-width: 1180px){
                display: flex;
                flex-direction: row;
                padding: 2.5rem 0;
            }
        }
        
    }
    ul#Titulo {
        display: flex;
        flex-direction: column;
        color: ${colors.blue};
        margin: 2rem;
        padding: 0 4rem;
        h1 {
            font-family: "Shrikhand";
            font-size: 4rem;
        }
        h2 {
            font-family: "Alatsi";
            font-size: 2rem;
        }
    }

    [data-aos="Anima"] {
        @media(min-width: 1180px){
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

    [data-aos="AnimaI"] {
        @media(max-width: 1180px){
            opacity: 0;
            filter: blur(5px);
            transform: translateX(100%);
            transition: all;

            &.aos-animate {
                opacity: 1;
                filter: blur(0);
                transform: translateX(0);
                @media(min-width: 840px){
                    transition-duration: 2000ms;
                }
            }
        }
        @media(max-width: 840px){
            transition-duration: 1000ms;
        }
    }

    [data-aos="AnimaT"] {
        @media(max-width: 1180px){
            opacity: 0;
            filter: blur(5px);
            transform: translateX(-100%);
            transition: all;

            &.aos-animate {
                opacity: 1;
                filter: blur(0);
                transform: translateX(0);
                @media(min-width: 840px){
                    transition-duration: 2000ms;
                }
            }
        }
        @media(max-width: 840px){
            transition-duration: 1000ms;
        }
    }


`
export const Top = styled.li`
    padding: 3rem 0;
    @media(max-width: 1300px){
        padding: 2rem 0;
    }
    @media(max-width: 1250px){
        padding: 1rem 0;
    }
    ul{
        display: flex;
        flex-direction: row;
        img {
            height: 20rem;
            margin: 2rem;
        }
    }
`

export const Mid = styled.li`
    padding: 3rem 0;
    ul{
        display: flex;
        flex-direction: row;
        img {
            height: 30rem;
            padding: 2rem;
        }
    }

`

export const Und = styled.li`
    padding: 3rem 0;
    ul{
        display: flex;
        flex-direction: row;
    }
    img {
        height: 30rem;
        padding: 2rem;
    }

`

export const Part = styled.li`
    ul{
        display: flex;
        flex-direction: row;
    }
    img {
        width: 35rem;
        padding: 2rem 5rem;
    }
    a {
        text-decoration: none;
        color: ${colors.azul}
    }
    a:hover {
        text-decoration: underline;
    }

`

export const Espaco = styled.article`
    padding: 0 8rem;
    @media(max-width: 1300px){
        padding: 0 7rem;
    }
    @media(max-width: 1250px){
        padding: 0 6rem;
    }
    @media(max-width: 1200px){
        padding: 0 4rem;
    }
    @media(max-width: 1180px){
        display: none;
    }
`

export const Espacinho = styled.article`
    display: none;
    @media(max-width: 1180px){
        display: flex;
        padding: 0 10rem;
    }
    @media(max-width: 1010px){
        padding: 0 8rem;
    }
    @media(max-width: 910px){
        padding: 0 6rem;
    }
    @media(max-width: 840px){
        display: none;
    }
`
