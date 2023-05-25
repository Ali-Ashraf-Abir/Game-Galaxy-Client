

const Banner = () => {
    return (
        <div className=' mt-[30px] bg-[url("/banner.jpg")] w-[100%] h-[100vh] bg-cover font-nunito ' data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            <div className='bg-[rgb(0,0,0,0.8)] h-[100%] w-[100%] flex justify-center items-center flex-col'>
                <h1 className='lg:text-7xl sm:text-5xl font-semibold'>Hello Gaming Fans</h1><br></br>
                <h1 className='lg:text-5xl sm:text-4xl font-semibold'>Welcome to The</h1><br></br>
                <h1 className='lg:text-7xl sm:text-5xl font-semibold font-mogra'>Gaming <span className='text-[#874e33]'>Galaxy</span></h1><br></br>
                <p className='text-xl sm:text-lg font-semibold'>A place where you will find all the gaming accessories and toys you need for yourself</p><br />
                <button className='btn btn-warning'>Shop Now</button>
            </div>
           
        </div>
    );
};

export default Banner;