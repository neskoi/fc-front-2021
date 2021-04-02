import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';


import Login from './pages/Login';
import SignupPage from './pages/SignupPage/SignupPage'
import NewStudentPage from './pages/NewStudentPage/NewStudentPage';
import StudentsPage from './pages/StudentsPage/StudentsPage'
import Modal from './components/ConfirmationMessage/ConfirmationMessage';
import GoalPage from './pages/GoalPage/GoalPage';
import ResponsiblePage from './pages/ResponsiblePage/ResponsiblePage';

function Routes() {
    return (
        <BrowserRouter>

            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/students" exact component={StudentsPage} />
            <Route path="/newstudent" exact component={NewStudentPage} />
            <Route path="/goal" exact component={GoalPage} />
            <Route path="/responsible" exact component={ResponsiblePage} />

        </BrowserRouter>
    );
}

export default Routes;