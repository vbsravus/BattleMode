import React from 'react'
import './index.css'

function Login() {
    return (
        <div className="divLoginMainContainer">
            <div className="divLoginLeftContainer">
                <img src={require("./assets/logo.png")} />
                <h1>Sua escalada começa aqui</h1>
                <p>Escale sua equipe para jogar nos mais diversos torneios criados pela comunidade. </p>
            </div>
            <div className="divLoginRightContainer">
                <div className='divLoginRightSubContaner'>
                    <h1>Entrar</h1>
                    <p className='p'>Entre com sua conta ja cadastrada</p>

                    <input placeholder='Usuário'></input>
                    <input placeholder='Senha'></input>
                    <button>Entrar</button>

                    <a><p>Esqueceu sua senha?</p></a>
                    <a><p>Não possui conta?</p></a>
                </div>
            </div>
        </div>
        )
}

export default Login