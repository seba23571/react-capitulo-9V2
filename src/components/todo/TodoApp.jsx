import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodoComponent from './TodoComponent.jsx'
import Supraweb from './Supraweb.jsx'
import TodoComponentCongreso from './TodoComponentCongreso.jsx'
import Tablajson from './Tablajson'

//import List from '../List.js'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                            <AuthenticatedRoute path="/tablabuscador" component={Tablajson}/>


                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/> {/* Formik */}                                   
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                      
                            <AuthenticatedRoute path="/TodoComponentCongreso/:id" component={TodoComponentCongreso}/> {/* Formik */}       

                            <AuthenticatedRoute path="/supraweb" component={Supraweb}/>

                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

export default TodoApp