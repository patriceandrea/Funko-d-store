import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container' >
      <p>2022 Funko'd Store All rights reserved</p>
      <p>Made with ❤️ by Patrice Pavico</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer;



