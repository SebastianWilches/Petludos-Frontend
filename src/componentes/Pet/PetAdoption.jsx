import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import './PetAdoption.css'

import CardTest from '../../IMGs/CardTest.jpg'

export default function PetAdoption({ UserID }) {
  const navigate = useNavigate();
  // console.log("ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  // console.log(UserID)
  const UserEmail = UserID;
  const { id } = useParams();
  const [infoPet, setInfoPet] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Personality, setPersonality] = useState([]);
  const [UsuarioID, setUsuarioID] = useState([]);

  const GET_InfoPet = async (idPet) => {
    const response = await fetch(`http://localhost:1337/api/pets/${idPet}?populate[picture][populate]=*&populate[personality][populate]=*`);
    const data = await response.json();


    setInfoPet(data.data);
    setLoading(true);
    setPersonality(data.data.attributes.personality.data.attributes);
  }

  const handle_AdoptionProcess = (e) => {
    e.preventDefault();
    GET_userByEmail(UserEmail);
    
  }

  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate("/login")
  }

  const POST_AdoptionProcess = async (UserID) => {
    const urlPost = 'http://localhost:1337/api/adoption-processes';
    const idPet = parseInt(id);

    const objectExample = {
      data: {
        message: "Estoy muy interesado en conocer cuales son las etapas del proceso de adoptacion de esta mascota",
        state: 1,
        pet: idPet,
        candidate: UserID
      }
    }
    console.log(objectExample);


    const response = await fetch(urlPost, {
      method: 'POST',
      body: JSON.stringify(objectExample),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);

    if(data){
      Swal.fire({
        title: "Solicitud presentada",
        icon: "success",
        button: "Aww yiss!",
     });
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error',
      })
    }
  }

  const GET_userByEmail = async (email) => {
    const response = await fetch(`http://localhost:1337/api/users?filters[email][$eq]=${email}`);
    const data = await response.json();

    console.log(data[0].id);
    setUsuarioID(data[0].id);
    POST_AdoptionProcess(data[0].id);
  }

  useEffect(() => {
    GET_InfoPet(id);
  }, [])



  return (
    <>
      {!Loading ? 'CARGANDO' : (
        <main className='containerPet'>
          <img src={`http://localhost:1337${infoPet.attributes.picture.data.attributes.url}`} alt={infoPet.attributes.alternative_text} className='ImagenTest' />
          <article>
            <h2>Dale un hogar a <span className='namePet'>{infoPet.attributes.name}</span></h2>
            <h4><i className='descPet'>{infoPet.attributes.breed}</i></h4>
            <p>{infoPet.attributes.description}</p>
            <section className="containerAtributos">
              {Personality.isPlayful ? <div className="personalityContainer isPlayful">🏀 Es juguetón</div> : <span></span>}
              {Personality.isQuiet ? <div className="personalityContainer isQuiet">🌌 Es calmado</div> : <span></span>}
              {Personality.isgoodWithKids ? <div className="personalityContainer isgoodWithKids">👧🏻 Es bueno con los niños</div> : <span></span>}
              {Personality.isLoving ? <div className="personalityContainer isLoving">❤ Es amoroso</div> : <span></span>}
              {Personality.isSociable ? <div className="personalityContainer isSociable">✋🏻 Es sociable</div> : <span></span>}
              {Personality.isSpoiled ? <div className="personalityContainer isSpoiled">🧸 Es consentido</div> : <span></span>}
              {/* <div className="personalityContainer isPlayful">Es juguetón</div> */}

            </section>
            <button className='petBtn' onClick={handle_AdoptionProcess}>Adóptame</button>
          </article>
        </main>)
      }

    </>
  )
}
