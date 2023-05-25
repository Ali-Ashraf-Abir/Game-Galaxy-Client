import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from '../CategoryCard/CategoryCard';


const ToyCategories = () => {
    const [toys, Settoys] = useState([])
    const [category,setCategory]=useState('category1')


    useEffect(() => {

        fetch('https://game-galaxy-server-ali-ashraf-abir.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => {

                Settoys(data)
                
            })



    }, [])

    const handleCategory=()=>{

    }

    return (
        <div className="">
            <div className="text-center text-3xl lg:text-5xl mt-[50px]">
            <p>Some Of Our Products</p>
            </div>
        <div className='text-center mt-[20px]'>
    <Tabs>
    <TabList>
      <Tab>Console</Tab>
      <Tab>Action Figures</Tab>
      <Tab>games</Tab>
      <Tab>gaming accessories</Tab>
    </TabList>

    <TabPanel >
        <div className="text-center text-2xl my-[50px]">Available Consoles</div>
        <div className='lg:grid lg:grid-cols-2 grid-cols-1 lg:w-[60%] w-[100%] mx-auto gap-10'>

      {
        toys.filter(toy=>toy.category=='Console').slice(0,20).map(toy=><CategoryCard
        id={toy._id}
        toy={toy}
        ></CategoryCard>)

      }
      </div>
      {toys.filter(toy=>toy.category=='Gaming Accessories').length>19?<div className='flex justify-center items-center mt-[20px]'><button className='btn btn-warning text-center'>see more</button></div>:''}
    </TabPanel>
    <TabPanel>
    <div className="text-center text-2xl my-[50px]">Action Figures</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-[60%] w-[100%] mx-auto gap-10'>

      {
        toys.filter(toy=>toy.category=='Action Figures').slice(0,20).map(toy=><CategoryCard
        id={toy._id}
        toy={toy}
        ></CategoryCard>)

      }
      </div>
      {toys.filter(toy=>toy.category=='Gaming Accessories').length>19?<div className='flex justify-center items-center mt-[20px]'><button className='btn btn-warning text-center'>see more</button></div>:''}
    </TabPanel>
    <TabPanel>
    <div className="text-center text-2xl my-[50px]">Games</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-[60%] w-[100%] mx-auto gap-10'>

      {
        toys.filter(toy=>toy.category=='Games').slice(0,20).map(toy=><CategoryCard
        id={toy._id}
        toy={toy}
        ></CategoryCard>)

      }
      </div>
      {toys.filter(toy=>toy.category=='Gaming Accessories').length>19?<div className='flex justify-center items-center mt-[20px]'><button className='btn btn-warning text-center'>see more</button></div>:''}
    </TabPanel>
    <TabPanel>
    <div className="text-center text-2xl my-[50px]">Gaming Accessories</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-[60%] w-[100%] mx-auto gap-10'>

      {
        toys.filter(toy=>toy.category=='Gaming Accessories').slice(0,20).map(toy=><CategoryCard
        id={toy._id}
        toy={toy}
        ></CategoryCard>)
        
      }
     
      </div>
      {toys.filter(toy=>toy.category=='Gaming Accessories').length>19?<div className='flex justify-center items-center mt-[20px]'><Link to='/alltoys'><button className='btn btn-warning text-center'>see more</button></Link></div>:''}
    </TabPanel>
  </Tabs>
        </div>
        </div>
    );
};

export default ToyCategories;