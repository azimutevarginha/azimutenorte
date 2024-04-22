import * as s from "./style"
import { Document } from "react-pdf"

export interface ICompeticao { // Informações que toda competição cadastrada deve apresentar
    nome: string
    data: Date
    linkBoletim: string
    arqBoletim: File
    linkInscricao: string
}



export function Competicao({ nome, data, linkBoletim, arqBoletim, linkInscricao }: ICompeticao) {

    const link = nome.replace(" ", '_').replace(',', '').replace('.', '')
    const date = data.toString()

    return (
        <s.Compet>
            <div>
                <header>
                    <h1>{nome}</h1>
                    <h2>Data: {" "} {date}</h2>
                </header>
                <h3> Acesse o boletim para mais informações! </h3>
                <Document file={arqBoletim} />
                <a href={linkBoletim} />
                <h3> Increva-se clicando no link abaixo: </h3>
                <a href={linkInscricao} />
            </div>
            <a href={link}><button className="ler_mais">Ler mais</button></a>
        </s.Compet>
    )
}