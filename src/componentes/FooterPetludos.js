import React from "react";
import FooterImage from '../IMGs/TestimonyFooter.png'
import Facebook from '../IMGs/Facebook.png'
import Github from '../IMGs/Github.png'
import Instagram from '../IMGs/Instagram.png'
import '../CSS/FooterPetludos.css'

function FooterPetludos () {
    return(
        <>
        <div className="FooterImageContainer">
            <img className="FooterImage" src={FooterImage} alt="perro de color naranja con beige viendo hacia el frente"/>
        </div>
        <div className="FooterBar">
            <h1><strong>PET</strong>LUDOS</h1>
            <div className="FooterIcons">
                <img className="GitFooter" src={Github} alt="logo github"/>
                <img className="InstagramFooter" src={Instagram} alt="logo instagram"/>
                <img className="FacebookFooter" src={Facebook} alt="logo facebook"/>
            </div>
        </div>
        <div className="FooterEnd">
            <p>2023</p>
        </div>
        </>
    );
}

export default FooterPetludos;