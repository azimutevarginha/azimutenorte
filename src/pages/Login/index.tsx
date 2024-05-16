import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as style from "./style";
import { useAuth } from "../../hooks/authHook";
import { IErrorResponse, IUser } from "../../interfaces/user.interface";
import { AxiosError } from "axios";

export function Login(){
    const navigate = useNavigate();
    const { signIn } = useAuth()
    const [formData, setFormData] = useState<IUser>({
        email: '',
        password: '',
    })
    async function handleChange(e: IUser) {
        setFormData((state: IUser | undefined) => ({ ...state, ...e }))
    }
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
        const { email, password } = formData
        await signIn({
            email: String(email),
            password: String(password),
        })
        navigate('/administrador')
        } catch (error) {
        const err = error as AxiosError<IErrorResponse>
        toast.error(String(err.response?.data))
        }
    }

    return(
        <style.LoginContainer>
            <h1>Login Admnistrativo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="E-mail"
                        onChange={(e) => handleChange({ email: e.target.value })}
                        value={formData?.email}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="senha" id="senha" placeholder="Senha"
                        onChange={(e) => handleChange({ password: e.target.value })}
                        value={formData?.password}
                    />
                </div>
                <p>
                    <button type="submit">Entrar</button>
                </p>
            </form>        
        </style.LoginContainer>
    )
}