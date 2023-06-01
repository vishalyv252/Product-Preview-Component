import React from 'react'
import Image from './Components/Image';
import FirstHeading from './Components/FirstHeading';
import SecondHeading from './Components/SecondHeading';
import Paragraph from './Components/Paragraph';
import Price from './Components/Price';
import Proceed from './Components/Proceed';

const App = () => {
  return (
  <>
    <div className='flex justify-center items-center h-screen w-full'>
      <div className='flex justify-center items-center flex-row smL:flex-col h-auto w-auto'>
        <Image />
        <div className='bg-White w-80 rounded-r-lg smL:w-72 smL:rounded-bl-lg smL:rounded-br-lg smL:rounded-r-none'>
        <div className='m-5'>
          <FirstHeading />
          <SecondHeading />
          <Paragraph />
          <Price />
          <Proceed />
        </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default App;