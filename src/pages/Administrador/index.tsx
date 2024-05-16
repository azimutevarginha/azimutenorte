import * as S from './styles'
import Admins from '../../img/admins.png'
import Seta from "../../img/seta.png"
import Jornal from '../../img/noticia.png'
import Podio from '../../img/competicao.png'
import { ComponentHeader, ComponentFooter } from "../../components"

export function Admin() {
    return (
        <>
            <ComponentHeader />
            <S.Main>
            <S.Header data-aos="Anima">
                <div id="Titulo" data-aos="Esquerda">
                    <h1>Seja bem vindo à Página do Administrador!</h1>
                    <h2>Você pode alterar o site para o usuário comum. Escolha entre as opções abaixo para começar!</h2>
                </div>
                <div>
                    <img src={Admins} alt='Administradores completando lista de tarefas [Ilustração]' />
                </div>
            </S.Header>
            <div id="Botoes">
                <S.Botao>
                    <a href='/escrever_article'>
                        <div id='Nome'>
                            <h3>Cadastrar noticia</h3>
                            <img src={Seta} alt='Seta' id="Seta"/>
                        </div>
                        <img src={Jornal} alt='Jornal [Ilustração]' id="Img"/>
                    </a>
                </S.Botao>
                <S.Botao>
                    <a href='/escrever_competicao'>
                        <div id='Nome'>
                            <h3>Cadastrar competição</h3>
                            <img src={Seta} alt='Seta' id="Seta"/>
                        </div>
                        <img src={Podio} alt='Podio [Ilustração]' id="Img"/>
                    </a>
                </S.Botao>
                </div>
            </S.Main>
            <ComponentFooter/>
        </>
    )
}