import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SignupPage from './pages/SignupPage/SignupPage'
import Login from './pages/Login';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register';
import PersonRegister from './pages/Register/PersonRegistrer'
import StudentsPage from './pages/UnpaidEstimates/UnpaidEstimate'
import Success from './pages/Register/Success';
import NewStudentPage from './pages/NewStudentPage/NewStudentPage';
import ResponsiblePage from './pages/ResponsiblePage/ResponsiblePage';
import GoalPage from './pages/GoalPage/GoalPage';
import test from './pages/UnpaidEstimates/UnpaidEstimate';
import test2 from './pages/StudentEstimate/StudentEstimate';

function Routes() {
    return (

        <BrowserRouter>

            <Route path="/cadastro" exact component={Register} />
            <Route path="/cadastro/pessoa" exact component={PersonRegister} />
            <Route path="/cadastro/sucesso" exact component={Success} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/students" exact component={StudentsPage} />
            <Route path="/newstudent" exact component={NewStudentPage} />
            <Route path="/goal" exact component={GoalPage} />
            <Route path="/responsible" exact component={ResponsiblePage} />
            <Route path="/test" exact component={test} />
            <Route path="/test2" exact component={test2} />
            <Route path="/" exact component={Landing} />

        </BrowserRouter>
    );
}

export default Routes;











