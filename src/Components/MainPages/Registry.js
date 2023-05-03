import React from 'react';

import puertoRico from '../../images/puertoRico.jpg';
import registry from '../../images/registry.png';
export default function Registry() {
  return (
    <>
      <div></div>
      <div className='registry-container'>
        <h1 className='registry-header'>Registry Options</h1>
        <hr className='main-hr' />
        <div className='registry-child'>
          <div className='wedding-info'>
            <h1 className='wedding-day'>
              Donate to Our Puerto Rico Honeymoon Fund Here
            </h1>
          </div>
          <a
            className='regular-links'
            href='https://registry.theknot.com/ed-oconnor-shelly-applegate-july-2023-nj/41696237'
            target='_blank'
            rel='noreferrer'
          >
            <img
              className='honeymoon-photo'
              src={puertoRico}
              alt='honey moon'
            />
            <h3>Click Here!</h3>
          </a>
        </div>
        <hr className='registry-hr' id='registry-sc-hr' />
        <div className='registry-child'>
          <div className='wedding-info'>
            <h1 className='wedding-day'>Target</h1>
          </div>
          <a
            className='regular-links'
            href='https://www.target.com/gift-registry/gift-giver?registryId=55c3e040-e46a-11ed-bfce-2955859b8a1a&type=WEDDING'
            target='_blank'
            rel='noreferrer'
          >
            <img className='honeymoon-photo' src={registry} alt='registry' />
            <h3>Click Here!</h3>
          </a>
        </div>
      </div>
      <div></div>
    </>
  );
}
