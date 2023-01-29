import {useState} from 'react'
import './App.css';
import TypeWriter from 'typewriter-effect'
import { getRoles } from '@testing-library/react';



function Heading() {

  const myArray = [
    'Hi, my name is <strong>Faizan!</strong>', 
    'Bonjour, Je m\'appelle <strong>Faizan</strong>',
    'Hej, mitt namn är Faizan',
    // 'السلام عليكم میرا نام فیضان ہے ',
  ]
  const randomized = myArray.sort((a,b) => 0.5 - Math.random())
  
  return (
  <div className='tracking-wider font-mono text-white text-9xl text-center'> 
      <TypeWriter 
        options={{ 
          loop: true,
          autoStart: true,
          delay: 100,
          strings: randomized

        }}
        // onInit={
        //   (typewriter) => {
        //     typewriter.typeString(`Hey, I'm Faizan. I am ${role}`).pauseFor(pauseFor).start().pauseFor(pauseFor).deleteAll().callFunction(() => setNewRole())
        //   }
        // }
      />
  </div>
  );
}

export default Heading;
