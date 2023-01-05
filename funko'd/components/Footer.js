import React from 'react'
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container' >
      <p>2022 Funko'd Store All rights reserved</p>
      <p>Made with ❤️ by Patrice Pavico</p>
      <p className='icons'>
        <Link href='https://github.com/patriceandrea/Funko-d-store'>
          <AiFillGithub />
        </Link>
        <Link href='https://www.linkedin.com/in/patrice-pavico-59012a163/'>
          <AiOutlineLinkedin />
        </Link>
      </p>
    </div>
  )
}

export default Footer;



