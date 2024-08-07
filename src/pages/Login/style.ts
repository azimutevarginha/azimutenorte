import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const LoginContainer = styled.div`
    label {
        padding-right: 10px;
        color: ${colors.blue};
        font-family: "Alatsi";
        font-size: 1.5rem;
    }
    input, textarea {
        border: solid ${colors.azul} 2px;
        width: 100%;
    }
    form {
        padding: 3rem;
        align-items: center;
        div {
            padding: 1rem;
        }
        p{
            align-items: center;
            justify-content: center;
            display: flex;
            button{
                align-items: center;
                justify-content: center;
            }
        }
    }
    button {
        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: ${colors.azul};
        color: ${colors.branco};
        font-family: "Alatsi";
        font-size: 1.5rem;
    }
    h1{
        text-align: center;
        color: ${colors.blue};
        font-family: "Shrikhand";
        font-size: 3rem;
        width: 100%;
        background-color: ${colors.laranjaC};
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`