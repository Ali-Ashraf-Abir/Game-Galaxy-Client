import React, { useEffect, useState } from 'react';
import ToyTable from '../ToyTable/ToyTable';
import useTitle from '../UseTitle/UseTitle';

const AllToys = () => {

    useTitle('All Toys')
    const [sortAscending, setSortAscending] = useState(true);
    const [toys, Settoys] = useState([])
    const [seeMore,setSeeMore]=useState(false)
    useEffect(() => {

        fetch('https://game-galaxy-server-ali-ashraf-abir.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {

                Settoys(data)
            })



    }, [])

    const handleSearch = (event) => {

        event.preventDefault()


        const searchText = event.target.search.value

        fetch(`https://game-galaxy-server-ali-ashraf-abir.vercel.app/toySearchByName/${searchText}`)
            .then((res) => res.json())
            .then((result) => {
                Settoys(result);
            });
    }

    const handleSortByPrice = () => {
        // Toggling the sorting order
        const newSortOrder = !sortAscending;
        setSortAscending(newSortOrder);

        // Sorting the toys array based on price
        const sortedToys = [...toys].sort((a, b) => {
            if (sortAscending) {
                return a.price - b.price; // Ascending order
            } else {
                return b.price - a.price; // Descending order
            }
        });

        // Update the toys state with the sorted array
        Settoys(sortedToys);
    };

    console.log(toys.length)
    return (
        <div className='min-h-screen mt-[20px]'>
      


            <div className="text-center">
                <form onSubmit={handleSearch} action="">
                    <input className='py-4 px-5 border-2 border-warning rounded-lg mb-5' type="text" placeholder='Enter Product Name' name='search' />
                    <input className='btn btn-warning ml-2' type="submit" value="search" />
                </form>
            </div>
            <div className='text-center my-3'>
                <button className='btn' onClick={handleSortByPrice}>Sort by price</button>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>category</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {seeMore||toys.slice(0,19).map(toy => <ToyTable
                            id={toy._id}
                            toy={toy}
                        ></ToyTable>)}
                   {seeMore&&toys.map(toy => <ToyTable
                            id={toy._id}
                            toy={toy}
                        ></ToyTable>)}

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>category</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
                {toys.length>20?<div className='text-center mt-[10px]'><button onClick={()=>setSeeMore(!seeMore)} className='btn btn-warning'>{seeMore?'See Less':'See More'}</button></div>:''}
            </div>
            
        </div>
    );
};

export default AllToys;