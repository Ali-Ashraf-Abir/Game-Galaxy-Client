import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyTable from '../MyToyTable/MyToyTable';
import ToyTable from '../ToyTable/ToyTable';
import useTitle from '../UseTitle/UseTitle';

const MyToys = () => {

    useTitle('My Toys')
    const{user,deleted,setDeleted,updated,setUpdated}=useContext(AuthContext)
    const [mytoys,setMytoys]=useState()

    useEffect(()=>{

        fetch(`https://game-galaxy-server-ali-ashraf-abir.vercel.app/mytoys/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setMytoys(data)

        })
        setDeleted(false)
        setUpdated(false)



    },[deleted,updated])





    return (
        <div>
                  <div className='min-h-screen mt-[20px]'>
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {mytoys?.map(toy=><MyToyTable
        
        id={toy._id}
        toy={toy}
        
        ></MyToyTable>)}
     
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
          <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>category</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
        </div>
    );
};

export default MyToys;