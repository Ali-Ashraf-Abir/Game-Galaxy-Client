import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)


    if(loading){
       return <div>loading...</div>
    }
    if(user){
        return children
    }

    else{
        return <Navigate to='/login' replace={true}></Navigate>
    }



    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;