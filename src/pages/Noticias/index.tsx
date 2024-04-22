import * as s from "./style"
import jornal from "../../img/jornal.png"
import { Noticia } from "../../components"
import { usePostsArticle } from "../../services/data/Posts"
import { INoticia } from "../../interfaces/noticia.interface"


export function Noticias(){

    const posts: INoticia[] = usePostsArticle()

    
    /*const current*/

    return(
        <s.Noticias>
            <div id="template">
                <div id="noticias">
                    <header>
                        <div>
                            <h1>Notícias</h1>
                            <p>Fique por dentro das ultimas <br/> notícias do programa!</p>
                        </div>
                        <img src={jornal} alt="" />
                    </header>
                    <main>
                        <ul>
                            {posts.map((post) => (
                                <Noticia key={post.index} title={post.title} lead={post.lead}/>
                            ))}
                        </ul>
                    </main>
                </div>
            </div>
        </s.Noticias>
    )
}