import * as S from "./styles"
import Email from "../../img/email.png"
import Insta from "../../img/insta.png"

export function saiba_mais() {
  return (
    <S.SaibaM>
      <ul>
        <li id="titulo">
          <a href="#itens">SAIBA MAIS</a>
        </li>
        <li>
          <nav id="itens">
            <S.Quadros>
                <ul id="main">
                    <li>
                      <h2>Fale conosco!</h2>
                    </li>
                    <li id="Cont">
                      <ul id="C">
                        <li id="Gabi">
                          <ul>
                            <li id="nome">
                              <h3>Coordenadora Gabriela Arantes</h3>
                            </li>
                            <li id="email">
                              <h3>gabrielaarantes@cefetmg.br</h3>
                            </li>
                          </ul>
                        </li>
                        <li id="Wag">
                          <ul>
                            <li id="nome">
                              <h3>Colaborador Wagner Silva</h3>
                            </li>
                            <li id="email">
                              <h3>wagnersilva@cefetmg.br</h3>
                            </li>
                          </ul>
                        </li>
                        <li id="Az">
                          <ul>
                            <li id="img">
                            <img src={Email} alt="E-mail icon" />
                            </li>
                            <li id="email">
                              <h3>azimutenortevarginha@gmail.com</h3>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
            </S.Quadros>
            <S.Espaco/>
            <S.Quadros>
                <ul>
                    <li>
                      <h2>Nos acompanhe!</h2>
                    </li>
                    <li id="Cont">
                      <ul>
                        <li id="Texto">
                          <p>Clique <span><a href="">aqui</a></span> para<br/>receber nosso<br/>boletim mensal!</p>
                        </li>
                        <li id="Az">
                          <ul id="Insta">
                            <li id="img">
                            <img src={Insta} alt="Instagram icon" />
                            </li>
                            <li>
                              <h3>@programaazimute</h3>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
            </S.Quadros>
          </nav>
        </li>
      </ul>
    </S.SaibaM>
  )
}

