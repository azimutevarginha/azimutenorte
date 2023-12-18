import * as style from "./style.ts"
import azimutenorte from "../../img/azimute_logo.svg"
import {NavBar as NavBar} from "./NavBar/index.tsx"


export function Header(){


    return(
        <style.Header>
            <img src={azimutenorte} id="logo"/>
            <NavBar/>
        </style.Header>
    )
    
}
