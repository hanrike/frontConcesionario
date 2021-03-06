import React, { useState, useEffect } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import PrivateRoute from 'components/PrivateRoute';
import Index from 'pages/Index';
import Admin from 'pages/admin/Index';
import Vehiculos from 'pages/admin/Vehiculos';
import Login from 'pages/auth/Login';
import Ventas from 'pages/admin/Ventas';
import Usuarios from 'pages/admin/Usuarios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import Registro from 'pages/auth/Registro';
import AuthLayout from 'layouts/AuthLayout';
import { DarkModeContext } from 'context/darkMode';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from 'context/userContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userData,setUserData]=useState({});
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);

  return (
    <Auth0Provider
    domain="misiontic2-concesionario.us.auth0.com"
    clientId="GjpsfzaqhS7hEGNmmCHTM6i2T0nZuhow"
    redirectUri='https://agile-wildwood-52544.herokuapp.com/admin'
    //redirectUri='http://localhost:3000/admin'
    audience='api-autenticacion-concesionario-mintic'
    >
     <div className='App'>
       <UserContext.Provider value={{userData,setUserData}}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <Router>
          <Switch>
            <Route path={['/admin', '/admin/vehiculos', '/admin/ventas','/admin/usuarios']}>
              <PrivateLayout>
                <Switch>
                  <Route path='/admin/vehiculos'>
                    <PrivateRoute roleList={['admin']}>
                    <Vehiculos />
                    </PrivateRoute>
                  </Route>
                  <Route path='/admin/ventas'>
                    <PrivateRoute roleList={['admin','vendedor']}>
                    <Ventas/>
                    </PrivateRoute>
                  </Route>
                  <Route path='/admin/usuarios'>
                  <PrivateRoute roleList={['admin']}>
                    <Usuarios/>
                  </PrivateRoute>
                  </Route>
                  <Route path='/admin'>
                    <Admin />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
            <Route path={['/login', '/registro']}>
              <AuthLayout>
                <Switch>
                  <Route path='/login'>
                    <Login />
                  </Route>
                  <Route path='/registro'>
                    <Registro />
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>
            <Route path={['/']}>
              <PublicLayout>
                <Route path='/'>
                  <Index />
                </Route>
              </PublicLayout>
            </Route>
          </Switch>
        </Router>
      </DarkModeContext.Provider>
      </UserContext.Provider>
    </div>
    </Auth0Provider>
  );
}

export default App;
