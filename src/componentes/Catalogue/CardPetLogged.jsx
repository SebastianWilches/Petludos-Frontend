import React from 'react'
import { useNavigate } from "react-router-dom";

import './CardPet.css'

export default function CardPetLogged({ info: { attributes, id }, UserID}) {
  let urlPet = `http://localhost:1337${attributes.picture.data.attributes.url}`;
  const navigate = useNavigate();

  const handle_viewPet = (e) => {
    e.preventDefault();
    navigate(`/mascotaLogged/${id}`, {state: {id: UserID}});
  }


  return (
    <section className='CardPet'>
      <div className='CardImage'><img src={urlPet} alt={`CardImage${id}`} /></div>
      <div className='CardInfo'>
        <h4 className='CardTitle'>{attributes.name}</h4>
        {/* <button className='CardBtn'>Conóceme</button> */}
        
          <button className='CardBtn' onClick={handle_viewPet}>Conóceme</button>
        
      </div>


    </section>
  )
}