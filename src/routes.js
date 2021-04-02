import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './pages/Register';
import PersonRegister from './pages/Register/PersonRegistrer'
import Success from './pages/Register/Success';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/cadastro" exact component={Register} />
            <Route path="/cadastro/pessoa" exact component={PersonRegister} />
            <Route path="/cadastro/sucesso" exact component={Success} />
            <Route path="/" exact component={Login} />
        </BrowserRouter>
    );
}











export default Routes;











