import React from 'react';

import '../styles/pages/Login.css';

function Home() {
    return (
        <>
        <div className="page-container">
            <div className="avatar" />

            <div className="form">
                <input 
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                />
                
                <input 
                    type="text"
                    name="password"
                    placeholder="Digite sua senha"
                />

                <button>LOGIN</button>
            </div>

            <a href="/">CADASTRAR-SE</a>
            <a href="/">ESQUECI A SENHA</a>

            <div className="options">
                <div className="option-login" />
                <div className="option-login" />
            </div>          
        </div>
        </>
    );
}

export default Home;