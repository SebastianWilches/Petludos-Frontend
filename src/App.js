import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


// Views
import Landing from './Views/Landing';
import Faq from './Views/Faq';
import Catalogue from './Views/Catalogue';
import Pet from './Views/Pet';
import Login from './Views/Login/Login'
import Register from './Views/Register/Register'
import LandingLogged from './Views/LandingLogged';
import CatalogueLogged from './Views/CatalogueLogged';
import FaqLogged from './Views/FaqLogged';
import PetLogged from './Views/PetLogged';

function App() {

  const [accessibleText, setAccessibleText] = useState('normal');  //normal || accessibility

  return (
    <div id="home" className={'content-'+accessibleText}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>} />
          <Route path='/faq' element={<Faq setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>} />
          <Route path='/catalogo' element={<Catalogue setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>}/>
          <Route path='/mascota/:id' element={<Pet setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/login' element={<Login setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>}/>
          <Route path='/register' element={<Register setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>}/>
          {/*Vistas Logueado*/}
          <Route path='/Logged' element={<LandingLogged setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>}/>
          <Route path='/catalogoLogged' element={<CatalogueLogged setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>}/>
          <Route path='/faqLogged' element={<FaqLogged setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>} />
          <Route path='/mascotaLogged/:id' element={<PetLogged setAccessibleText={setAccessibleText} accessibleText={accessibleText}/>} />
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
