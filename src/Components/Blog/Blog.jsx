import React from 'react';
import useTitle from '../UseTitle/UseTitle';


const Blog = () => {
    window.scroll(0, 0)
    useTitle('Blog')
    return (
        <div>
            <div>

                <hr className='border-2 border-base-300 w-auto rounded-lg mx-auto mb-4' />
                <h2 className='text-6xl font-semibold font-bebas text-center italic py-2 bg-base-200 text-white'>Blog Page</h2>
                <hr className='border-2 border-base-300 w-auto rounded-lg mx-auto mt-4' />
                <div className='bg-base-200 text-white w-11/12 mx-auto rounded-lg mt-6'>

                    <div className='flex justify-center items-center mb-5'>
                        <h2 className='text-5xl font-semibold text-center underline italic'>Q/A</h2>

                    </div>

                    <div>
                        <div className='px-4 pt-3'>
                            <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                            <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> An access token is a short-lived credential used to access protected resources, such as APIs, while a refresh token is a long-lived token used to obtain new access tokens after they expire. Access tokens are stored in memory or local storage on the client-side, while refresh tokens should be stored in an HTTP-only secure cookie for enhanced security, ensuring they are not accessible to JavaScript and can only be transmitted over HTTPS.</p>
                        </div>
                        <div className='px-4 pt-3'>
                            <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> Compare SQL and NoSQL databases?</h2>
                            <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> SQL databases use a structured schema, SQL language for querying, prioritize data consistency, and are suitable for applications with complex relationships and structured data. NoSQL databases have a flexible schema, use various query languages/APIs, prioritize scalability and availability over strict consistency, and are suitable for handling large volumes of unstructured or semi-structured data and real-time applications.</p>
                        </div>
                        <div className='px-4 pt-3'>
                            <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> What is express js?</h2>
                            <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> Express.js is a popular web application framework for Node.js that provides a simple and minimalist approach to building web servers and APIs. It offers a robust set of features and middleware for handling HTTP requests, routing, and rendering responses. Express.js is known for its flexibility and extensibility, allowing developers to create scalable and efficient web applications.</p>
                        </div>
                        <div className='px-4 pt-3'>
                            <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> What is Nest JS?</h2>
                            <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> Nest.js, on the other hand, is a progressive and opinionated framework for building scalable and maintainable server-side applications using TypeScript. It is built on top of Express.js and provides a structured and modular architecture inspired by Angular. Nest.js combines the power of TypeScript, decorators, and dependency injection to enable developers to create highly organized and scalable applications with ease. It offers features such as dependency injection, modules, decorators, middleware, and more, making it suitable for building complex enterprise-grade applications.</p>
                        </div>
                        <div className='px-4 pt-3'>
                            <h2 className='text-2xl font-semibold'><span className='font-semibold'>Q:</span> What is MongoDB aggregate and how does it work?</h2>
                            <p className='text-xl p-2'><span className='font-semibold'>Ans:</span> MongoDB's aggregate is a powerful framework used for performing advanced data aggregation operations on collections of documents. It allows developers to process and transform data in a flexible and efficient manner. Aggregation pipelines are constructed using stages such as $match, $group, $project, $sort, $lookup, and more, which are applied sequentially to the documents in the collection. Each stage modifies or filters the data, passing the results to the next stage in the pipeline. By combining multiple stages, MongoDB's aggregate facilitates operations like grouping, filtering, sorting, joining, and performing calculations on data, enabling developers to extract valuable insights and generate meaningful reports from their MongoDB collections.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;