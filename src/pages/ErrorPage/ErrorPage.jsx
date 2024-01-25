import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {

    useTitle("Error")

    const navigate = useNavigate();
    const handleGoBack = () =>{
        navigate(-1);
    }

    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className='lg:container mx-auto my-10 text-center'>
            <img className=' mx-auto' src="https://img.freepik.com/premium-vector/flat-modern-character-trying-connecting-cables-web-online-page-with-404-found-error_372769-2127.jpg?w=826" alt="" />
            <p className='text-xl font-bold'>PAGE NOT FOUND</p>
            <p className='my-3'>The page you are looking for might have been removed had its named changed or it is temporary unavailable</p>
            <button onClick={handleGoBack} className='btn btn-ghost my-5'>Go Back</button>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
  );
};

export default ErrorPage;