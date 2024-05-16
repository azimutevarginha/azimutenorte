import * as S from './style'
import { Document } from 'react-pdf'

interface Compet_estrutura {
    nome: string
    data: Date
    descricao: string
    linkBoletim: string
    arqBoletim: File
    linkInscricao: string
    update: string
}

export function Compet_estruct({ nome, data, descricao, linkBoletim, arqBoletim, linkInscricao, update }: Compet_estrutura) {

    const date = data.toString()

    return (
        <S.Comp>
            <div id="template">
                <div id="competicoes">
                    <div id='Compet'>
                        <h1>{nome}</h1>
                        <h2>Data: {" "} {date}</h2>
                    </div>
                    <main>
                        <p>{descricao}</p>
                    </main>
                    <div>
                        <h3> Acesse o boletim para mais informações! </h3>
                        <Document file={arqBoletim} />
                        <a href={linkBoletim} />
                        <h3> Increva-se clicando no link abaixo: </h3>
                        <a href={linkInscricao} />
                    </div>
                    <div>
                        <h4>{update}</h4>
                    </div>
                </div>
            </div>
        </S.Comp>
    )
}