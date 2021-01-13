import React, { ReactElement } from 'react';
import Link from 'next/link';

//do inline styling here?
// const linkStyle = {
    //fixed? 
// }

export default function Nav(): ReactElement {
  return (
    <>
      <title>Janice He</title>
      <header>
        Janice He 
      </header> 
      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </nav>
    </>
  )
}