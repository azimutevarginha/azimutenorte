import * as S from './styles'

interface Compet_estrutura{
    title: string
    main: string
    date: string
}

export function Compet_estruct ({title, main, date}:Compet_estrutura){
    return(
        <S.Comp>
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
        </S.Comp>
    )
}