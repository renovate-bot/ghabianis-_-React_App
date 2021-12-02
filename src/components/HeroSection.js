import React from 'react'
import { Button } from './Button'
import '../App.css';
import './HeroSection.css';
function HeroSection() {
    return (
        <div className='hero-container'>  
           <h1>ADVENTURE AWAIT</h1>
           <p>What are you waiting for?</p>
            <div className='hero-btns'>
              <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                  GET STARTED</Button>
                  <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                  WATCH TRAILLER <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    )
}

export default HeroSection
