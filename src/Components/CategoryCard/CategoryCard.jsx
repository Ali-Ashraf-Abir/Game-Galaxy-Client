import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CategoryCard = ({ toy }) => {
    const { name, category, price, quantity, rating, description, email, img, _id } = toy
    const navigate=useNavigate()
    const {user}=useContext(AuthContext)
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
        <div>
            <div className="card lg:w-[60vh] w-[100%] bg-base-200 shadow-xl ">
                <figure><img className='lg:h-[30vh]' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-[3.5vh]">{name}</h2>
                        <div className="flex justify-end font-bold text-[2.4vh]">
                        <p>price:$ {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Rating: {rating}/10</p>
                        </div>
                    <div className="card-actions justify-end">
                    {user?
        <Link to={`/toydetails/${_id}`}><button className="btn btn-warning btn-xs">details</button></Link>:<button onClick={showLogin} className="btn btn-warning btn-xs">details</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;