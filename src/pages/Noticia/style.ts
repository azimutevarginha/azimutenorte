import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const Noticia = styled.article`
    width: 100%;
    height: 100%;
    
    #template{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }
    #noticias{
        width: 1265px;
        height: 100%;
        background-color: white;
        box-shadow: 1px 1px 5px 1px black;
    }
    header{
        h1{
            font-size: 3rem;
            color: ${colors.azul};
            text-indent: 50px;
        }
        h1::first-letter{
            text-transform: uppercase;
        }
        width: 100%;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 60px;
    }

    main{
        padding: 60px;
        font-size: 1.5rem;
        text-align: justify;
        p{
            text-indent: 50px;
            letter-spacing: 1px;
        }
    }

    h2{
        padding: 30px;
        text-align: end;
        color: ${colors.blue}
    }
`