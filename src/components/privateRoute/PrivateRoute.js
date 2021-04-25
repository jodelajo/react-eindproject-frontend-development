import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useAuth} from "../../context/AuthContext";

function PrivateRoute({children, ...rest}) {
    const {currentUser} = useAuth()


    return (
        <Route
            {...rest}
            render={props => {
               return currentUser ? props.children
                    :
                    <Redirect to="/log-in" />
            }}
        >
        </Route>
    )
}

export default PrivateRoute