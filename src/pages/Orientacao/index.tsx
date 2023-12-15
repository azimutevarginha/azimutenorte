import * as S from './styles'
import Orientista from "../../img/orientista.png"
import Par from "../../img/parceiras.png"
import Dupla from "../../img/dupla.png"
import Pessoas from "../../img/turminha.png"


export function EspOri() {

    return (
        <>
            <S.Main>
                <ul id="main">
                    <S.Top>
                        <ul id="cont">
                            <li id="Texto">
                                <div data-aos="AnimaT">
                                    <ul id="Titulo">
                                        <li>
                                            <h1>Corrida de Orientação</h1>
                                        </li>
                                        <li>
                                            <h2>Você conhece esse esporte que o Programa Azimute Norte divulga? Venha conhecer!</h2>
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
                                    <img id="img" src={Orientista} alt="Orientista [Ilustração]" />
                                </div>
                            </li>
                        </ul>
                    </S.Top>

                    <S.Mid>
                        <ul id="cont">
                            <li id="Img">
                                <div>
                                    <S.Espacinho />
                                    <img id="img" src={Par} alt="Mulheres praticando orientação com bússolas e mapas [Ilustração]" />
                                </div>
                            </li>
                            <li id="Texto">
                                <div data-aos="AnimaT">
                                    <ul id="texto">
                                        <li>
                                            <h3>Como funciona?</h3>
                                        </li>
                                        <li>
                                            <p>A Corrida de Orientação é um esporte de navegação que combina corrida com habilidades de orientação. Os participantes, conhecidos como orientistas, recebem um mapa topográfico e uma bússola e devem navegar por uma série de pontos de controle em terrenos variados, como florestas, campos e montanhas. O objetivo é completar o percurso no menor tempo possível, tomando decisões estratégicas sobre a melhor rota a seguir.</p>
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
                                <div data-aos="AnimaT">
                                    <ul id="texto">
                                        <li>
                                            <h3>Como surgiu?</h3>
                                        </li>
                                        <li>
                                            <p>A corrida de orientação, um esporte originário da Suécia na década de 1960, disseminou-se globalmente ao longo dos anos. No Brasil, sua consolidação teve início na década de 1980, coincidindo com o surgimento da Confederação Brasileira de Orientação (CBO), que desempenhou um papel fundamental na promoção e organização do esporte no país. Com o tempo, a modalidade ganhou adeptos, viu a criação de clubes e a realização de competições regionais e nacionais, além de ser incorporada aos programas de educação física escolar.</p>
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
                                    <img id="img" src={Dupla} alt="Dupla fazendo exercícios" />
                                </div>
                            </li>
                        </ul>
                    </S.Und>

                    <S.Part>
                        <ul id="cont">
                            <li id="Img">
                                <div>
                                    <S.Espacinho />
                                    <img id="img" src={Pessoas} alt="Pessoas participando [Ilustração]" />
                                </div>
                            </li>
                            <li id="Texto">
                                <div data-aos="AnimaT">
                                    <ul id="Titulo">
                                        <li>
                                            <h1>Participe</h1>
                                        </li>
                                        <li>
                                            <h2>Gostou do esporte e gostaria praticá-lo? Há diferentes eventos e competições acontecendo. Conheça-os <a href='/Participe'>clicando aqui.</a></h2>
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