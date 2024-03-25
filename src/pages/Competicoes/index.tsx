import * as S from './styles'
import Podio from '../../img/podio.png'
import { ComponentHeader, ComponentFooter, ComponentSaibaMais} from "../../components"

export function Compets(){
    return(
        <>
        <ComponentHeader/>
        <S.Main>
             <S.Top data-aos="Anima">
                    <li>
                        <div id="Titulo" data-aos="Esquerda">
                            <h1>Competições</h1>
                            <h2>Acompanhe as competições de orientação que estão para acontecer!</h2>
                        </div>
                    </li>
                    <li>
                        <img src={Podio} alt="Pódio [Ilustração]" data-aos="Direita"/>
                    </li>
                </S.Top>
        </S.Main>
        <ComponentSaibaMais/>
        <ComponentFooter/>
        </>
    )
}