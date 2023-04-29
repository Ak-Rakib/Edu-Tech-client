import React from 'react';
import { useContext } from 'react';
import { AuthProvider } from '../../Contexts/ContextProvider';
import useTitle from '../../Hooks/useTitle';

const AccessCourse = () => {
    const {user} = useContext(AuthProvider);
    useTitle('Access Course');
    return (
        <div>
            <h4 className='text-center mt-3 bg-dark text-light p-5'>Welcome To Premium Course Mr.{user?.displayName}</h4>
        </div>
    );
};

export default AccessCourse;