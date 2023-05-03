import React from 'react';

const Category = ({category}) => {
    const {name , img} = category;
    return (
        <div className=' flex flex-col gap-3 items-center'>
            <img className=' rounded-full h-60 w-60 hover:rotate-180 duration-1000' src={img} alt="" />
            <h5 className=' text-3xl font-semibold'>{name}</h5>
        </div>
    );
};

export default Category;