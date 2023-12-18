import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
 
export const Header = styled.header`
    width: 100%;
    height: 5rem;
    background-color: ${colors.blue};
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px 0px 20px;

    img{
        height: 3rem;
    }

    @media (max-width: 700px) {
        img{
            height: 2.5rem;
        }
    }

    @media (max-width: 600px) {
        img{
            height: 2rem;
        }
    }

    @media (max-width: 450px) {
        img{
            height: 1.5rem;
        }
    }
`