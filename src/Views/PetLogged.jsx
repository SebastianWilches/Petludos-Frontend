import React from 'react'
import NavBarPetludosLogged from '../componentes/NavBarPetludosLogged'
import HeaderPet from '../componentes/Pet/HeaderPet'
import PetAdoption from '../componentes/Pet/PetAdoption'
import FooterPetludos from '../componentes/FooterPetludos'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

export default function PetLogged({setAccessibleText, accessibleText}) {
    const {state} = useLocation();
    const UserID = state;
    console.log("ACAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(UserID.id)

  return (
    <>
      <NavBarPetludosLogged UserID={UserID.id} setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>
      <HeaderPet></HeaderPet>
      <PetAdoption UserID={UserID.id}/>
      <FooterPetludos></FooterPetludos>
      
    </>
  )
}