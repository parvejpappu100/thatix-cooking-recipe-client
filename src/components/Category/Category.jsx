import React from 'react';

const Category = ({category}) => {
    const {name , img} = category;
    return (
        <div className=''>
            <img className='rounded-full h-60 w-60 hover:rotate-6 duration-1000' src={img} alt="" />
            <h5 className='text-center my-2 me-5 text-3xl font-semibold'>{name}</h5>
        </div>
    );
};

export default Category;