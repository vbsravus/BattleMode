import React from 'react'
import './index.css'
import Noticias from '../Noticias'

function Home() {
    let dotVideo = 1
    let video1 = true
    let video2 = false
    let video3 = false
    const videoCarrossel = () => {
        console.log(dotVideo)
        dotVideo++
        console.log(dotVideo)
        if (dotVideo == 4) {
            dotVideo = 1
        }
        switch (dotVideo) {
            case 1:

                break
            case 2:
                break
            case 3:
                break
        }
    }


    return (
        <div className="divMainContainerHome">
            <div className="divCarrosselMainContainerHome">
                <div className="divVideoMainContainerHome">
                    <div className="divVideoShadowMainContainerHome" />
                    <div className="divLabelCarrosselMainContainerHome">
                        <h1 className="h1DivSecond">Título</h1>
                        <label>O texto informativo é um texto em que o escritor expõe brevemente um tema</label>
                    </div>
                    <video width="100%" autoPlay muted loop onEnded={() => videoCarrossel()}>
                        <source src={require("./assets/viideo.webm")} type="video/webm"/>
                    </video>
                </div>
                <div className="divDots">
                    <div>
                        <input checked={video1} type="radio" id="rad1" name="rads"/>
                        <label></label>
                        <input checked={video2} type="radio" id="rad2" name="rads" />
                        <label></label>
                        <input checked={video3} type="radio" id="rad3" name="rads" />
                        <label></label>
                    </div>
                </div>
            </div>
            <Noticias/>
            <div className='divSecondMainContainerHome'>
                <div className='divSubSecondContainerHome'>
                    <h1 className='h1DivSecond'>Título maneiro</h1>
                    <p>O texto informativo é um texto em que o escritor expõe brevemente um tema, fato ou circunstância ao leitor. 
                        Trata-se de uma produção textual objetiva, 
                        normalmente em prosa, com linguagem clara e direta. 
                        Tem como objetivo principal transmitir informação sobre algo, 
                        estando isento de duplas interpretações.</p>
                </div>

                <div className='divSubSecondDoisContainerHome'>
                    <img src={require("./assets/branco.png")}/>
                </div>
            </div>
        </div>
        )
}

export default Home