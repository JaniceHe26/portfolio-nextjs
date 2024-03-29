import React, { ReactElement } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';

export default function Nav(): ReactElement {
  return (
    <div className='nav-container'>
      <title>Janice He</title>
      <header className='name-header'>
        <Link href='/'>
          {`{/*J&He*/}`}
        </Link>
      </header> 
      <nav> 
        <ul className='list-container'>
          <li>
            <Link href='/'>
              <a>{`{/*home*/}`}</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>{`{/*about*/}`}</a>
            </Link>
          </li>
          <li>
            <Link href='/project'>
              <a>{`{/*project*/}`}</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Button />
    </div>
  )
}
