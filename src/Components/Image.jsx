import React from 'react'
import Desktop from './Images/image-product-desktop.jpg';
import Mobile from './Images/image-product-mobile.jpg';

const Image = () => {
    return (
    <>
        <div>
            <img src={Desktop} alt={'Desktop'} className='w-auto h-[393px] block rounded-l-lg smL:hidden' />
            <img src={Mobile} alt={'Mobile'} className='w-72 hidden rounded-t-lg smL:block' />
        </div>
    </>
    )
}

export default Image;