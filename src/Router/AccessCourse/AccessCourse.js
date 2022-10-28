import React from 'react';
import { useContext } from 'react';
import { AuthProvider } from '../../Contexts/ContextProvider';

const AccessCourse = () => {
    const {user} = useContext(AuthProvider);
    return (
        <div>
            <h4 className='text-center mt-3 bg-dark text-light p-5'>Welcome To Premium Course Mr.{user?.displayName}</h4>
        </div>
    );
};

export default AccessCourse;