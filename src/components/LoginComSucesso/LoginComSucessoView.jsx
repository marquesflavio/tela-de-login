import { useNavigate } from "react-router-dom"
import './LoginComSucessoStyle.css'

const LoginComSucessoView = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login efetuado com sucesso!</h1>
            <button
                onClick={() => navigate('/')}
            >Voltar
            </button>
        </div>
    )
}
export default LoginComSucessoView