import Banner from "../Banner/Banner";
import CustomersFeedback from "../CustomersFeedback/CustomersFeedback";
import Faq from "../Faq/Faq";
import Features from "../Features/Features";
import GallerySection from "../Gallery/Gallery";
import Gallery from "../Gallery/Gallery";
import ToyCategories from "../ToyCategories/ToyCategories";
import useTitle from "../UseTitle/UseTitle";


const HomeBody = () => {
    useTitle('Home')
    return (
        <div className="">
       <Banner></Banner>
       <ToyCategories></ToyCategories>
       <GallerySection></GallerySection>
       <Features></Features>
       <CustomersFeedback></CustomersFeedback>
       <Faq></Faq>
       </div>
    );
};

export default HomeBody;