import { useState } from "react";
import {Gaveta as Gaveta} from "../Gaveta/index.tsx"
import { MenuHamburger } from "../MenuHamburger/index.tsx";
import * as style from "./style.ts"
import {FiMenu} from "react-icons/fi"


export const titulosSobre = ["Orientação", "Programa"];
export const linksSobre = ["/orientacao", "/programa"]

export const titulosArtigos = ["Notícias"];
export const linksArtigos = ["./noticias"]


export function NavBar(){

    const [menuIsVisible, setMenuIsVisible] = useState(false);

    return(
        <style.NavBar>
            <section className="MenuNormal">
                <ul className="Nav">
                    <Gaveta categoria="SOBRE" titulos={titulosSobre} links={linksSobre}/>
                    <Gaveta categoria="ARTIGOS" titulos={titulosArtigos} links={linksArtigos}/>
                </ul>
                <a href="/participe" className="participe">PARTICIPE!</a>
            </section>
            <FiMenu size={45} onClick = {()=>setMenuIsVisible(true)} className="menuHamburger"/>
            <MenuHamburger menuIsVisible={menuIsVisible} setMenuIsVisible={setMenuIsVisible}/>
        </style.NavBar>
    )
}