import React from "react";
import HomePage from "./homepage/homepage_container";
import {Route} from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () =>{
    
    return(
        <div> 
            <Route exact path="/" component={HomePage} />
        </div>
    )
};
    

export default App;
