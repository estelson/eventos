import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
    const dispatch = useDispatch();

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                {/* <span className="navbar-brand text-white font-weight-bold">Eventos</span> */}
                <i className="far fa-smile-wink text-white fa-2x"/>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-bars text-white"></i>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link ml-2" aria-current="page" to="/">Home</Link>
                        </li>

                        {
                            useSelector(state => state.usuarioLogado) > 0 ?
                                <>
                                    <li className="nav-item"><Link className="nav-link" to="/eventocadastro">Publicar Evento</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Meus Eventos</Link></li>
                                    <li className="nav-item"><a className="nav-link" onClick={() => dispatch({ type: 'LOG_OUT' })}>Sair</a></li>
                                </>
                                :
                                <>
                                    <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;