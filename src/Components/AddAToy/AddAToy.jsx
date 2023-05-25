import React, { useContext, useReducer } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../UseTitle/UseTitle';

const AddAToy = () => {
    useTitle('Add A Toy')
    const {user}=useContext(AuthContext)

    const handleAddProduct=(event)=>{

        event.preventDefault()

        const form=event.target 
        const name=form.name.value 
        const category = form.category.value 
        const price = form.price.value 
        const quantity= form.quantity.value 
        const rating = form.rating.value 
        const description=form.productDescription.value 
        const email=form.email.value 
        const img=form.url.value
        const username=user.displayName

        const product={name,category,price,quantity,rating,description,email,img,name,username}
        console.log(product)

        fetch('https://game-galaxy-server-ali-ashraf-abir.vercel.app/toys',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(product),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

        toast('your product has been added succesfully')
        form.reset()



    }




    return (
        
        <div className='w-100% bg-base-200 mt-[20px]'>
          <Toaster></Toaster>

            <div className="text-center text-3xl py-10">Add your Product</div>

            <form onSubmit={handleAddProduct} action="" className='flex flex-col justify-center items-center w-100% p-20 border-2 border-warning'>


                    
                    <div className="flex flex-col lg:flex-row mt-10 justify-center items-center gap-5">
                    <p>Name:</p>
                <input required type="text" name='name' placeholder="Enter Product Name" className="mr-10 input full max-w-xs" />
                <p>Category:</p>
                <select required name='category' className="select w-full max-w-xs">
                    <option disabled select='true'>Category</option>
                    <option>Console</option>
                    <option>Games</option>
                    <option>Action Figures</option>
                    <option>Gaming Accessories</option>
                </select>
                    <br></br>
                    </div>
                    <div className="mt-10 flex flex-col lg:flex-row  justify-center items-center gap-5">
                        <p>Price:</p>
                <input required type="text" name='price' placeholder="Price" className="input w-full max-w-xs " />
                <p>Quantity:</p>
                <input required type="number" name='quantity' min='1' max='1000' placeholder="Quantity" className="input w-full max-w-xs " />
                <p>Rating:</p>
                <input required type="number" name='rating' min='1' max='10' placeholder="Rating" className="input w-full max-w-xs" />
        <br></br>
        </div>
        <div  className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-5">
                <p>Description</p>
                <textarea required name="productDescription" placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                <p>Email:</p>
                <input required type="email" name='email' placeholder="email" value={user?.email} className="input w-full max-w-xs" />
                </div>

                <input required type="text" name='url' placeholder="Enter Product ImageURL" className="input w-full max-w-xs mt-10" />
                <input className='btn btn-warning mt-10 w-[40%] mx-auto' type="submit" value="Submit" />
               

            </form>



        </div>
    );
};

export default AddAToy;