import React from 'react';
import './App.css';


import { Routes, Route } from 'react-router-dom';

// import pages
import HomePage from './Pages/HomePage';
import UserPage from './Pages/UserPage';
import AdminPage from './Pages/AdminPage';
import RegistrationForm from './Pages/RegistrationForm';
import AdminLandingPage from './Pages/AdminLandingPage';
import AdminGenerateForm from './Components/AdminGenerateForm'
import AdminRegistrationPage from './Components/AdminRegistrationPage';
import ListsOfDrivers from './Pages/ListsOfDriversPage';
import AdminForm from './Pages/AdminForm';


const App = () => {
  return (
    <>
    <main className= 'app'>
      <Routes>
        <Route path = '/' element = {<HomePage />} /> 
        <Route path = '/user-page' element = {<UserPage />} /> 
        <Route path = '/admin-page' element = {<AdminPage/>} /> 
        <Route path = '/admin-landing-page' element = {<AdminLandingPage />} /> 
        <Route path = '/admin-register-form' element = {<RegistrationForm />} /> 
        <Route path = '/registration-form' element = {<AdminRegistrationPage />} />
        <Route path = '/generate-qrcode' element = {<AdminGenerateForm />} />
        <Route path = '/lists-of-drivers' element = {<ListsOfDrivers/>}/>
        <Route path = '/admin-form-list' element = {<AdminForm/>}/>
      </Routes>

    </main>
   
    </>
  )
}

export default App;
