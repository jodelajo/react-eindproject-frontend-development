import React from 'react';
import './SignUpLogInLink.css';
import {Link} from "react-router-dom";

function SignUpLogInLink() {
    return <div className="auth">
        <Link to="/sign-up" className="auth-link-active">Sign Up
        </Link>
        <Link to="/log-in" className="auth-link">Log In
        </Link>
    </div>
}

export default SignUpLogInLink