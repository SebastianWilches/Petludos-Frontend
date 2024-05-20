import React from 'react'
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import './Catalogue.css'
import NavBarPetludosLogged from '../componentes/NavBarPetludosLogged';
import HeaderCatalogue from '../componentes/Catalogue/HeaderCatalogue'
import CardPetLogged from '../componentes/Catalogue/CardPetLogged';
import FooterPetludos from '../componentes/FooterPetludos'


export default function CatalogueLogged({setAccessibleText, accessibleText}) {
    const {state} = useLocation();
    const UserID = state;
    
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
            <NavBarPetludosLogged UserID={UserID.id} setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>
            <HeaderCatalogue></HeaderCatalogue>
            <article className='containerCardPet'>
            {!catalogoPets ? 'CARGANDO':
                catalogoPets.map((card, index) =>{
                    return <CardPetLogged info={card} key={index} UserID={UserID.id}/>
                })
            }
            </article>
            <FooterPetludos></FooterPetludos>
        </>
    )
}
