import React, {useState} from 'react';
import './usuario-recuperar-senha.css';
import firebase from '../../config/firebase';
import 'firebase/compat/auth';
import Navbar from '../../components/navbar';

function UsuarioRecuperarSenha() {
    const[email, setEmail] = useState();
    const[msg, setMsg] = useState();

    function recuperarSenha() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg("Enviamos um link no seu email para você redefinir sua senha");
        }).catch(erro => {
            setMsg("Verifique se o email está correto");
        });
    }

    return(
        <>
            <Navbar/>

            <form className="text-center form-login mx-auto mt-5">
                <h3 className="mb-3 font-weight-bold">Recuperar senha</h3>

                <input type="email" className="form-control my-2" placeholder="Email" onChange={e => setEmail(e.target.value)}/>

                <div className="msg my-4 text-center">
                    <span>{msg}</span>
                </div>

                <button type="button" className="btn btn-lg btn-block form-control btn-enviar" onClick={recuperarSenha}>Recuperar senha</button>
            </form>
        </>
    )
}

export default UsuarioRecuperarSenha;