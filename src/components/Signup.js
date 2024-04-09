import React from 'react';
import './Signup.css';

import Uniswap from '../assets/Uniswap_Logo.svg.png';
import Compound from '../assets/compound.png';
import Aave from '../assets/aave.png';
import Maker from '../assets/maker.png';
import Sushi from '../assets/sushi.png';
import Yearn from '../assets/yearn.png';
import Curv from '../assets/curv.png';
import Pancake from '../assets/pancake.png';
import Synthetix from '../assets/synthetix.png';
import Bancor from '../assets/bancor.png';

const Signup = () => {
    const tokens = [
        { name: 'Uniswap', image: Uniswap, link: 'https://app.uniswap.org/' },
        { name: 'Compound', image: Compound, link: 'https://app.compound.finance/' },
        { name: 'Aave', image: Aave, link: 'https://app.aave.com/' },
        { name: 'MakerDAO', image: Maker, link: 'https://vote.makerdao.com/' },
        { name: 'SushiSwap', image: Sushi, link: 'https://app.sushi.com/' },
        { name: 'Yearn Finance', image: Yearn, link: 'https://yearn.finance/' },
        { name: 'Curv Finance', image: Curv, link: 'https://www.curve.fi/' },
        { name: 'PancakeSwap', image: Pancake, link: 'https://pancakeswap.finance/' },
        { name: 'Synthetix', image: Synthetix, link: 'https://www.synthetix.io/' },
        { name: 'Bancor', image: Bancor, link: 'https://www.bancor.network/' }
    ];

    return (
<div className='signup'>
    {tokens.map((token, index) => (
        <div className='container token-container' key={index}>
            <div>
                <img src={token.image} alt={token.name} />
                <a href={token.link}>{token.name}</a>
            </div>
        </div>
    ))}
</div>

    );
};

export default Signup;
