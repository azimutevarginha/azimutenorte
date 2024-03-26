import {Routes, Route} from "react-router-dom"
import * as pages from "../pages"
import ProtectedRoute from "./ProtectedRoute"
import { usePosts } from "../services/data/Posts"
import { INoticia } from "../interfaces/noticia.interface"

export function RouteSoftware(){

    const posts: INoticia[] = usePosts();
    
    const rotas = []

    
    for (let index = 0; index < posts.length; index++) {
        console.log(posts[index].updated_at)
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Date(posts[index].updated_at);
        console.log(formattedDate)
        const data = "Varginha, " +formattedDate.toLocaleDateString('pt-Br', options as Intl.DateTimeFormatOptions)
        rotas.push(<Route path={posts[index].title.replace(' ', '_').replace(',', '').replace('.', '')} element={<pages.PageNoticia title={posts[index].title} main={posts[index].main} date={data}/>}/>)
    }

    return(
        <Routes>
            <Route path="/" element={<pages.PageLayout/>}>
                <Route path="" element={<pages.ProgramaAz/>}/>
                <Route path="/programa" element={<pages.ProgramaAz/>}/>
                <Route path="/orientacao" element={<pages.EsporteOri/>}/>
                
                <Route path="noticias" element={<pages.PageNoticias/>}/>
                {rotas}
            </Route>
            <Route path="/competicoes" element={<pages.Competicoes/>}/>
            
            <Route path="/participe" element={<pages.Participe/>}/>
            <Route path="/login" element={<pages.PageLogin/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="/escrever" element={<pages.PageWrite/>}/>
            </Route>
        </Routes>
    )
}