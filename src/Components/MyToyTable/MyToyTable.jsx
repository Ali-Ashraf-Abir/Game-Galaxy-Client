import React, { useContext } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';


const MyToyTable = ({ toy }) => {

  const { name, category, price, quantity, rating, description, email, img, _id } = toy

  const { deleted, setDeleted, user,updated,setUpdated } = useContext(AuthContext)

  const handleDelete = (id) => {

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`https://game-galaxy-server-ali-ashraf-abir.vercel.app/toys/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              toast('deleted Successfully')
            }
            setDeleted(true)
    
    
    
          }
          )
        swal("Poof! Your product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your product is safe!");
      }
    });



  }

  const handleUpdateProduct=(event)=>{

    event.preventDefault()

    const form=event.target 
    const price = form.price.value 
    const quantity= form.quantity.value 
    const id=form.id.value
    const description=form.productDescription.value 
    const product={price,quantity,description,id}

    console.log(product)

    fetch(`https://game-galaxy-server-ali-ashraf-abir.vercel.app/updatejob/${_id}`,{
      method:'PUT',
      headers: {'content-type':'application/json'},
      body:JSON.stringify(product)
    })
    .then(res=>res.json())
    .then(result=>{
      if(result.modifiedCount>0){
        toast('your product has been updated succesfully')
        form.reset()
       
      }
  
    })
    setUpdated(true)
 


   



}


  return (

    <tr>
      <td></td>

      <td>
        <Toaster></Toaster>
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
        {/* The button to open modal */}
        <label htmlFor={_id} className="btn btn-xs mr-2 btn-warning">Edit</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id={_id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">

            <div className="text-center text-3xl">Update Your Product</div>
            <form onSubmit={handleUpdateProduct} action="" className='bg-base-200 flex flex-col justify-center items-center w-100% p-20 border-2 border-warning'>


                <div className="">
                <input required type="text" name='id' placeholder="id" value={_id} className="input w-full max-w-xs hidden" />
                </div>

              <div className="mt-10 flex flex-col lg:flex-row  justify-center items-center gap-5">
                <p>Price:</p>
                <input required type="text" name='price' placeholder="Price" defaultValue={price} className="input w-full max-w-xs " />
                <p>Quantity:</p>
                <input required type="number" name='quantity' placeholder="quantity" defaultValue={quantity} className="input w-full max-w-xs " />
                <br></br>
              </div>
              <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-5">
                <p>Description</p>
                <textarea required name="productDescription" defaultValue={description} placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                <p>Email:</p>
                <input required type="email" name='email' placeholder="email" value={user?.email} className="input w-full max-w-xs" />
              </div>


              <input className='btn btn-warning mt-10 w-[40%] mx-auto' type="submit" value="Submit" />


            </form>

            <div className="modal-action text-center">
              <label htmlFor={_id} className="btn">Close</label>
            </div>
          </div>
        </div>

        <button onClick={() => handleDelete(_id)} className="btn btn-danger btn-xs ">Delete</button>
      </th>
    </tr>
  );
};

export default MyToyTable;