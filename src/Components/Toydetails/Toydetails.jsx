import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../UseTitle/UseTitle';

const Toydetails = () => {
  window.scroll(0,0)
    useTitle('Toy Details')
    const toydetail=useLoaderData()
    console.log(toydetail)

    const {name,category,price,quantity,rating,description,email,img,_id}=toydetail[0]
    console.log(toydetail)
    return (
        <div className="hero min-h-screen bg-base-200 mt-[20px] font-nunito">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img?img:'https://th.bing.com/th/id/OIP.TjxXk5jCgSz4nRtimYiITgHaHa?pid=ImgDet&rs=1'} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className='text-xl mt-[10px]'>price:<span className='text-yellow-500  '>${price}</span></p>
      <p className='text-xl'>rating:<span className='text-warning text-xl'>{rating}/10</span></p>
      <p className="py-6">{description}</p>
      <button className="btn btn-primary ">Shop Now</button>
    </div>
  </div>
</div>
    );
};

export default Toydetails;