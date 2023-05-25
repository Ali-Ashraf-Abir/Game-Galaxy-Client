import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const UpdateProduct = () => {

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

        const product={name,category,price,quantity,rating,description,email,img}
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

            <div className="text-center text-3xl py-10">Update your Product</div>

            <form onSubmit={handleAddProduct} action="" className='flex flex-col justify-center items-center w-100% p-20 border-2 border-warning'>


                    
                    
                    <div className="mt-10 flex flex-col lg:flex-row  justify-center items-center gap-5">
                        <p>Price:</p>
                <input required type="text" name='price' placeholder="Price" className="input w-full max-w-xs " />
                <p>Quantity:</p>
                <input required type="number" name='quantity' placeholder="quantity" className="input w-full max-w-xs " />
        <br></br>
        </div>
        <div  className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-5">
                <p>Description</p>
                <textarea required name="productDescription" placeholder="Product Description" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                <p>Email:</p>
                <input required type="email" name='email' placeholder="email" value={user?.email} className="input w-full max-w-xs" />
                </div>

              
                <input className='btn btn-warning mt-10 w-[40%] mx-auto' type="submit" value="Submit" />
               

            </form>



        </div>
    );
};

export default UpdateProduct;