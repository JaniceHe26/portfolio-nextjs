import React, { ReactElement } from 'react';
import Image from 'next/image';

export default function AboutComp(): ReactElement {
  return (
    <section className='about-container'>
      <Image src="/static/assets/images/janice.png" alt="Janice's profile picture" width={300} height={300} className='profile-img' />
      <div>
      {/* onHover for a more human translation later, use this later
          https://upmostly.com/tutorials/react-onhover-event-handling-with-examples */}
        <h1>hello, world! i am janice</h1>
        <h2>solutions consultant 🔅| software engineer 🌙</h2>
        <p>i love learning new things and stuff from the INTERNweb and other hoomans</p>
        <p>then i use that big brain knowledge to kahsdjhaksjdfhkjlashdf a creative application</p>
        <p>when i am not coding, learning, overthinking, memeing, listening to moosic, or rewatching f.r.i.e.n.d.s for the 999999^th x</p>
        <p>--and no they were not on a break--</p>
        <p>you can find me raging on League of Lego or losing my neurons and glial cells to other video games</p>
        <p>if i have not convinced you that i am crazy yet or scared you away</p>
        <p>please check out my work and resume</p>
        <p>any feedback, greatly appreciated</p>
        <p>p.s. maybe i can be a professional clown if development job does not work out for me</p>
      </div>
    </section>
  )
}
