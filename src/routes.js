import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Action from './pages/Register';
import SignupPage from './pages/SignupPage/SignupPage'
import PersonRegister from './pages/Register/PersonRegistrer'
import StudentsPage from './pages/UnpaidEstimates/UnpaidEstimate'
import Success from './pages/Register/Success';
import NewStudentPage from './pages/NewStudentPage/NewStudentPage';
import ResponsiblePage from './pages/ResponsiblePage/ResponsiblePage';
import GoalPage from './pages/GoalPage/GoalPage';
import test from './pages/UnpaidEstimates/UnpaidEstimate';
import test2 from './pages/StudentEstimate/StudentEstimate';
import DependentsPage from './pages/StudentsPage/StudentsPage';

const hasToken = localStorage.getItem('token');

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {!hasToken ?([
                    <Route path="/login" exact component={Login} />,
                    <Route path="/signup" exact component={SignupPage} />
                ]):(null)}
                {hasToken ? ([
                    <Route path="/acao" exact component={Action} />,
                    <Route path="/cadastrar/estudante" exact component={NewStudentPage} />,
                    <Route path="/cadastrar/responsavel" exact component={PersonRegister}/> ,
                    <Route path="/cadastro/sucesso" exact component={Success} />,
                    <Route path="/estudantes" exact component={StudentsPage} />,
                    <Route path="/solicitar" exact component={ResponsiblePage} />,
                ]) : (null)}
                

                <Route exact component={Landing}/>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;











