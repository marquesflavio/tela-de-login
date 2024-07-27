import { useForm } from 'react-hook-form';
import './FormularioLoginStyle.css';
import { ErrorMessage } from '@hookform/error-message';

const FormularioLoginView = () => {
    const {
        register,
        formState: { errors },
        handleSubmit } = useForm();

    const onSubmit = (e) => {
        console.log(e)
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

                    <ErrorMessage errors={errors} name="email" className="errorMessage"/>
                  
                    <p>Senha</p>
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        className="input" 
                        {...register('password', { required: "Senha obrigatória" })}
                    />

                    <ErrorMessage errors={errors} name="password" className="errorMessage"/>
               
                </div>
                <div className="divButton">
                    <button type='submit'>Entrar</button>
                </div>
            </form>
        </div>
    )
};

export default FormularioLoginView;