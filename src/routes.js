import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import NewStudentPage from './pages/NewStudentPage/NewStudentPage';
import StudentsPage from './pages/StudentsPage/StudentsPage'


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/students" exact component={StudentsPage} />
            <Route path="/newstudent" exact component={NewStudentPage} />
        </BrowserRouter>
    );
}

export default Routes;