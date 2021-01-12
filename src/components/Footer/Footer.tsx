import React, { ReactElement } from 'react';
import { GoOctoface } from '@react-icons/all-files/go/GoOctoface';
import { HiCode } from '@react-icons/all-files/hi/HiCode';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';
import { HiOutlineMail } from '@react-icons/all-files/hi/HiOutlineMail';


// const iconStyle = {
  
// }


export default function Footer(): ReactElement {
  return (
    <div>
      <footer>
        <p> janice he 2020 </p>
        <a 
          href='https://github.com/JaniceHe26' 
          target='_blank' 
          rel='noopener noreferrer'>
            <GoOctoface aria-label='Click here for Github' size='1.5rem'/>
        </a>
        <a 
          href='https://github.com/JaniceHe26/portfolio-nextjs' 
          target='_blank' 
          rel='noopener noreferrer'>
          <HiCode aria-label='Click here for source code' size='1.5rem' />  
        </a>
        <a 
          href='https://www.linkedin.com/in/janicehe26' 
          target='_blank' 
          rel='noopener noreferrer'>
          <FiLinkedin aria-label='Click here for my LinkedIn' size='1.5rem'/>  
        </a>
        <a 
          href='mailto:janicehe26@gmail.com' 
          target='_blank' 
          rel='noopener noreferrer'>
          <HiOutlineMail aria-label='Click here to email me' size='1.5rem'/> 
        </a>
      </footer>
    </div>
  )
}