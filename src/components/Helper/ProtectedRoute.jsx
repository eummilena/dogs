import React, { useContext } from 'react'
import UserContext from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { login } = useContext(UserContext);

    if (login) {
        return children;
    } else if (!login) {
        return <Navigate to="/login" />;
    } else {
        return <></>;
    }

    //return login ? children : <Navigate to="/login" />
}

export default ProtectedRoute