import React from 'react'
import '../../../index.css'
import placeholderArt from './arteOnda2.png'

function Torneio() {
    return (
        <a href='./participar' className='Torneio' style={{backgroundImage: `url(${placeholderArt})`}}>
            <h1 className='NameGamePrediletos'>League of Legends</h1>
            <h1 className='TorneioH1'>Gaia Cup</h1>
        </a>
        )
}

export default Torneio