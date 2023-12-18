
import styled from "styled-components"
import {colors} from "../../../styles/GlobalStyle"

export const Gaveta = styled.menu`
    z-index: 999;

    img{
        height: 1rem;
    }

    .categoria{
        font-weight: bold;
        font-size: 1.5rem;
        color: white;
        background-color: ${colors.blue};
        cursor: pointer;
    }

    .arrow-menu{
        height: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: bold;
        font-size: 1.5rem;
        gap: 10px;
        cursor: pointer;
    }

    .hidden {
        display: none;
    }

    .visible {
        display: inherit;
    }

    .arrow-menu.clicked img{
        transform: rotate(90deg);
        transition: ease-out 0.1s;
    }

    .arrow-menu.unclicked img{
        transform: rotate(0deg);
        transition: ease-out 0.1s;
    }

    .menu{
        background-color: #191919;
        position: absolute;
        top: 5rem;
        border-radius: 6px;

        ul{
            list-style-type: none;
            width: 250px;
            flex-direction: column;
        }

        ul a li{
            padding: 15px;
            border-radius: 6px;
        }

        ul a li:hover{
            background-color: #232323;
            cursor: pointer;
        }

        ul a{
            text-decoration: none;
            color: white;
            font-weight: normal;
        }
    }

`