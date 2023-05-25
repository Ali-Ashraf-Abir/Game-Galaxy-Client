import React from 'react';

const Faq = () => {

    return (
        <div>
            <div className="text-center text-5xl my-[50px]">FAQ Section</div>
            <div className="">
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Who Sells Our Product?
                    </div>
                    <div className="collapse-content">
                        <p> Our Product is sold by verified top class merchants all over the world</p>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How Much Time Does Delivery Takes?
                    </div>
                    <div className="collapse-content">
                        <p> Depending on the location it can take upto 3 days to 1 week</p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What happens if the product is faulty?
                    </div>
                    <div className="collapse-content">
                        <p> We do have a 7 days return policy,so if your product is faulty you can return it any time</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Faq;