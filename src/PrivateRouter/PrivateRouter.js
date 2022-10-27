import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Contexts/ContextProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRouter = ({children}) => {
    const { user, load } = useContext(AuthProvider);
    const location = useLocation();
    if(load){
        return  <Spinner className='mt-3' animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}}replace></Navigate>
    }
    return children;
};

export default PrivateRouter;