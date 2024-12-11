import {FaUser, FaLock} from 'react-icons/fa';
import { useState } from 'react';
import "./Login.css";

const Login = () => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const user = document.getElementById('user');
    const pass = document.getElementById('pass');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Dados enviados com sucesso (interação teste)');
        user.value = "";
        pass.value = "";
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>ACESSE O SISTEMA</h1>
            <div>
                <FaUser className="icon"/>
                <input type="email" placeholder="E-mail" required onChange={(e) => setUsername(e.target.value)} id='user'/>
            </div>
            <div>
                <FaLock className="icon"/>
                <input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} id='pass'/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembre de mim
                </label>
                <a href="#">Esqueci minha senha</a>
            </div>
            <button>Entrar</button>
            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registre-se.</a></p>
            </div>
        </form>
    </div>
  );
};

export default Login;
