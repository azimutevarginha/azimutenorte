import { Routes, Route } from "react-router-dom"
import * as pages from "../pages"
import ProtectedRoute from "./ProtectedRoute"
import { usePostsArticle, usePostsCompet } from "../services/data/Posts"
import { INoticia } from "../interfaces/noticia.interface"
import { ICompet } from "../interfaces/competicao.interface"

export function RouteSoftware() {

    const posts: INoticia[] = usePostsArticle();
    const compets: ICompet[] = usePostsCompet();

    const rotasNot = []
    const rotasCompet = []


    for (let index = 0; index < posts.length; index++) {
        console.log(posts[index].updated_at)
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Date(posts[index].updated_at);
        console.log(formattedDate)
        const data = "Varginha, " + formattedDate.toLocaleDateString('pt-Br', options as Intl.DateTimeFormatOptions)
        rotasNot.push(<Route path={posts[index].title.replace(' ', '_').replace(',', '').replace('.', '')} element={<pages.PageNoticia title={posts[index].title} main={posts[index].main} date={data} />} />)
    }


    for (let index = 0; index < compets.length; index++) {
        console.log(compets[index].updated_at)
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Date(compets[index].updated_at);
        const dataComp = new Date(compets[index].data);
        console.log(formattedDate)
        const data = "Varginha, " + formattedDate.toLocaleDateString('pt-Br', options as Intl.DateTimeFormatOptions)
        rotasCompet.push(<Route path={compets[index].nome.replace(' ', '_').replace(',', '').replace('.', '')} element={<pages.Competicao nome={compets[index].nome} data={dataComp} descricao={compets[index].descricao} linkBoletim={compets[index].linkBoletim} arqBoletim={compets[index].arqBoletim} linkInscricao={compets[index].linkInscricao} update={data} />} />)
    }

    return (
        <Routes>
            <Route path="/" element={<pages.PageLayout />}>
                <Route path="" element={<pages.ProgramaAz />} />
                <Route path="/programa" element={<pages.ProgramaAz />} />
                <Route path="/orientacao" element={<pages.EsporteOri />} />
                <Route path="competicoes" element={<pages.Competicoes />} />
                {rotasCompet}
                <Route path="noticias" element={<pages.PageNoticias />} />
                {rotasNot}
            </Route>
            <Route path="/competicoes" element={<pages.Competicoes />} />

            <Route path="/participe" element={<pages.Participe />} />
            <Route path="/login" element={<pages.PageLogin />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/escrever_article" element={<pages.PageEscreveArticle/>} />
                <Route path="/escrever_competicao" element={<pages.PageEscreveCompeticao/>} />
            </Route>
        </Routes>
    )
}