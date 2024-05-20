import React from "react";
import NavBarPetludosLogged from "../componentes/NavBarPetludosLogged";
import BodyPetludos from "../componentes/BodyPetludos";
import FooterPetludos from "../componentes/FooterPetludos";
import TestimonyPetludos from "../componentes/TestimonyPetludos";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function LandingLogged ({setAccessibleText, accessibleText}){
    const {state} = useLocation();
    const UserID = state;
    return(
        <>
        <NavBarPetludosLogged UserID={UserID.id} setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>
        <BodyPetludos />
        <TestimonyPetludos accessibleText={accessibleText}/>
        <FooterPetludos />
        </>
    );
}

export default LandingLogged;