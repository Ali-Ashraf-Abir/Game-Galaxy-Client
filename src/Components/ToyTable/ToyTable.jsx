import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ToyTable = ({toy}) => {

    const navigate=useNavigate()
    const {name,category,price,quantity,rating,description,email,img,_id,username}=toy
    
    const {toydetail,setToyDetail,user}=useContext(AuthContext)

 
  const showLogin=()=>{
    if(!user){
    swal({
      title: "You are not logged in please log in",
      text: "You cant see details without loggin in",
      icon: "warning",
      buttons: ["not now",true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        navigate('/login')
      } else {
        swal("You must login to see details");
      }
    });
  }
  }


    return (
        <tr>
            <td></td>
            <td>{username}</td>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          ${price}

        </td>
        <td>{quantity}</td>
        <td>{category}</td>
        <th>
          {user?
        <Link to={`/toydetails/${_id}`}><button className="btn btn-warning btn-xs">details</button></Link>:<button onClick={showLogin} className="btn btn-warning btn-xs">details</button>}

      

        </th>
      </tr>
            

    );
};

export default ToyTable;