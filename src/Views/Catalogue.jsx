import React from 'react'
import { useState, useEffect } from 'react';

import './Catalogue.css'
import NavBarPetludos from '../componentes/NavBarPetludos'
import HeaderCatalogue from '../componentes/Catalogue/HeaderCatalogue'
import CardPet from '../componentes/Catalogue/CardPet'
import FooterPetludos from '../componentes/FooterPetludos'


export default function Catalogue({setAccessibleText, accessibleText}) {
    
    const [catalogoPets, setCatalogoPets] = useState([]);
    const [metaPets, setMetaPets] = useState([]);

    useEffect(() => {
      GET_Pets();
    }, [])
    

    const GET_Pets = async() => {
        const response = await fetch('http://localhost:1337/api/pets/?populate[picture][populate]=*');
        const data = await response.json();
        
        // console.log(data);

        setCatalogoPets(data.data);
        setMetaPets(data.meta)
    }


    return (
        <>
            <NavBarPetludos setAccessibleText={setAccessibleText} accessibleText={accessibleText}></NavBarPetludos>
            <HeaderCatalogue></HeaderCatalogue>
            <article className='containerCardPet'>
            {!catalogoPets ? 'CARGANDO':
                catalogoPets.map((card, index) =>{
                    return <CardPet info={card} key={index}></CardPet>
                })
            }
            </article>
            <FooterPetludos></FooterPetludos>
        </>
    )
}
