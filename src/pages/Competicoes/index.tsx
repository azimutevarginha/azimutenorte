import * as S from './styles'
import Podio from '../../img/podio.png'
import { ICompet } from '../../interfaces/competicao.interface'
import { usePosts } from "../../services/data/Posts"
import { Compet } from "../../components"
import { ComponentHeader, ComponentFooter, ComponentSaibaMais } from "../../components"


export function Compets() {

    const posts: ICompet[] = usePosts()

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
                <main>
                    <ul>
                        {posts.map((post) => (
                            <Compet key={post.index} title={post.title} lead={post.lead} />
                        ))}
                    </ul>
                </main>
            </S.Main>
            <ComponentSaibaMais />
            <ComponentFooter />
        </>
    )
}