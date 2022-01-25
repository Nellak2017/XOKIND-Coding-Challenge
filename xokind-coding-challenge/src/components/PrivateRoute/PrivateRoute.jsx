import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth";

// A route that is only accessible when properly authenticated
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext); // Gain access to Context variables with currentUser
    return ( 
        <Route 
            {...rest}
            render={routeProps => 
                !!currentUser ? ( 
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={"/login"} />
                )
            }
        />
     );
}
 
export default PrivateRoute;

