import React from 'react';

import { FaHome } from "react-icons/fa";

const Header = () => {

    return (
        <nav className='bg-blue-700 flex justify-between items-center py-2 px-20 text-white'>
            <h1 className='text-3xl'>weblog</h1>
            <FaHome 
            className='text-2xl'
            />
            
        </nav>
    );
};

export default Header;