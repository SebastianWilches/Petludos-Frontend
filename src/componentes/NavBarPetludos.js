import React from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import '../CSS/NavBarPetludos.css';
import perro from '../IMGs/NavBar.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

function NavBarPetludos({setAccessibleText, accessibleText}) {
  
  const navigate = useNavigate();

  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/");
  }
  const navigateToAdoption = (e) => {
    e.preventDefault();
    navigate("/catalogo");
  }
  const navigateToFAQ = (e) => {
    e.preventDefault();
    navigate("/faq");
  }

  const navigateToLogin = (e) => {
    e.preventDefault();
    navigate("/login")
  }

  const handleAccessibility = () => {
    if(accessibleText=='normal'){
      setAccessibleText('accessibility')
    }else{
      setAccessibleText('normal')
    }

  }


  return (
    <Navbar expand="lg" id="principalNav" className={accessibleText}>
      <Navbar.Brand>
        <img
          src={perro}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo Petludos, perro de color naranja animado"
        />
      </Navbar.Brand>
      <Navbar.Brand className={"NavBar-Text-"+accessibleText} id="pageName"><strong className="Bold">PET</strong>LUDOS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav >
          <Nav.Link className={"NavBar-Text-"+accessibleText} onClick={(e)=>navigateToHome(e)}>Inicio</Nav.Link>
          <Nav.Link className={"NavBar-Text-"+accessibleText} onClick={(e)=>navigateToAdoption(e)}>Adopción</Nav.Link>
          <Nav.Link className={"NavBar-Text-"+accessibleText} onClick={(e)=>navigateToFAQ(e)}>Preguntas Frecuentes</Nav.Link>
          <Nav.Link className={"NavBar-Text-"+accessibleText} onClick={handleAccessibility}>Accesibilidad</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className={"NavBar-Text-"+accessibleText}>
          <FontAwesomeIcon className="NavBar-Icon" icon={faGear} style={{ color: "#ffffff", }}/>
          <FontAwesomeIcon className="NavBar-Icon" icon={faBell} style={{ color: "#ffffff" }} />
          <b className="handHover" onClick={(e)=>navigateToLogin(e)}>Ingresar</b>
        </Navbar.Text>
      </Navbar.Collapse>

    </Navbar>
  );
}

export default NavBarPetludos;