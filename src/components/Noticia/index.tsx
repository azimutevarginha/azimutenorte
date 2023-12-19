import * as s from "./style"

export interface INoticia {
    title: string
    lead: string
}



export function Noticia({title, lead}: INoticia){

    const link = title.replace(" ", '_').replace(',', '').replace('.', '')


    return(
        <s.Noticia>
            <div>  
                <h1>{title}</h1>
                <p>{lead}</p>
            </div>
            <a href={link}><button className="ler_mais">Ler mais</button></a>
        </s.Noticia>
    )
}