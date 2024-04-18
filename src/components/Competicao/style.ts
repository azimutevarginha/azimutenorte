import  Styled  from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const Compet = Styled.article`

    background-color: white;

    h1{
        font-family: 'Alatsi', sans-serif;
        color: ${colors.blue};
        font-size: 2rem
    }

    p{
        font-family: 'Alatsi', sans-serif;
        color: black;
        font-size: 1.5rem;
        padding-top: 30px;
    }
    
    padding: 30px;

    width: calc(100vw - 65vw);
    height: calc(100vh - 55vh);
    border: solid 1px ${colors.azul};
    display: flex;
    flex-direction: column;

    div{
        margin: 0 auto auto 0;
        
    }

    .ler_mais{
        margin: auto 0 0 auto;
        font-weight: bold;
        font-size: 1.5rem;
        color : white;
        background-color: ${colors.blue};
        height: 2.8rem;
        width: 100%;
        border-radius: 0.6rem;
    }
    .ler_mais:hover{
            cursor: pointer;
        }

    @media (max-width: 844px){
        width: calc(100vw - 30vw);
        h1{
            font-size: 1.3rem;
        }
        p{
            font-size: 1rem;
        }
    }
`