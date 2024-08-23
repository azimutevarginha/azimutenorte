import * as S from "./style"
import api from "../../services/api"
import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

export function EscreveCompet() {

    const navigate = useNavigate()

    const [nome, setNome] = useState<string>('')
    const [descricao, setDescricao] = useState<string>('')
    const [date, setData] = useState<object>()
    const [link, setLink] = useState<string>('')
    const [arq, setArq] = useState<File>()

    const createCompet = async (events: FormEvent) => {
        events.preventDefault();

        const data = {
            nome,
            descricao,
            date,
            link,
            arq
        };
        console.log("Competição cadastrada com sucesso!")

        await api.post("/escrever_competicao", data)
        navigate('/competicoes')
    }

    function textoParaData(texto: string) { // Aqui será passado a data em formato de string para ser convertida para o tipo Dte
        let datinha = texto.match(/^(\d{2})\/(\d{2})\/(\d{4})$/); // Verifica se a data está no formato dd/MM/aaaa
        if (!datinha)
            throw new Error('Deve estar no formato dd/mm/aaaa');
        let [dia, mes, ano] = datinha.slice(1, 4).map(v => parseInt(v));
        let data = new Date(ano, mes - 1, dia);
        if (data.getDate() !== dia || data.getMonth() + 1 !== mes || data.getFullYear() !== ano)
            throw new Error('Valores inválidos');
        return data;
    }



    return (
        <S.EscreveComp>
            <h3>Nova competição:</h3>
            <form onSubmit={(events) => createCompet(events)}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name="nome" id="title" onChange={(events) => setNome(events.target.value)} />
                </div>
                <div>
                    <label htmlFor="date">Data da competição:</label>
                    <input type="date" name="date" onChange={(events) => setData(textoParaData(events.target.value))} />
                </div>
                <div>
                    <div><label htmlFor="descricao">Descrição:</label></div>
                    <textarea name="main" id="main" cols={100} rows={10} onChange={(events) => setDescricao(events.target.value)} />
                </div>
                <div>
                    <label htmlFor="arq">Link do Boletim online:</label>
                    <input type="file" name="arq" required onChange={(events) => setArq(events.target.files![0])} />
                </div>
                <div>
                    <label htmlFor="link">Link do Boletim online:</label>
                    <input type="text" name="link" onChange={(events) => setLink(events.target.value)} />
                </div>

                <button type="submit">Cadastrar</button>

            </form>
        </S.EscreveComp>
    )
}