import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Layout = styled.main`
    min-height: calc(100vh - 11rem);
    background-color: ${colors.branco};
    background-image: url('/triangulos.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
`