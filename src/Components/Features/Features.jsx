import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGrinAlt } from 'react-icons/fa';
const Features = () => {
    const {toys}=useContext(AuthContext)

    return (
        <div className="mt-[50px]">
            <div className="text-center text-5xl">
                <h1>Our Features</h1>
            </div>
        <div className='flex justify-center lg:flex-row flex-col items-center mt-[50px] gap-5'>
            <div className="bg-base-200 text-center font-nunito rounded-lg w-[100%] p-10">
                <p className='text-3xl'>We Got Over</p>
                <p className='text-xl'>{toys.length}+ Products </p>
            </div>
            <div className="bg-base-200 text-center font-nunito rounded-lg w-[100%] p-10">
                <p className='text-3xl'>Over</p>
                <p className='text-xl'>4 Different Categories</p>
            </div>
            <div className="bg-base-200 text-center font-nunito rounded-lg w-[100%] p-10">
                <p className='text-center'></p>
                <p className='text-3xl'>Serverd Over</p>
                <p className='text-xl'>1000+ Customers</p>
            </div>
            <div className="bg-base-200 text-center font-nunito rounded-lg w-[100%] p-10">
                <p className='text-center'></p>
                <p className='text-3xl'>Available In</p>
                <p className='text-xl'>10+ Countries</p>
            </div>
            
        </div>
        </div>
    );
};

export default Features;