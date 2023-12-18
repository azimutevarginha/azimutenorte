import { useState } from "react";
import {Gaveta as Gaveta} from "../Gaveta/index.tsx"
import { MenuHamburger } from "../MenuHamburger/index.tsx";
import * as style from "./style.ts"
import {FiMenu} from "react-icons/fi"


export const titulosSobre = ["Orientação", "Programa"];
export const linksSobre = ["/orientacao","/"];
import { useNavigate } from 'react-router-dom';

export function NavBar(){
    const navigate = useNavigate();
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const handleClick = () => {
        navigate('/participe');
    }

    return(
        <style.NavBar>
            <section className="MenuNormal">
                <ul className="Nav">
                    <Gaveta categoria="SOBRE" titulos={titulosSobre} links={linksSobre}/>
                </ul>
                <button className="participe" onClick = {handleClick} >PARTICIPE!</button>
            </section>
            <FiMenu size={45} onClick = {()=>setMenuIsVisible(true)} className="menuHamburger"/>
            <MenuHamburger menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
        </style.NavBar>
    )
}