import React, { useState } from 'react';

import Layout from '../layout'
import Blogs from '../blog/Blogs';
import Authors from '../author/Authors';
import { useQuery } from '@apollo/client';


const HomePage = ({ allBlogs, check, slugItem, filterBlogs }) => {

    
    return (
        <div className='grid grid-cols-12 p-20'>

            <div className='xs:col-span-12 md:col-span-3'>
                <h3 className='xs:mx-0 xs:my-4 text-2xl font-semibold'>Authors</h3>
                <Authors
                    allBlogs={allBlogs}
                    filterBlogs={filterBlogs}

                />
            </div>

            <div className='xs:col-span-12 md:col-span-9'>
                <h3 className='xs:mx-0 xs:my-4 sm:my-2 sm:mx-3 font-semibold text-2xl ml-8 '>Blogs</h3>
                <Blogs
                    allBlogs={allBlogs}
                    check={check}
                    slugItem={slugItem}
                />
            </div>



        </div>
    );
};

export default HomePage;