import './FormularioLoginStyle.css';

const FormularioLoginView = () => {

    return (
        <div>
            <h1>Formulario de Login</h1>

            <div className="divInput">
                <p>Login</p>
                <input type="text" placeholder="Email" className="input" />
                <p>Senha</p>
                <input type="password" placeholder="Senha" className="input" />
            </div>
            <div className="divButton">
                <button>Entrar</button>
            </div>
        </div>
    )
};

export default FormularioLoginView;