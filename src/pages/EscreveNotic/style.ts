import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle"

export const WriteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    h3 {
        font-family: "Shrikhand";
        font-size: 3rem;
        color: ${colors.azul};
        width: 100%;
        text-align: center;
        background-color: ${colors.laranjaC};
    }
    label {
        padding-right: 10px;
        color: ${colors.blue};
        font-family: "Alatsi";
        font-size: 1.5rem;
    }
    input, textarea {
        border: solid ${colors.azul} 2px;
    }
    form {
        padding: 3rem;
        align-items: center;
        div {
            padding: 0.5rem;
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
`;