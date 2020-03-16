import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, withRouter } from "react-router-dom";


const Logout = () => {
    const dispatch = useDispatch();

    dispatch({
        type: 'CLEAR_USER'
    });
    
    return <Redirect to="/" push={true} />
}

export default withRouter(Logout);