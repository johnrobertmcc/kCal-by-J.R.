import React from "react";
import HomePage from "./homepage/homepage_container";
import {Route} from "react-router-dom";
import SignUp from "./session/session_container"
import LogIn from "./session/login_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import MainPageContainer from '../components/mainpage/mainpage_container';

const App = () =>{
    
    return(
        <div> 
            <AuthRoute exact path="/" component={HomePage} />
            <AuthRoute exact path="/signup" component={SignUp} />
            <AuthRoute exact path="/login" component={LogIn} />
            <ProtectedRoute path='/main' component={MainPageContainer}/>
        </div>
    )
};
    

export default App;
