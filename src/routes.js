import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Register from './pages/Register';
import PersonRegister from './pages/Register/PersonRegistrer'
import Success from './pages/Register/Success';
import Login from './pages/Login';
import SignupPage from './pages/SignupPage/SignupPage'
import NewStudentPage from './pages/NewStudentPage/NewStudentPage';
import StudentsPage from './pages/StudentsPage/StudentsPage'


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/cadastro" exact component={Register} />
            <Route path="/cadastro/pessoa" exact component={PersonRegister} />
            <Route path="/cadastro/sucesso" exact component={Success} />
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={SignupPage} />
            <Route path="/students" exact component={StudentsPage} />
            <Route path="/newstudent" exact component={NewStudentPage} />
        </BrowserRouter>
    );
}











export default Routes;











