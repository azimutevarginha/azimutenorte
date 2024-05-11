import * as style from "./style"
import jornal from "../../img/jornal.png"

interface Noticia{
    title: string
    main: string
    date: string
}

export function Noticia({title, main, date}: Noticia){

    return(
        <style.Noticia>
            <div id="template">
                <div id="noticias">
                    <header>
                        <div>
                            <h1>{title}</h1>
                        </div>
                        <img src={jornal} alt="" />
                    </header>
                    <main>
                        <p>{main}</p>
                    </main>
                    <h2>{date}</h2>
                </div>
            </div>
        </style.Noticia>
    )
}

