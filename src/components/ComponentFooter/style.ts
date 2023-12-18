import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const Footer = styled.footer`
    width: 100%;
    height: 6rem;
    background-color: ${colors.blue};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px 0px 20px;
    #logo_azimute{
        height: 5rem;
    }
    #cefet{
        height: 5.5rem;
    }
    div{
        display: flex;
        align-items: center;
    }

`