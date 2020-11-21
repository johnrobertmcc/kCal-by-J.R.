import React from "react";
import HomePage from "./homepage/homepage_container";
import {Route} from "react-router-dom";
import SignUp from "./session/session_container"
import LogIn from "./session/login_container"
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () =>{
    
    return(
        <div> 
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
        </div>
    )
};
    

export default App;
