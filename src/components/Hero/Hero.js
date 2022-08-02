import React from 'react';
import { images } from '../../images'
import Button from 'react-bootstrap/Button'

const Hero = () => {
  return (
   <div>
      <div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
        <div className='carousel-indicators'>
          <Button data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></Button>
          <Button data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></Button>
          <Button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3'></Button>
        </div>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={images.hero} className='d-block w-100' alt='hero'/>
            <div className='carousel-caption d-none d-md-block'>
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
        <div className='carousel-item'>
          <img src={images.hero1} className='d-block w-100' alt='hero1'/>
          <div className='carousel-caption d-none d-md-block'>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
          <div className='carousel-item'>
          <img src={images.hero2} className='d-block w-100' alt='hero2'/>
          <div className='carousel-caption d-none d-md-block'>
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <Button className='carousel-control-prev' type='Button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </Button>
      <Button className='carousel-control-next' type='Button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </Button>
      </div>
    </div>
  )
}

export default Hero;