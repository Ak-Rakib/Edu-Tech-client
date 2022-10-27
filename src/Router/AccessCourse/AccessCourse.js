import React from 'react';
import { useContext } from 'react';
import { AuthProvider } from '../../Contexts/ContextProvider';

const AccessCourse = () => {
    const {user} = useContext(AuthProvider);
    return (
        <div>
            <h1>Welcome {user?.displayName}</h1>
        </div>
    );
};

export default AccessCourse;