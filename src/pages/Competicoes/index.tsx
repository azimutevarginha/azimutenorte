import * as S from './styles'
import Podio from '../../img/podio.png'
import { ICompet } from '../../interfaces/competicao.interface'
import { Competicao } from '../../components'
import { usePostsCompet } from "../../services/data/Posts"
import { ComponentHeader, ComponentFooter, ComponentSaibaMais } from "../../components"


export function Compets() {

    const posts: ICompet[] = usePostsCompet()

    return (
        <>
            <ComponentHeader />
            <S.Main>
                <S.Top data-aos="Anima">
                    <li>
                        <div id="Titulo" data-aos="Esquerda">
                            <h1>Competições</h1>
                            <h2>Acompanhe as competições de orientação que estão para acontecer!</h2>
                        </div>
                    </li>
                    <li>
                        <img src={Podio} alt="Pódio [Ilustração]" data-aos="Direita" />
                    </li>
                </S.Top>
            </S.Main>
            <S.Corpo>
                <main>
                    <ul>
                        {posts.map((post) => (
                            <Competicao key={post.index} nome={post.nome} data={post.data} linkBoletim={post.linkBoletim}
                            arqBoletim={post.arqBoletim} linkInscricao={post.linkInscricao}/>
                        ))}
                    </ul>
                </main>
            </S.Corpo>
            <ComponentSaibaMais />
            <ComponentFooter />
        </>
    )
}