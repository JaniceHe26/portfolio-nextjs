import React, { ReactElement } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: ReactElement
}

export default function Layout(props: LayoutProps): ReactElement {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}