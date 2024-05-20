import React from 'react'

import './HeaderCatalogue.css'

import HeaderCatalogueImg from '../../IMGs/HeaderCatalogueImg.jpg'

export default function HeaderCatalogue() {
    return (
        <div className="custom-shape-divider-bottom-1679872176">
            <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                ></path>
            </svg>
            <div className="Main-Container2">
                <div>
                    <img src={HeaderCatalogueImg} alt="Perro de color blanco y beige, durmiendo sobre una cobija" />
                </div>
                <section className='headerText'>
                    <h3>Proceso de adopción</h3>
                    <p>¡Te invitamos a considerar la adopción de una mascota y brindarle un hogar amoroso! Adoptar una mascota no solo te permite tener un compañero leal, sino que también le das una segunda oportunidad a un animal que necesita cariño y cuidado.</p>
                </section>
            </div>
        </div>
    )
}
