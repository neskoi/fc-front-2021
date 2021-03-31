import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Pay from './pages/Pay';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/pay" exact component={Pay} />
        </BrowserRouter>
    );
}

export default Routes;