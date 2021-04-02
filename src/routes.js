import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Register from './pages/Register';
import PersonRegister from './pages/Register/PersonRegistrer'
import Success from './pages/Register/Success';
import Login from './pages/Login';
import SignupPage from './pages/SignupPage/SignupPage'
import NewStudentPage from './pages/NewStudentPage/NewStudentPage';
import StudentsPage from './pages/StudentsPage/StudentsPage'
import GoalPage from './pages/GoalPage/GoalPage';
import ResponsiblePage from './pages/ResponsiblePage/ResponsiblePage';
import test from './pages/StudentEstimate/StudentEstimate';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login} />
            <Route path="/cadastro" exact component={Register} />
            <Route path="/cadastro/pessoa" exact component={PersonRegister} />
            <Route path="/cadastro/sucesso" exact component={Success} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/students" exact component={StudentsPage} />
            <Route path="/newstudent" exact component={NewStudentPage} />
            <Route path="/goal" exact component={GoalPage} />
            <Route path="/responsible" exact component={ResponsiblePage} />

        </BrowserRouter>
    );
}











export default Routes;











