import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'



//chemin 
import Actualite from './components/actualite/actualite'
import Groupes from './components/groupes/groupe'
import Groupeslist from './components/groupes/groupesList'
import Profil from './components/profil/profil'
import Inscription from './components/log/inscription'
import Signin from './components/log/SignIn'
import Signup from './components/log/SignUp'
import Forgetpass from './components/log/forgetpass'
import Page  from'./components/groupes/page'

import axios from 'axios'

import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";


//route special authentification ou non 
import AuthRoute from './util/AuthRoute'

//css 
import "tailwindcss/tailwind.css";
import './App.css';

//pour que lutilisateur cooencté ne peut pas sz direger vers la page connexion/inscription 
import jwtDecode from "jwt-decode";




function App() {

  let authenticated;
  const token = localStorage.FBIdToken;
  const dispatch = useDispatch();
  
  if (token) {
  
    const decodedToken = jwtDecode(token);
    
  //deconnexion si le decode est expire 
    if (decodedToken.exp * 1000 < Date.now()) {
      
      authenticated=false;
      localStorage.removeItem('FBIdToken');
      delete axios.defaults.headers.common['Authorization'];
      window.location.href = '/'
     
  //autorisation du headers sinon avec passage du token 
    } else { 
     
       axios.defaults.headers.common['Authorization'] = token; 
       dispatch(getUser());
       authenticated=true 
  
      }
  
  
  }
  













  return (
   
    <div className='App'>
       
      <BrowserRouter>
        <Switch>
          <Route path='/groupes' component={Groupes} />
          <Route path='/home' exact component={Actualite} />
          <Route path='/profil' exact component={Profil} />
          <Route path='/signin' exact component={Signin} />

          <Route path='/signup' exact component={Signup} />
          <Route path='/page' exact component={Page} />
          <AuthRoute path='/' exact component={Inscription} authenticated={authenticated}  />
          
          <Route path='/forget' exact component={Forgetpass} />
          <Route path='/groupesList' component={Groupeslist} />
        </Switch>
      </BrowserRouter>

      
    </div>
    
  );
}

export default App;
