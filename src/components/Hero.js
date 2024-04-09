import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                        <h2>One place to connect all your DeFi services.</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero