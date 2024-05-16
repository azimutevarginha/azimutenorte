import * as style from "./style"
import api from "../../services/api"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export function EscreveNoti(){

    const navigate = useNavigate()

    const[title, setTitle] = useState<string>('')
    const[lead, setLead] = useState<string>('')
    const[main, setMain] = useState<string>('')

    const createArticle = async (e: FormEvent) => {
        e.preventDefault();
        const data = {
            title, 
            lead, 
            main
        };
        console.log("Notícia enviada com sucesso!")

        await api.post("/escrever_article", data)
        navigate('/noticias')
    }

    

    return(
        <style.WriteContainer>
            <h3>Nova notícia:</h3>
            <form onSubmit={(e) => createArticle(e)}>
                <div>
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="lead">Lead:</label>
                    <input type="text" name="lead" id="lead" onChange={(e) => setLead(e.target.value)}/>
                </div>
                <div>
                    <div><label htmlFor="main">Noticia:</label></div>
                    <textarea name="main" id="main" cols={100} rows={10} onChange={(e) => setMain(e.target.value)}/>
                </div>
                <p>
                    <button type="submit">Postar</button>
                </p>
            </form>        
        </style.WriteContainer>
    )
}