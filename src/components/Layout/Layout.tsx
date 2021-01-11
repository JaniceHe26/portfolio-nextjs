import React, { ReactElement } from 'react';
import Nav from '../Nav/Nav';

interface LayoutProps {
  children: ReactElement
}

export default function Layout(props: LayoutProps): ReactElement {
  return (
    <>
      <Nav />
      {props.children}
    </>
  )
}