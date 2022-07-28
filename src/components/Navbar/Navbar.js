import React from 'react';
import { images } from '../../images'

const Navbar = () => {
  return (
    <div className='container bg-dark bg-gradient text-white'>
        <div className='row'>
            <div className='col-4'>
                <img src={images.logo} className='w-50' />
            </div>
            <div className='col-4'>
                <p className='h4 text-center'>Welcome to Tmazon</p>
            </div>
            <div className='col-4'>

            </div>
        </div>
        
    </div>
    
  )
}

export default Navbar;