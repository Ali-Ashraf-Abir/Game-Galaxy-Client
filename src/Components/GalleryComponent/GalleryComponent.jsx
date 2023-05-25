
import { Gallery } from "react-grid-gallery";
import React, { useContext } from 'react';
import { AuthContext } from "../../AuthProvider/AuthProvider";

import { Link } from "react-router-dom";
import useTitle from "../UseTitle/UseTitle";
const GalleryComponent = () => {
    useTitle('Image Gallery')
    window.scroll(0,0)
    const {toys}=useContext(AuthContext)





    const images = [
 
     ];

     toys.map(toy=> images.push({
        name:`${toy.name}`,
        src: `${toy.img}`,
        width: 100,
        height: 100,
        caption: `${toy.name}`,}
     ))



    return (
        <div className="mt-[50px] max-w-[1280px] mx-auto">
            <div className="text-center text-3xl lg:text-5xl my-[50px]">All Images Of Our Products</div>
            <div className="gallery " >
                {images.map(image=><div className="pics tooltip" data-tip={image.name}>
                <img src={image.src} style={{width:'100%'}}></img></div>
                )}
            </div>
         
        </div>
    );
};

export default GalleryComponent;