import * as S from './styles'
import Az from "../../img/Logo_Azimute 2.svg"
import Nadia from "../../img/nadia.png"
import Dupla from "../../img/dupla.png"
import Pessoas from "../../img/turminha.png"


export function ProgAz() {

    return (
        <>
            <S.Main>
                <ul id="main">
                    <S.Top>
                        <ul id="cont">
                            <li id="Texto">
                                <div>
                                    <ul id="Titulo">
                                        <li>
                                            <h1>Programa Azimute Norte</h1>
                                        </li>
                                        <li>
                                            <h2>Você conhece o programa de extensão do CEFET-MG? Venha conhecer!</h2>
                                        </li>
                                    </ul>
                                    <S.Espacinho />
                                </div>
                            </li>
                            <li>
                                <S.Espaco />
                            </li>
                            <li id="Img">
                                <div>
                                    <S.Espacinho />
                                    <img src={Az} alt="Logo" />
                                </div>
                            </li>
                        </ul>
                    </S.Top>

                    <S.Mid>
                        <ul id="cont">
                            <li id="Img">
                                <div>
                                    <S.Espacinho />
                                    <img src={Nadia} alt="Nádia [foto]" />
                                </div>
                            </li>
                            <li id="Texto">
                                <div>
                                    <ul id="texto">
                                        <li>
                                            <h3>Onde surgiu?</h3>
                                        </li>
                                        <li>
                                            <p>O programa surgiu em Divinópolis, em 2011, quando o esporte Orientação já era mais popular entre o campus e a comunidade externa. Foi encabeçado por Nádia Cristina da Silva Mello, professora doutora em Geografia do campus. Desde então o programa ampliou e popularizou-se, sendo transformado em Programa de Extensão em 2016, contando com o apoio de clubes de orientação, como o CODIV e o COVAR. Atualmente, participam os campus CEFET-MG de Divinópolis, Varginha e Araxá.</p>
                                        </li>
                                    </ul>
                                    <S.Espacinho />
                                </div>
                            </li>
                            <li>
                                <S.Espaco />
                            </li>
                        </ul>
                    </S.Mid>

                    <S.Und>
                        <ul id="cont">
                            <li id="Texto">
                                <div>
                                    <ul id="texto">
                                        <li>
                                            <h3>Como funciona?</h3>
                                        </li>
                                        <li>
                                            <p>O Programa de Extensão Azimute Norte desenvolve diversas atividades práticas e teóricas para apresentar e inserir os alunos e a comunidade externa no esporte Orientação, que beneficia o físico e o mental, ou seja, incentiva e aprimora a nossa capacidade cognitiva e a qualidade de vida. Também tem, dentre outros objetivos, propiciar eventos esportivos e científicos que aspirem ao exercício do esporte orientação e incentivar o desenvolvimento tecnológico para o desempenho de atividades relativas ao esporte e ao programa.</p>
                                        </li>
                                    </ul>
                                    <S.Espacinho />
                                </div>
                            </li>
                            <li>
                                <S.Espaco />
                            </li>
                            <li id="Img">
                                <div>
                                    <S.Espacinho />
                                    <img src={Dupla} alt="Dupla fazendo exercícios" />
                                </div>
                            </li>
                        </ul>
                    </S.Und>

                    <S.Part>
                        <ul id="cont">
                            <li id="Img">
                                <div>
                                    <S.Espacinho />
                                    <img src={Pessoas} alt="Pessoas participando [Ilustração]" />
                                </div>
                            </li>
                            <li id="Texto">
                                <div>
                                    <ul id="Titulo">
                                        <li>
                                            <h1>Participe</h1>
                                        </li>
                                        <li>
                                            <h2>Gostou das propostas do programa? Há muitas maneiras diferentes de participar. Venha conhecê-las <a href='/Participe'>clicando aqui.</a></h2>
                                        </li>
                                    </ul>
                                    <S.Espacinho />
                                </div>
                            </li>
                            <li>
                                <S.Espaco />
                            </li>
                        </ul>
                    </S.Part>

                </ul>
            </S.Main>
        </>
    )
}