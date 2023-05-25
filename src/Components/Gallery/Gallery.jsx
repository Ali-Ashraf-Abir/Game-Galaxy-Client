import { Gallery } from "react-grid-gallery";
import React, { useContext } from 'react';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import './Gallery.css'
import { Link } from "react-router-dom";
const GallerySection = () => {


    const {toys}=useContext(AuthContext)





    const images = [
 
     ];

     toys.slice(0,11).map(toy=> images.push({
        name:`${toy.name}`,
        src: `${toy.img}`,
        width: 100,
        height: 100,
        caption: `${toy.name}`,}
     ))



    return (
        <div className="mt-[50px] max-w-[1280px] mx-auto">
            <div className="text-center text-3xl lg:text-5xl my-[50px]">Images Of Our Products</div>
            <div className="gallery">
                {images.map(image=><div className="pics tooltip" data-tip={image.name}>
                <img src={image.src} style={{width:'100%'}}></img></div>
                )}
            </div>
            {toys.length>10?<div className="text-center mt-[20px]"><Link to='imagegallery'><button className="btn btn-warning">See More images</button></Link></div>:''}
        </div>
    );
};

export default GallerySection;