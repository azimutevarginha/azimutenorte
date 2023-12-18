import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
    once: false, 
    mirror: true
});

export const SaibaM = styled.nav`
    overflow: hidden;

    [data-aos="AnimaD"] {
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
        
        @media(max-width: 840px){
            transition-duration: 1000ms;
        }
    }

    [data-aos="AnimaE"] {
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
        
        @media(max-width: 840px){
            transition-duration: 1000ms;
        }
    }

    display: flex;
    flex-direction: row;
    background-image: linear-gradient(${colors.laranjaC}, ${colors.laranjaE});
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    height: 100%;
    width: 100vw;
    ul {
        list-style-type: none;
        width: 100%;
        li#titulo {
            padding: 0rem;
            border-bottom-style: solid;
            border-bottom-color: ${colors.azul};
            border-bottom-width: 0.3rem;
            align-items: center;
            height: 3.5rem;
            width: 100%;
            a {
                text-decoration: none;
                color: ${colors.azul};
                font-family: "Passion One";
                font-size: 4rem;
                width: 100%;
                padding-left: 2rem;
                padding-bottom: 0rem;
            }
        }
        li nav#itens{
            background-image: url("/Orientista.png");
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            display: flex;
            width: 100%;
            height: 100%;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 4rem;
            @media(max-width: 1200px){
                flex-direction: column;
            }
        }
    }
`
export const Quadros = styled.nav`
    padding: 1rem;
    ul {
        list-style-type: none;
        li#Cont {
            padding: 3.5rem;
            border: 0.3rem solid ${colors.branco};
            border-radius: 1rem;
            @media(max-width: 750px){
                padding: 2rem;
            }
            @media(max-width: 680px){
                padding: 1rem;
            }
            @media(max-width: 520px){
                padding: 0;
            }

            ul#C {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                li#Az {
                    padding: 1rem;
                    ul {
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        li#email h3{
                            padding: 1rem;
                            font-size: 2rem;
                        }
                    }
                }
            }
            li#Texto p {
                font-family: "Passion One";
                font-size: 2.5rem;
                color: ${colors.branco};
                padding: 1rem;
                text-align: center;
                span {
                    padding: 1rem;
                    padding-top: 2rem;
                    background: url("/raios.png");
                    background-size: 5rem;
                    background-repeat: no-repeat;
                    background-position: top;
                    a {
                        font-family: "Passion One";
                        font-size: 2.5rem;
                        text-decoration: none;
                        color: ${colors.branco};
                        background-color: ${colors.blue};
                        border-radius: 1rem;
                        padding: 0.2rem 0.4rem;
                    }
                }
            }
        }
        h2 {
            font-family: "Passion One";
            font-size: 2.5rem;
            color: ${colors.branco};
            padding: 1rem;
        }
        li#nome h3{
            color: ${colors.azul};
            font-family: "Passion One";
            font-size: 2rem;
        }
        li#email h3{
            color: ${colors.branco};
            font-family: "Passion One";
            font-size: 1.5rem;
        }
        ul#Insta {
            list-style-type: none;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            h3 {
                color: ${colors.branco};
                font-family: "Passion One";
                font-size: 2rem;
                padding: 1rem;
            }
        }

    }
`

export const Espaco = styled.nav`
    padding: 7rem;

    @media(max-width: 1400px) {
        padding: 5rem;
    }

    @media(max-width: 1350px) {
        padding: 3rem;
    }

    @media(max-width: 1300px) {
        padding: 1rem;
    }

    @media(max-width: 1250px) {
        padding: 0rem;
        display: none;
    }
  
`