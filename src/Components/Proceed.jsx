import React from 'react';
import Cart from './Images/icon-cart.png';

const Proceed = () => {
    return (
    <>
        <div className='m-3'>
            <button className='flex bg-DarkCyan p-3 w-full justify-center rounded-lg hover:bg-VeryDarkBlue'>
                <img src={Cart} alt={'Cart'} className='mt-1 mr-2 text-White' />
                <p className='font-Montserrat font-semibold text-White'>Add to Cart</p>
            </button>
        </div>
    </>
    )
}

export default Proceed;