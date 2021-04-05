import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Action from './pages/Register';
import SignupPage from './pages/SignupPage/SignupPage'
import PersonRegister from './pages/Register/PersonRegistrer'
import UnpaidEstimatesOfStudents from './pages/UnpaidEstimates/UnpaidEstimate'
import Success from './pages/Register/Success';
import NewStudentPage from './pages/NewStudentPage/NewStudentPage';
import ResponsiblePage from './pages/ResponsiblePage/ResponsiblePage';

const hasToken = localStorage.getItem('token');


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                    <Route path="/login" exact component={Login} />,
                    <Route path="/signup" exact component={SignupPage} />
                    <Route path="/acao" exact component={Action} />,
                    <Route path="/cadastrar/estudante" exact component={NewStudentPage} />,
                    <Route path="/cadastrar/responsavel" exact component={PersonRegister}/> ,
                    <Route path="/cadastro/sucesso" exact component={Success} />,
                    <Route path="/estudantes" exact component={UnpaidEstimatesOfStudents} />,
                    <Route path="/solicitar" exact component={ResponsiblePage} />,
                
                <Route exact component={Landing}/>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;