import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Comp = styled.main`
    div#Compet {
        display: flex;
        flex-direction: column;
        margin: 1rem;
        padding: 0 4rem;
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