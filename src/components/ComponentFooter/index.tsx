import * as style from "./style"
import cefet_logo from "../../img/cefet-logo.svg"
import logo_azimute from "../../img/Logo_Azimute 2.svg"
import azimutenorte from "../../img/azimute_logo.svg"

export function Footer(){

    return(
        <style.Footer>
            <div>
                <img id="logo_azimute" src={logo_azimute} alt="" />
                <img id="azimute_norte"src={azimutenorte} alt="" />
            </div>
            <img id="cefet" src={cefet_logo} alt="" />
        </style.Footer>
    )
}