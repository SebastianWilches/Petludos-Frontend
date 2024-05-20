import React from 'react'
import NavBarPetludos from '../componentes/NavBarPetludos'
import HeaderPet from '../componentes/Pet/HeaderPet'
import PetAdoption from '../componentes/Pet/PetAdoption'
import FooterPetludos from '../componentes/FooterPetludos'

export default function Pet({setAccessibleText, accessibleText}) {
  return (
    <>
      <NavBarPetludos setAccessibleText={setAccessibleText} accessibleText={accessibleText}></NavBarPetludos>
      <HeaderPet></HeaderPet>
      <PetAdoption UserID={"No logueado"}/>
      <FooterPetludos></FooterPetludos>
      
    </>
  )
}
