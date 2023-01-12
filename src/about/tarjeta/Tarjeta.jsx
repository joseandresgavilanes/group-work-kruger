import React from 'react'
import "./Tarjeta.scss";

const Tarjeta = (props) => {

    const imgUrl = props.foto;
    return (

        <div className='container'>
            <div class="card-vinyl">
                <div className='card_image_container'>
                <div class="card-image" style={{ backgroundImage: `url(${imgUrl})` }}></div>
                </div>
                <div class="card-content">
                    <h2 class="card-title">{props.nombre}</h2>
                    <p class="card-artist">{props.puesto}</p>
                    <div className='iconos'>
                        <div className='iconos_redes'>
                            <a href={props.linkG} Target="_blank"><i class="fa-brands fa-github"></i></a>
                        </div>
                        <div className='iconos_redes'>
                            <a href={props.linkl} Target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                        <div className='iconos_redes'>
                            <a href={props.linki} Target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="vinyl-info">
                        <h1><span>Meet me</span></h1>
                    </div>
                </div>
                <div className='info'>
                    <p className='texto'>{props.detalle}</p>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta