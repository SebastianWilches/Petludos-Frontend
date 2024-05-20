import React from 'react'
import NavBarPetludos from '../componentes/NavBarPetludos'
import HeaderFaq from '../componentes/FAQ/HeaderFaq'
import QuestionsFaq from '../componentes/FAQ/QuestionsFaq'
import FooterPetludos from '../componentes/FooterPetludos'

export default function Faq({setAccessibleText, accessibleText}) {
  return (
    <>
      <NavBarPetludos setAccessibleText={setAccessibleText} accessibleText={accessibleText}></NavBarPetludos>
      <HeaderFaq></HeaderFaq>
      <QuestionsFaq></QuestionsFaq>
      <FooterPetludos></FooterPetludos>
      
    </>
  )
}
