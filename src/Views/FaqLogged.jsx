import React from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import NavBarPetludosLogged from '../componentes/NavBarPetludosLogged';
import HeaderFaq from '../componentes/FAQ/HeaderFaq'
import QuestionsFaq from '../componentes/FAQ/QuestionsFaq'
import FooterPetludos from '../componentes/FooterPetludos'

export default function FaqLogged({setAccessibleText, accessibleText}){
    const {state} = useLocation();
    const UserID = state;

  return (
    <>
      <NavBarPetludosLogged UserID={UserID.id} setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>
      <HeaderFaq></HeaderFaq>
      <QuestionsFaq></QuestionsFaq>
      <FooterPetludos></FooterPetludos>
      
    </>
  )
}