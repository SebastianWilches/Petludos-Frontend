import React, { useState } from "react";
import NavBarPetludos from "../../componentes/NavBarPetludos";
import LoginImage from "../../IMGs/LoginImage.jpg"
import "./Login.css";
import Swal from "sweetalert2";
import { Routes, Route, useNavigate, Link } from "react-router-dom";

export default function Login({setAccessibleText, accessibleText}) {
  const navigate = useNavigate();
  const [user, setInput] = useState({
    identifier: "",
    password: "",
  });

  const handleLogin = (e) => {
    setInput({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendLogin = (e) => {
    e.preventDefault();
    sendLogin(user);
  };

  const navigateToRegister = (e) => {
    e.preventDefault()
    navigate("/register")
  }


  const sendLogin = async (user) => {
    try{
        const response = await fetch(`http://localhost:1337/api/auth/local`, {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        console.log("AKIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        console.log("DATA JWT:"+data.jwt)
        console.log(data)
        console.log(user)
        if(data.jwt !=undefined){
         Swal.fire({
            title: "¡Login exitoso!",
            icon: "success",
            button: "Aww yiss!",
         });
            navigate('/Logged', {state: {id: user.identifier}});
            // navigate('/Logged', {state: {id: data.user.id}});
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: '¡Credenciales incorrectas!',
            })
          
          }
    
      }catch (error){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      }

  return (
    <>
    <NavBarPetludos setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>
    <div className="containerGeneralLogin">
      <div className="ContainerFormLogin">
        <div className="ImageLogin">
        <img src={LoginImage} />
        </div>
        <div className="FormLoginDisplay">
      <h1 className="FormHeader">Inicia sesión en la familia <strong>PET</strong>ludos</h1>
      <form className="formLogin" onSubmit={handleSendLogin}>
      <h1 className="FormLabel">Correo electronico</h1>
        <input
          className="login-input"
          type="text"
          name="identifier"
          onChange={handleLogin}
        />
        <h1 className="FormLabel">Contraseña</h1>
        <input
          className="login-input"
          type="password"
          name="password"
          onChange={handleLogin}
        />
        <button className="login-boton">Ingresar</button>
        <Link className="RegisterText" onClick={(e) => navigateToRegister(e)}>¿No tienes cuenta aún?</Link>
      </form>
      </div>
      </div>
    </div>
    </>
  );
}
