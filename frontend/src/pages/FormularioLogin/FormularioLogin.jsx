import { useNavigate } from "react-router-dom";
import FormularioLoginView from "./FormularioLoginView";
import axios from "axios";

const FormularioLogin = () => {

    const navigate = useNavigate();

    const validarFormulario = async (data) => {
        try {
            const response = await axios.post('/api/login', data)
            if (response.status === 200) {
                console.log('Login efetuado com sucesso!');
                navigate('/home');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.log('Login falhou:', error.response.data.message);
            } else {
                console.log('Erro:', error.message);
            }
        }
    }

    return (
        <div>
            <FormularioLoginView {...{ validarFormulario }} />
        </div>
    )
};

export default FormularioLogin;
