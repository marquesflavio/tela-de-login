import { useForm } from 'react-hook-form';
import './FormularioLoginStyle.css';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';

const FormularioLoginView = () => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        validarFormulario(data);
    };

    function validarFormulario(data) {
        if (data.email === 'a@a.com' && data.password === '123') {
            navigate('/loginSucesso');
        } else {
            console.log('Login falhou!');
        }
    }

    return (
        <div>
            <h1>Formulario de Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="divInput">
                    <p>Login</p>
                    <input
                        type="text"
                        placeholder="Email"
                        className="input"
                        {...register('email', { required: "Email obrigatório" })}
                    />

                    <ErrorMessage errors={errors} name="email" />

                    <p>Senha</p>
                    <input
                        type="password"
                        placeholder="Senha"
                        className="input"
                        {...register('password', { required: "Senha obrigatória" })}
                    />

                    <ErrorMessage errors={errors} name="password" />

                </div>
                <div className="divButton">
                    <button type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    );
};

export default FormularioLoginView;
