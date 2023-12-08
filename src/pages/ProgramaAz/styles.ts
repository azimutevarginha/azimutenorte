import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Main = styled.nav`
    padding: 2rem;
    height: 100%;
    margin-top: 2rem;
    background-image: url("/triangulos.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    ul {
        list-style-type: none;
    }
    ul#main {
        display: flex;
        margin: 1rem;
        flex-direction: column;
        background-image: url("/Pista.png");
        background-position: right center;
        background-repeat: no-repeat;
        align-items: center;
        justify-content: center;
    }
    ul#texto {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: ${colors.azul};
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
        flex-direction: center;
    }
    ul#Titulo {
        display: flex;
        flex-direction: column;
        color: ${colors.blue};
        h1 {
            font-family: "Shrikhand";
            font-size: 4rem;
        }
        h2 {
            font-family: "Alatsi";
            font-size: 2rem;
        }
    }

`
export const Top = styled.li`
    padding-bottom: 3rem;
    ul{
        display: flex;
        flex-direction: row;
        li {
            padding: 0 2rem;
        }
        
        img {
            height: 20rem;
        }
    }
`

export const Mid = styled.li`
    padding-bottom: 3rem;
    ul{
        display: flex;
        flex-direction: row;
        img {
            height: 30rem;
        }
    }

`

export const Und = styled.li`
    padding-bottom: 3rem;
    ul{
        display: flex;
        flex-direction: row;
    }

`

export const Part = styled.li`
ul{
        display: flex;
        flex-direction: row;
}

`

export const Espaco = styled.div`
    padding: 0 10rem;
`

