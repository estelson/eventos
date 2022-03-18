import React, {useState} from 'react';
import './home.css';
import Navbar from '../../components/navbar';
import {useSelector} from 'react-redux';
//import firebase from '../../config/firebase';
//import 'firebase/compat/auth';
//import {Link} from 'react-router-dom';

function Home() {
    return(
        <>
            <Navbar/>

            <h1>{useSelector(state => state.usuarioEmail)}</h1>
            <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
        </>
    )
}

export default Home;