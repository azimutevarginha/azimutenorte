import styled, { css } from "styled-components"

interface MenuProps {
    isVisible: boolean;
  }

  export const Menu = styled.div<MenuProps>`
    display: none;
    position: absolute;
    width: 250px;
    height: 80%;
    top: 0;
    left: 100vw;
    bottom: 0;
    z-index: 5;
    background-color: #f9f9f9;
    transition: ease-in-out 0.2s;
    pointer-events: none;
    box-shadow: 1px 1px 1px 1px black;
    opacity: 0;

    img {
        position: absolute;
        top: 1rem;
        right: 1em;
        cursor: pointer;
    }

    ul{
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        margin-top: 40%;
        a{
            text-decoration: none;
            color: #090909;
        }
    }

    li{
        display: flex;
        align-items: center;
        padding-left: 15px;
        height: 3rem;
        width: 100%;
        cursor: pointer;
    }

    li:hover{
        background-color: #cccccc;
    }
    
    ${({isVisible}) => isVisible && css`
        display: flex;
        left: calc(100vw - 250px);
        opacity: 1;
        pointer-events: auto;
        transition: ease-in-out 0.2s;
    ` }
    
`