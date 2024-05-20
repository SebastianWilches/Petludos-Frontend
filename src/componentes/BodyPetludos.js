import React from "react";
import BodyImage from "../IMGs/BodyImage.jpg";
import "../CSS/BodyPetludos.css";

function BodyPetludos() {
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
      <div className="Main-Container">
        <div className="BodyImages">
          <img className="BodyImage" src={BodyImage} alt="Dos cachorros de color beige sacando la lengua, sentados sobre el pasto"/>
        </div>
        <div className="BodyText">
          <h1>
            <strong>PET</strong>LUDOS
          </h1>
          <p>
          ¡Bienvenido a nuestra página de adopción de mascotas! Aquí encontrarás a tu compañero peludo perfecto. Nuestro objetivo es unir a las mascotas necesitadas con familias amorosas, brindándoles un hogar lleno de amor y cuidado.
          ¡No pierdas la oportunidad de cambiar la vida de una mascota y llenar tu hogar de felicidad! ¡Comienza tu viaje de adopción hoy mismo!
          </p>
        </div>
      </div>
    </div>
  );
}

export default BodyPetludos;
