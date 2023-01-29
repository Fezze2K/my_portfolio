import './App.css';

import TypeWriter from 'typewriter-effect'

function Heading2() {

  const greetingTitles = [
    "Hey",
    "Salam",
    "Hej",
    "Hola!",
    "Sat Sri Akal",
    "Bonjour!"
  ];
  
  const getRandomGreetingTitle = () => {
    return greetingTitles[Math.floor(Math.random() * greetingTitles.length)];
  };


  return (
  <div className='tracking-wider font-mono text-white text-9xl text-center'> 
      <TypeWriter
        options={{
          loop: true
        }}
        onInit={(typewriter) => {
          typewriter.pauseFor(100).typeString("Salam").start().deleteAll(100)
          
        }}
      />
  </div>
  );
}

export default Heading2;
