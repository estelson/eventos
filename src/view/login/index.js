import React, {useState} from 'react';
import './login.css';
import firebase from '../../config/firebase';
import 'firebase/compat/auth';
//import {Link, Redirect} from 'react-router-dom';
import {Link, Navigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

function Login() {
    /**
     * Se você quer escrever um componente de função e perceber que precisa adicionar algum estado a ele.
     * Em resumo... guarda estados dos componentes que utilizam funções.
     * React Hooks
     */
    const[email, setEmail] = useState();
    const[senha, setSenha] = useState();
    const[msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo("sucesso")

            setTimeout(() => {
                dispatch({type: "LOG_IN", usuarioEmail: email});
            }, 2000)
        }).catch(erro =>{
            setMsgTipo("erro");
        });
    }

    return (
        <div className="login-content d-flex align-items-center">
            {useSelector(state => state.usuarioLogado) > 0 ? <Navigate to='/' /> : null}

            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    {/* <img className="mb-4" src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
                    <i className="far fa-smile-wink text-white fa-5x"/>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={e => setEmail(e.target.value)} type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={e => setSenha(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />

                <button onClick={logar} class="form-control btn btn-lg btn-primary btn-block btn-login" type="button">Logar</button>

                <div className="msg-login text-white text-center my-5">
                    {msgTipo === "sucesso" && <span><strong>WoW!</strong> Você está conectado! &#128526;</span>}
                    {msgTipo === "erro" && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos! &#128546;</span>}
                </div>

                <div className="opcoes-login mt-5 text-center">
                    <Link to="/usuariorecuperarsenha" className="mx-2">Recuperar senha</Link>
                    <span className="text-white">&#9733;</span>
                    <Link to="../novousuario" className="mx-2">Quero cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;