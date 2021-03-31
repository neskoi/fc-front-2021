import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/cadastro" component={Register} />
            <Route path="/" exact component={Login} />

        </BrowserRouter>
    );
}











export default Routes;











