import { useForm } from 'react-hook-form';
import './FormularioLoginStyle.css';
import { ErrorMessage } from '@hookform/error-message';
import Button from '../../components/Button';
import Input from '../../components/Input';

// eslint-disable-next-line react/prop-types
const FormularioLoginView = ({ validarFormulario }) => {
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = (data) => {
        validarFormulario(data);
    };

    return (
        <div className='container'>
            <div className='divForm'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="divInput">
                        <p>Login</p>
                        <Input 
                            type="text"
                            placeholder="Email"
                            className="input"
                            {...register('email', { required: "Email obrigatório" })}
                        />
                        <ErrorMessage errors={errors} name="email" />
                        <p>Senha</p>
                        <Input
                            type="password"
                            placeholder="Senha"
                            className="input"
                            {...register('password', { required: "Senha obrigatória" })}
                        />
                        <ErrorMessage errors={errors} name="password" />
                    </div>
                    <div className="divButton">
                        <Button>Entrar</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormularioLoginView;
