import * as S from './styles'
import Az from "../../img/Logo_Azimute 2.svg"
import Nadia from "../../img/nadia.png"
import Dupla from "../../img/dupla.png"
import Pessoas from "../../img/turminha.png"


export function Page() {

    return (
        <>
            <S.Main>
                <ul id="main">
                    <S.Top>
                        <ul id="cont">
                            <li>
                                <ul id="Titulo">
                                    <li>
                                        <h1>Programa<br />Azimute Norte</h1>
                                    </li>
                                    <li>
                                        <h2>Você conhece o programa de extensão<br />do CEFET-MG? Venha conhecer!</h2>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <S.Espaco />
                            </li>
                            <li>
                                <img src={Az} alt="Logo" />
                            </li>
                        </ul>
                    </S.Top>

                    <S.Mid>
                        <ul id="cont">
                            <li>
                                <img src={Nadia} alt="Nádia [foto]" />
                            </li>
                            <li>
                                <ul id="texto">
                                    <li>
                                        <h3>Onde surgiu?</h3>
                                    </li>
                                    <li>
                                        <p>O programa surgiu em Divinópolis, em 2011,<br />
                                            quando o esporte Orientação já era mais<br />
                                            popular entre o campus e a comunidade<br />
                                            externa. Foi encabeçado por Nádia Cristina da<br />
                                            Silva Mello, professora doutora em Geografia<br />
                                            do campus. Desde então o programa ampliou e<br />
                                            popularizou-se, sendo transformado em<br />
                                            Programa de Extensão em 2016, contando com<br />
                                            o apoio de clubes de orientação, como o CODIV<br />
                                            e o COVAR. Atualmente, participam os campus<br />
                                            CEFET-MG de Divinópolis, Varginha e Araxá.</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <S.Espaco />
                            </li>
                        </ul>
                    </S.Mid>

                    <S.Und>
                        <ul id="cont">
                            <li>
                                <ul id="texto">
                                    <li>
                                        <h3>Como funciona?</h3>
                                    </li>
                                    <li>
                                        <p>O Programa de Extensão Azimute Norte desenvolve<br />
                                            diversas atividades práticas e teóricas para<br />
                                            apresentar e inserir os alunos e a comunidade<br />
                                            externa no esporte Orientação, que beneficia o<br />
                                            físico e o mental, ou seja, incentiva e aprimora a<br />
                                            nossa capacidade cognitiva e a qualidade de vida.<br />
                                            Também tem, dentre outros objetivos, propiciar<br />
                                            eventos esportivos e científicos que aspirem ao<br />
                                            exercício do esporte orientação e incentivar o<br />
                                            desenvolvimento tecnológico para o desempenho de<br />
                                            atividades relativas ao esporte e ao programa.</p>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <S.Espaco />
                            </li>
                            <li>
                                <img src={Dupla} alt="Dupla fazendo exercícios" />
                            </li>
                        </ul>
                    </S.Und>

                    <S.Part>
                        <ul id="cont">
                            <li>
                                <img src={Pessoas} alt="Pessoas participando [Ilustração]" />
                            </li>
                            <li>
                                <ul id="Titulo">
                                    <li>
                                        <h1>Participe</h1>
                                    </li>
                                    <li>
                                        <h2>Gostou das propostas do programa?<br />
                                            Há muitas maneiras diferentes de<br />
                                            participar. Venha conhecê-las<br />
                                            <a href='/Participe'>clicando aqui.</a></h2>
                                    </li>
                                </ul>
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