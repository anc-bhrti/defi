import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Web3 from 'web3';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log("Metamask connected");
            } catch (error) {
                console.error(error);
            }
        } else {
            console.error("Metamask not detected");
        }
    };

    return (
        <div className='header'>
            <div className='container'>
                <h1>De<span className='primary'>Fi</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='Learn.js'>Learn</a>
                    </li>
                    <li>
                        <a href='Contact'>Contact Us</a>
                    </li>
                    <li>
                        <a href='More'>More</a>
                    </li>
                </ul>
                <div className='btn-group'>
                    <button className='btn' onClick={connectWallet}>Connect Wallet</button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (
                        <FaTimes size={20} style={{ color: '#333' }} />
                    ) : (
                        <FaBars size={20} style={{ color: '#333' }} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
